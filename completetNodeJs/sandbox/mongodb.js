const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-menager'
const options = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

const id = new ObjectID ()

console.log(id)
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, options, (error, client) => {
    if (error) {
        return console.log('unable to connect to db')
    }

    const db = client.db(databaseName)
 
    // db.collection('users').insertOne(
    //     {
    //         _id: id,
    //         name: 'mila',
    //         age: 6
    //     },
    // (error, result) => {
    //     return error ? console.log('unable to insert documents'): console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'take a nap',
    //         completed: false
    //     },
    //     {
    //         description: 'take a php course',
    //         completed: true
    //     },
    //     {
    //         description: 'take a nodeJs course',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     return error ? console.log('unable to insert documents'): console.log(result.ops)
    // })
})

