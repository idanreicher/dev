const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-menager-api', {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})




