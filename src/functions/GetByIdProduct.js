'use strict';

require("./../configs/Database");
const ProductRepository = require("./../repository/ProductRepository");
const productRepository = new ProductRepository();

module.exports.main = async event => {
  const { id } = event.pathParameters;
  const product = await productRepository.findById(id);
  return {
    statusCode: 200,
    body: JSON.stringify(product)
  };
};
