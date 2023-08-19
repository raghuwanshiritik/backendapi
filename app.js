const express = require('express')
const app = express()
const dotenv =require('dotenv')
const connectdb =require('./db/connectdb')
const fileUpload = require("express-fileupload");
const web =require('./routes/web')
const session = require('express-session')
const flash = require('connect-flash');
const cookieParser =require('cookie-parser')
const cors = require('cors')




app.use(express.json())


dotenv.config({
    path:'.env'
})

//use for get the token frombrowser
app.use(cookieParser())

//this is use to get data
app.use(express.urlencoded({extended:false}))


//for file uplode
app.use(fileUpload({useTempFiles: true}));

//for flesh Message
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));
app.use(flash());


connectdb()
//router load
app.use('/',web)







app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
