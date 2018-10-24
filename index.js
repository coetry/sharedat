const Dat = require('dat-node')

Dat(process.argv[2], (err, dat) => {
  dat.importFiles()
  dat.joinNetwork()
  console.log(`dat link - dat://${dat.key.toString('hex')}`)
})


