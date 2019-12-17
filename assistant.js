const EventEmitter = require('events');
const speech = require('@google-cloud/speech');
const Sonus = require('sonus');
const client = new speech.SpeechClient({
	keyFilename: __dirname + '/keyfile.json'
})

let hotwords = [{ file: __dirname +'/resources/models/computer.umdl', hotword: 'computer' }];
let sonus = Sonus.init({ hotwords, recordProgram: 'arecord' }, client)

class Assistant extends EventEmitter {
  constructor() {
    super();
  };

  listen = Sonus.start(sonus);

};

let assitant = new Assistant;

sonus.on('hotword', (index, keyword) => {
  console.log("!");
  assitant.emit('hotword-detected', (index, keyword));
});
// sonus.on('final-result', console.log)

// console.log('Listening...');


module.exports = Assistant;