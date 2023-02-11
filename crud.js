const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;



//fs.writeFileSync( filePath, 'This is Simple Text File');

// fs.appendFile(filePath, "now apple is red", (err)=>{
//     if(!err) console.log("file is updated")
// })

fs.rename(filePath, `${dirPath}/frute.txt`, (err)=>{
if(!err) console.log("file is renamed now");
})