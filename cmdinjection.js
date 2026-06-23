const { exec } = require('child_process')
const filename = process.argv[2]
exec('cat' + filename, (err, stdout) => {
    console.log(stdout)
})

