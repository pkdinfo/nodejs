const path = require('path');
const http = require('http');
const fs = require('fs');

const dirPath = path.join(__dirname, 'files');
//console.warn(dirPath);
for(i=0; i<5; i++)
{
    fs.writeFileSync(dirPath+'/hello'+i+'.txt','Simple Texty');
}



fs.readdir(dirPath, (err,files)=>{
    files.forEach( (item)=>{ console.log("file name is ", item);})
   
})



//==========================================================================
//const path = require('path');
//const dirPath = path.join(__dirname, 'files');
// const http = require('http');
// const data = require('./data');
// const http = require('colors');
// //fs.writeFileSync("helo.txt", "coding ");
// console.log("Pravin" .red);
// http
// 	.createServer((req, resp) => {
// 		resp.writeHead(200, { 'Content-Type': 'application/json' });
// 		resp.write(JSON.stringify(data));
// 		resp.end();
// 	})
// 	.listen(7000);

//console.log('my name is pravin');
