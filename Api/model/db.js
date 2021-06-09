const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/node_demo',(err) => {
    if(!err){
        console.log('Successfully connected');
    }
    else{
        console.log('error in connection!!!');
    }
})