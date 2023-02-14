const fs = require('fs');

fs.readFile('homework.log', 'utf-8', (err,data) => {
    if (err) {
        throw err;
    };
    setTimeout(() => console.log(data), 3000);
    fs.writeFile('log.txt', data, err => {
        if (err) {
            console.log(err)
        };
        console.log('Writing Succes')
    })
    
});



