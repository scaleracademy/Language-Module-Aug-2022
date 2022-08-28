const fs = require('fs')

fs.writeFile(__dirname + '/file.txt', 'Hello World!', (err) => {
  if (err) throw err 

  console.log('file written')
})

console.log('xxx')