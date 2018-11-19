/* 
https://www.codementor.io/codementorteam/how-to-use-json-files-in-node-js-85hndqt32
*/

var fs = require("fs");
/* readFileSync = sincrono
readFile = asincrono */
 var contents = fs.readFileSync("foro.json");
/* String a json */
 var jsonContent = JSON.parse(contents);
 console.log(jsonContent);
/* Json a string */
 var stringContent = JSON.stringify(jsonContent);
 console.log(stringContent);
