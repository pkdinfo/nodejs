const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
   let result = await data.insert(
      [
          {name: 'pravin'},
          {name: 'preeti'},
      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();