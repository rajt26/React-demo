const express = require('express')
const app = express()
const verifyToken = require('./middleware/verifyToken')
const PhysicianController = require('./controller/physician.controller')
const cors = require('cors')
const dotenv = require('dotenv')
const userController = require('./controller/userController')
require('./model/db')
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.post('/create',PhysicianController.create)
app.put('/update',PhysicianController.update)
app.post('/delete',PhysicianController.delete)
app.get('/find',PhysicianController.getData)
app.post('/login', PhysicianController.login);
app.get('/check', PhysicianController.check);


app.post('/user/create',userController.create)
app.get('/user/get',userController.getUsers)




app.listen(4000,() => {
    console.log('server runnnig on port 4000');
})