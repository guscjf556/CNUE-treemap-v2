const fs = require('fs')

fs.readdir('./sprites/withName',(err, files) => {
    if(err) throw err;
    files.forEach((file) => {
        let newFileName = `${file.split('.')[0]}.${file.split('.')[2]}`
        fs.rename(`./sprites/withName/${file}`,`./sprites/withName/${newFileName}`,() => {console.log('done')})
    })
})