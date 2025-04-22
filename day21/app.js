const express = require('express');
const {requestLogs} = require("./utils/logger")
const {saveProductDB}=require('./Database/db');
const port = 5100;
const app = express();
app.use(express.json());

app.use((req, res, next)=>{
      requestLogs(req);
      next();
})


app.get("/", (req, res)=>{
      requestLogs(req);
      res.json({
            status:"success",
            message: `server is running on port ${port}`
      })
      res.send("hello")
})


app.post("/products", (req, res)=>{
      try{
            const data = req.body;
            saveProductDB(data);
            res.json({
                  status:"success",
                  message:"good bhai"
            })
      }catch(err){
            console.log("/products", err.message)
            res.status(500);
            res.json({
                  status:"failed",
                  message:"hooh .."
            })
      }
})


app.use((req, res, next)=>{
      res.status(404);
      res.json({
            status : 'fail',
            message: "you are trying to access a route which is not defined yet"
      })
      next();
})

app.listen((port), ()=>{
      console.log(`app is listenning on port : ${port}`)
})