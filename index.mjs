import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

//create test account
const startingBalance = stdlib.parseCurrency(1000);
const acc = await stdlib.newTestAccount(startingBalance);

//Set up functions for checking balance
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance()
console.log('Your starting balance is: ' + before)
console.log(`Your address is ${acc.getAddress()}`)


const Common = {
  //...hasRandom
  random: () => stdlib.hasRandom.random(),
};

//Define interface for Alice
const Alice = {
  ...Common,

  ready: async () => {
    const ready = await ask('Are you ready to accept attachers', yesno)
    if(!ready) process.exit()
  },

  attachAlert: (outcome) => {
    const success = outcome[1]
    const address = outcome[0]
    if(success){
      console.log(address + " successfully got added to list")
    }
    else {
      console.log(address + " failed to be added to list")
    }
  }
};


//Program starts here
const program = async () => {

  const isAlice = await ask(
    `Do you want to create a contract and have APIs interact with it, or would you like to interact with an already existing one as an API?`,
    yesno
  )
  
  const who = isAlice ? 'Alice' : 'Bob';
  console.log(`Starting as ${who}`);

  //Contract gets initialized here
  let ctc = null; 

  if(isAlice){ //if deployer
    ctc =  acc.contract(backend); // connect to contract
    backend.Alice(ctc, Alice)
    const info = JSON.stringify(await ctc.getInfo(), null, 1) //fetch contract info
    console.log(info); //display info
  }
  else{
    const info = await ask(
      `Please paste the contract information of the contract you want to connect to:`, 
      JSON.parse
    );
    ctc = acc.contract(backend, info);
    const connected = await ctc.apis.Bob.connect()

    if(connected){
      console.log("Successfully connected to contract and got added to list");
    }
    else console.log(`Maximum of 5 attachers have been attained`)
  }

}

await program();
