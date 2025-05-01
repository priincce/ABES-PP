const express = require('express');
const {getProductsController} = require('../controllers/get-products-controller.js');
const {createProductController} = require('../controllers/post-products-controller.js');
const {validateCreateProductDto} = require('../dto/validate-create-product-dto.js');
const productRouter = express.Router();

productRouter.get("/", getProductsController);
productRouter.post("/",validateCreateProductDto, createProductController);

module.exports ={
      productRouter,
};