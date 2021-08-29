'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

console.log("start")
const api = new RippleAPI({
  server: 'wss://xrplcluster.com' // Public rippled server
});

 	api.connect().then(() => {
    console.log("connected")
	const address = 'rLLSeASKDRhyPJoLpXFJV3MEVJCThtWLqC';
	return api.getTransactions(address);
;
}).then(info => {
 console.log("time, source, destination, value \n" )

  info.forEach(processPayment)
  console.log('getAccountInfo done');

  /* end custom code -------------------------------------- */
}).then(() => {
  return api.disconnect();
}).then(() => {
  console.log('done and disconnected.');
  
}).catch(console.error);


function processPayment(item, index) {

    let value = item.outcome.deliveredAmount?.value ?? 0
    let time = item.outcome.timestamp
    let source = item.specification?.source?.address
    let destination = item.specification?.destination?.address

    let log = {
        "time" : time ,
        "source" : source,
        "destination" : destination,
        "value" : value
    }

    if(destination == "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv") {
      console.log(log.time + "," + log.source + "," + log.destination + "," + log.value)
    }
}