// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Bool;
  
  
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:20:19:application',
    fs: ['at ./index.rsh:19:13:application call to [unknown function] (defined at: ./index.rsh:19:17:function exp)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v117, time: v116, didSend: v25, from: v115 } = txn1;
      
      ;
      const v118 = stdlib.checkedBigNumberify('./index.rsh:25:22:decimal', stdlib.UInt_max, '0');
      const v119 = v116;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v117, time: v116, didSend: v25, from: v115 } = txn1;
  ;
  let v118 = stdlib.checkedBigNumberify('./index.rsh:25:22:decimal', stdlib.UInt_max, '0');
  let v119 = v116;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v136], secs: v138, time: v137, didSend: v71, from: v135 } = txn2;
    undefined /* setApiDetails */;
    const v140 = stdlib.addressEq(v135, v115);
    const v141 = v140 ? false : true;
    stdlib.assert(v141, {
      at: './index.rsh:29:14:application',
      fs: ['at ./index.rsh:28:29:application call to [unknown function] (defined at: ./index.rsh:28:29:function exp)', 'at ./index.rsh:28:29:application call to [unknown function] (defined at: ./index.rsh:28:29:function exp)'],
      msg: 'Not Deployer',
      who: 'Alice'
      });
    ;
    const v144 = stdlib.lt(v118, stdlib.checkedBigNumberify('./index.rsh:32:29:decimal', stdlib.UInt_max, '5'));
    await txn2.getOutput('Bob_connect', 'v144', ctc2, v144);
    if (v144) {
      const v152 = [v135, true];
      stdlib.protect(ctc0, await interact.attachAlert(v152), {
        at: './index.rsh:34:39:application',
        fs: ['at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)', 'at ./index.rsh:34:39:application call to "liftedInteract" (defined at: ./index.rsh:34:39:application)', 'at ./index.rsh:31:31:application call to [unknown function] (defined at: ./index.rsh:31:31:function exp)'],
        msg: 'attachAlert',
        who: 'Alice'
        });
      
      const v153 = stdlib.add(v118, stdlib.checkedBigNumberify('./index.rsh:35:32:decimal', stdlib.UInt_max, '1'));
      const cv118 = v153;
      const cv119 = v137;
      
      v118 = cv118;
      v119 = cv119;
      
      continue;}
    else {
      const v158 = [v135, false];
      stdlib.protect(ctc0, await interact.attachAlert(v158), {
        at: './index.rsh:38:39:application',
        fs: ['at ./index.rsh:38:39:application call to [unknown function] (defined at: ./index.rsh:38:39:function exp)', 'at ./index.rsh:38:39:application call to "liftedInteract" (defined at: ./index.rsh:38:39:application)', 'at ./index.rsh:31:31:application call to [unknown function] (defined at: ./index.rsh:31:31:function exp)'],
        msg: 'attachAlert',
        who: 'Alice'
        });
      
      const cv118 = v118;
      const cv119 = v137;
      
      v118 = cv118;
      v119 = cv119;
      
      continue;}
    
    }
  return;
  
  
  };
