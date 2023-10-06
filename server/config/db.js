const mongoose = require('mongoose');
const{ MongoClient} = require('mongodb');
const config = require('config');
const db = process.env.MONGODB_URI || config.get('mongoURI');


// const dbc = async () => {
//     console.log("trying ....")
//     await mongoose.connect(db, {
//         keepAlive: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//         // useFindAndModify: false,
//     })
//         .then(x => {
//             console.log(
//                 `Connected to Mongo! Database name: "${x.connections[0].name}"`,
//             );
//         })
//         .catch(err => {
//             console.error('Error connecting to mongodb ...', err);
//         });
//     return mongoose;
// };

// module.exports = dbc;

// const fun =async ()=>{

//   const client=new MongoClient(db);

//   try{

//     await client.connect();
//     console.log('mongo connected ....');

//   }catch(err){
//     console.log("unable to connect to mongo db ",err);
//   }
// //   finally{
// //     console.log("disconnected ");
// //     client.close();
// //   }

// };

// mongoose.set('debug', true);

// const assert = require('assert');
// const GITHUB_ISSUE = `gh7243`;
// const connectionString = `mongodb://localhost:27017/${ GITHUB_ISSUE }`;
// const { Schema } = mongoose;

// run().then(() => console.log('mongo connected ')).catch(error => 
//   console.dir(error, { depth: 4 }));

// async function run() {
//   await mongoose.connect(db, { useNewUrlParser: true });
// }

const connectdb= async ()=>{
    try{
        await   mongoose.connect(db,
            { useNewUrlParser: true, useUnifiedTopology: true }       
        );
        console.log('mongo connected scf');
    }catch(err){
        console.log("unable to connect to mongo db ",err);
    }

}


module.exports = connectdb;