'use strict';

require("./../configs/Database");
const ProductRepository = require("./../repository/ProductRepository");
const productRepository = new ProductRepository();

module.exports.main = async event => {
  const products = await productRepository.findAll();
  
  return {
    statusCode: 200,
    body: JSON.stringify(products)
  };
};
