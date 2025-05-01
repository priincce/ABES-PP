const validateCreateProductDto = (req, res, next) => {
      const {title, price, stock} = req.body;
      try {
            if( title === undefined || title === null || typeof title !== "string" || title.length === 0 ){
                  throw new Error("Invalid Title");
            }
            if( price === undefined || price === null || Number.isNaN(price) || Number(price) <=0){
                  throw new Error("Invalid Price");
            }
            if( stock !== undefined && stock !== null ){
                  if( Number.isNaN(stock) || Number(stock) <=0 ){
                       throw new Error("Invalid Stock");
                  } 
            }
            next();
      } catch (error) {
            res.status(400).json({
                  status: "fail",
                  message: error.message,
            });
            
      }
}

module.exports = {
      validateCreateProductDto,
}