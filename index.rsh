'reach 0.1';

const common = {
  ...hasRandom
}
export const main = Reach.App(() => {
  const Alice =  Participant('Alice', {
    ...common,
    ready: Fun([], Null),
    attachAlert: Fun([Tuple(Address, Bool)], Null)
  });
  const Bob = API('Bob', {
    connect: Fun([], Bool),
  });

  init();

  Alice.only(() => {
    interact.ready();
  })
  Alice.publish();
  
  const [ counter ] = 
    parallelReduce([ 0 ])
      .invariant( balance() ==  balance())
      .while(true)
      .api_(Bob.connect, () => {      //this is the branch that runs when ctc.apis.Bob.connect() is called on the frontend
        check( this != Alice, "Not Deployer");    //this is a check you run on the account calling the function. The expression must resolve to true else the api function call will fail

        return [ 0, (resolve) => { //the value (0) here is the amount the account pays to call this function. In this case it is 0. 'resolve' can be named anything. Any value you pass to it is what the function returns on the frontend
          resolve(counter < 5);  //here (counter < 5) was passed to resolve. The boolean value it computes is what gets sent back to the frontend
          if(counter < 5){
            Alice.interact.attachAlert([this, true]);
            return [ counter + 1];  //this is what gets returned to the loop like in a while loop: the variable expression that gets called before 'continue' which updates the loop parameter
          }
          else {
            Alice.interact.attachAlert([this, false]);
            return [ counter ];  //same here
          }
        }]
      })
    
      commit();
      exit(); 
})
