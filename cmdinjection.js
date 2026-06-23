const { exec } = require('child_process')
const filename = process.argv[2]
exec('cat' + filename, (err, stdout) => {
    console.log(stdout)
})

API_KEY = "4ycX2WaK7hKmCZtDxzgPdVifD5yty2XE"

