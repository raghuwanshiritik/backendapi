const express = require('express')
const app = express()
const dotenv =require('dotenv')
const connectdb =require('./db/connectdb')
const web =require('./routes/web')



app.use(express.json())


dotenv.config({
    path:'.env'
})



connectdb()
//router load
app.use('/',web)







app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
