const Sonus = require('sonus')
const speech = require('@google-cloud/speech')
const client = new speech.SpeechClient({
	keyFilename: __dirname + '/keyfile.json'
})

const hotwords = [{ file: __dirname +'/resources/models/computer.umdl', hotword: 'computer' }]
const sonus = Sonus.init({ hotwords, recordProgram: 'arecord' }, client)

Sonus.start(sonus)
sonus.on('hotword', (index, keyword) => console.log("!"))
sonus.on('final-result', console.log)

console.log('Listening...');
