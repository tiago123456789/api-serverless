'use strict';

require("./../configs/Database");
const ProductRepository = require("./../repository/ProductRepository");
const productRepository = new ProductRepository();

module.exports.main = async event => {
  const newProduct = JSON.parse(event.body);
  const product = await productRepository.create(newProduct);
  return {
    statusCode: 201,
    body: JSON.stringify(product)
  };
};
