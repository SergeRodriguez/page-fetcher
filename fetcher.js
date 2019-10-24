const request = require('request');
const fs = require('fs');
const URL = process.argv[2]
const localFilePath = process.argv[3]


function run() {
  request(URL, (error, response, resource) => {

    if ((response && response.statusCode) !== 200) {
      console.log("You made a mistake in the URL!");
      console.log("error: ", error)
    }

    fs.writeFile(localFilePath, resource, (err) => {

      if (err) throw err;
      console.log('File saved!');
      fs.stat(localFilePath, function (err, stats) {

        console.log(`Donwloaded and saved ${stats.size} bytes to ${localFilePath}`);
      });
    })
  });
}

run()




