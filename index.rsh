'reach 0.1';

const common = {
  ...hasRandom
}
export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
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
      .api_(Bob.connect, () => {
        check( this != Alice, "Not Deployer");

        return [ 0, (resolve) => {
          resolve(counter < 5);
          if(counter < 5){
            Alice.interact.attachAlert([this, true]);
            return [ counter + 1];
          }
          else {
            Alice.interact.attachAlert([this, false]);
            return [ counter ];
          }
        }]
      })
    
      commit();
      exit(); 
})