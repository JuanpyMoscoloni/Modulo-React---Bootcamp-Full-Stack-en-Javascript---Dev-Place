const handleProducts = require('../../controllers/product')
const productsRouter = require('express').Router(); 


productsRouter.get('/', handleProducts.getAllProducts)

productsRouter.get('/:method/:value', handleProducts.sortProducts)



module.exports = productsRouter;