export async function _Bob_connect3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_connect3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_connect3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  
  
  const [v115, v118] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1]);
  const v126 = ctc.selfAddress();
  const v128 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:28:29:application call to [unknown function] (defined at: ./index.rsh:28:29:function exp)', 'at ./index.rsh:28:29:application call to [unknown function] (defined at: ./index.rsh:28:29:function exp)'],
    msg: 'in',
    who: 'Bob_connect'
    });
  const v129 = stdlib.addressEq(v126, v115);
  const v130 = v129 ? false : true;
  stdlib.assert(v130, {
    at: './index.rsh:29:14:application',
    fs: ['at ./index.rsh:28:29:application call to [unknown function] (defined at: ./index.rsh:28:29:function exp)', 'at ./index.rsh:28:29:application call to [unknown function] (defined at: ./index.rsh:28:29:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_connect'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v115, v118, v128],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v136], secs: v138, time: v137, didSend: v71, from: v135 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_connect"
        });
      ;
      const v144 = stdlib.lt(v118, stdlib.checkedBigNumberify('./index.rsh:32:29:decimal', stdlib.UInt_max, '5'));
      const v145 = await txn1.getOutput('Bob_connect', 'v144', ctc3, v144);
      
      if (v144) {
        const v153 = stdlib.add(v118, stdlib.checkedBigNumberify('./index.rsh:35:32:decimal', stdlib.UInt_max, '1'));
        const v208 = v153;
        sim_r.isHalt = false;
        }
      else {
        const v210 = v118;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v136], secs: v138, time: v137, didSend: v71, from: v135 } = txn1;
  undefined /* setApiDetails */;
  const v140 = stdlib.addressEq(v135, v115);
  const v141 = v140 ? false : true;
  stdlib.assert(v141, {
    at: './index.rsh:29:14:application',
    fs: ['at ./index.rsh:28:29:application call to [unknown function] (defined at: ./index.rsh:28:29:function exp)', 'at ./index.rsh:28:29:application call to [unknown function] (defined at: ./index.rsh:28:29:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_connect'
    });
  ;
  const v144 = stdlib.lt(v118, stdlib.checkedBigNumberify('./index.rsh:32:29:decimal', stdlib.UInt_max, '5'));
  const v145 = await txn1.getOutput('Bob_connect', 'v144', ctc3, v144);
  if (v71) {
    stdlib.protect(ctc4, await interact.out(v136, v145), {
      at: './index.rsh:28:13:application',
      fs: ['at ./index.rsh:28:13:application call to [unknown function] (defined at: ./index.rsh:28:13:function exp)', 'at ./index.rsh:32:18:application call to "resolve" (defined at: ./index.rsh:31:31:function exp)', 'at ./index.rsh:31:31:application call to [unknown function] (defined at: ./index.rsh:31:31:function exp)'],
      msg: 'out',
      who: 'Bob_connect'
      });
    }
  else {
    }
  
  if (v144) {
    const v153 = stdlib.add(v118, stdlib.checkedBigNumberify('./index.rsh:35:32:decimal', stdlib.UInt_max, '1'));
    const v208 = v153;
    return;
    }
  else {
    const v210 = v118;
    return;
    }
  
  
  };
