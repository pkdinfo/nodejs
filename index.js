// ================== MiddleWare===========================

const express = require('express');
const app = express();
const reqFilter = (req, resp, next) => {
	if (!req.query.age) {
		//console.log('reqFilter');
		resp.send('please provide your age');
	} else if (req.query.age < 18) {
		resp.send('you are under age');
	}
	{
		next();
	}
};

//app.use(reqFilter); // Application Middleware

app.get('/', (_, resp) => {
	resp.send(`Home page is here `);
});

app.get('/users', reqFilter, (_, resp) => {
	resp.send(`welcome Users`);
});

app.get('/about', (_, resp) => {
	resp.send(`about us`);
});

app.listen(7000);

//======================================Page Creation & Accesss=============
// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname,'public');
// //removing extension
// app.get('', (_, resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about', (_, resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('*', (_, resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`)
// })

// //app.use(express.static(publicPath))
// console.log(publicPath);
// app.listen(4000);

// const express = require('express');
// const app = express();

// app.get('', (req, res) => {
// 	console.log('name:--------------', req.query.name);
// 	res.send('this is home page for   ' + req.query.name);
// });

// app.get('/about', (req, res) => {
// 	res.send('this is about pages');
// });

// app.get('/help', (req, res) => {
// 	res.send('this is help page');
// });

// //creating server
// app.listen(8000);

// const path = require('path');
// const http = require('http');
// const fs = require('fs');

// const dirPath = path.join(__dirname, 'files');
// //console.warn(dirPath);
// for(i=0; i<5; i++)
// {
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt','Simple Texty');
// }

// fs.readdir(dirPath, (err,files)=>{
//     files.forEach( (item)=>{ console.log("file name is ", item);})

// })

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
