const fs = require('fs');

const data = fs.readFile('test.txt', function(err, data) {
    if(err) {
        console.log(err)
    } 
    setTimeout( () => {
        console.log('Display After 2 Sec')
    }, 2000)
})

console.log('Start Here')