export async function Bob_connect(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_connect expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_connect expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Bob_connect3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_connect()byte`],
    pure: [],
    sigs: [`Bob_connect()byte`]
    },
  appApproval: `BiAFAAECAwUmAgABACI1ADEYQQFBKGRJIls1AYEIWzUCNhoAF0lBABIiNQQjNQaB+eW1qwoSRChCABY2GgIXNQQ2GgM2GgEXSSQMQAByJBJEJTQBEkQ0BEkiEkw0AhIRRClkSTUDSVcAIDX/gSBbNf5JNQU1/YAEJTy31zT9ULAxADT/E0Q0/iEEDDX8gAgAAAAAAAAAkDT8FlEHCFCwNPwWUQcINQc0/EEACzT/NP4jCDIGQgAyNP80/jIGQgApIhJEgaCNBogAlSI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAiMgZCAAA1/zX+STX9NP4WUClLAVcAKGdIJTUBMgY1AkIAHDEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v136",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v144",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_connect",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v136",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a6e380380610a6e83398101604081905261002291610215565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100aa565b610085610140565b8051339052602080820180516000905251439101526100a3816100d3565b50506102b8565b816100cf5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528551516001600160a01b031680855286830151518252600390935543600155845180830193909352518285015283518083038501815260609092019093528051919261013b926002929091019061017c565b505050565b6040805160608101825260009181019182529081908152602001610177604051806040016040528060008152602001600081525090565b905290565b8280546101889061027d565b90600052602060002090601f0160209004810192826101aa57600085556101f0565b82601f106101c357805160ff19168380011785556101f0565b828001600101855582156101f0579182015b828111156101f05782518255916020019190600101906101d5565b506101fc929150610200565b5090565b5b808211156101fc5760008155600101610201565b60006040828403121561022757600080fd5b604080519081016001600160401b038111828210171561025757634e487b7160e01b600052604160045260246000fd5b604052825181526020830151801515811461027157600080fd5b60208201529392505050565b600181811c9082168061029157607f821691505b602082108114156102b257634e487b7160e01b600052602260045260246000fd5b50919050565b6107a7806102c76000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780633e59bac414610078578063832307571461008b578063ab53f2c6146100a0578063bfbd5147146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610599565b6100db565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b5610106565b60405161006f9291906105b1565b6100cb6101a3565b604051901515815260200161006f565b6040805160208101909152600081526101026100fc36849003840184610645565b826101e1565b5050565b60006060600054600280805461011b906106d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610147906106d0565b80156101945780601f1061016957610100808354040283529160200191610194565b820191906000526020600020905b81548152906001019060200180831161017757829003601f168201915b50505050509050915091509091565b60408051602081019091526000808252906101bc61049a565b60408051602080820190925260008152908201526101da81836101e1565b5051919050565b6101f1600360005414600a610408565b815161020c90158061020557508251600154145b600b610408565b60008080556002805461021e906106d0565b80601f016020809104026020016040519081016040528092919081815260200182805461024a906106d0565b80156102975780601f1061026c57610100808354040283529160200191610297565b820191906000526020600020905b81548152906001019060200180831161027a57829003601f168201915b50505050508060200190518101906102af9190610705565b604080516020808201835260008252825133815287518183015290870151511515818401529151929350917fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd9181900360600190a1815161032a906001600160a01b03163314610320576001610323565b60005b6008610408565b61033634156009610408565b6020828101516005118083526040519081527f35f26ed8b0787dd5716460397f1f8ca34de95a6ca1301a57dc9b9b13641d6a80910160405180910390a18051151583528051156103ca576103886104c9565b825181516001600160a01b03909116905260208301516103aa9060019061074b565b60208083018051929092529051439101526103c48161042d565b50610402565b6103d26104c9565b825181516001600160a01b03909116905260208084015181830180519190915251439101526104008161042d565b505b50505050565b816101025760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080518082018252600080825260208083018281528551516001600160a01b03168085528683015151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926104959260029290910190610500565b505050565b6040518060400160405280600081526020016104c460405180602001604052806000151581525090565b905290565b60408051606081018252600091810191825290819081526020016104c4604051806040016040528060008152602001600081525090565b82805461050c906106d0565b90600052602060002090601f01602090048101928261052e5760008555610574565b82601f1061054757805160ff1916838001178555610574565b82800160010185558215610574579182015b82811115610574578251825591602001919060010190610559565b50610580929150610584565b5090565b5b808211156105805760008155600101610585565b6000604082840312156105ab57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156105e5578581018301518582016060015282016105c9565b818111156105f7576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff8111828210171561063f57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303604081121561065857600080fd5b61066061060e565b833581526020601f198301121561067657600080fd5b60405191506020820182811067ffffffffffffffff821117156106a957634e487b7160e01b600052604160045260246000fd5b604052602084013580151581146106bf57600080fd5b825260208101919091529392505050565b600181811c908216806106e457607f821691505b602082108114156105ab57634e487b7160e01b600052602260045260246000fd5b60006040828403121561071757600080fd5b61071f61060e565b82516001600160a01b038116811461073657600080fd5b81526020928301519281019290925250919050565b6000821982111561076c57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220b9ad5e40cf4812e564d9a5d063364689172f5d4a19be6fdca9a7fd68fa22990464736f6c634300080c0033`,
  BytecodeLen: 2670,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:44:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:25:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_connect": Bob_connect
  };
export const _APIs = {
  Bob: {
    connect: Bob_connect
    }
  };
