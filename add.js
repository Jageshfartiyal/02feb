const fs = require('fs');

let user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
     }
};

// convert JSON object to a string
const data = JSON.stringify(user, null, 4);

// write file to disk
fs.appendFile('./users.json', data, (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});