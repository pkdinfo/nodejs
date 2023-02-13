const dbConnect = require('./mongodb');
const updateData = async () =>{
    let data = await dbConnect();
    let result = data.updateOne( 
        {name : 'pravin'},
        {
            $set: {name: 'pravin dwivedi'}
        }
    )
    console.warn(data);
}

updateData();