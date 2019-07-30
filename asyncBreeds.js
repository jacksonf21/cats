// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    if (!error) callback(data); 
    else callback(undefined);
  });
 }

//console.log('Return Value: ', bombay) // => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;