require('dotenv').config();
require( './src/config/db.js');
const express = require('express');
const morgan = require('morgan');
const {productRouter} = require('./src/api/v1/products/routes/product-routes');

const app = express();
app.use(morgan('dev'));
app.use("/api/v1/products", productRouter);
const PORT = 3000;



app.use((req, res, next)=>{
      console.log("---hello---");
})












app.listen(PORT, ()=>{
      console.log(`Server : http://localhost:${PORT}`);
})