require('dotenv').config();
const express = require('express');
const app = express();
const DB = require('./lib/db');



app.get('/',(req,res)=>{
    res.send("working ");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
    DB.mongoDB()  
});

