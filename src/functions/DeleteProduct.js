'use strict';

require("./../configs/Database");
const ProductRepository = require("./../repository/ProductRepository");
const productRepository = new ProductRepository();

module.exports.main = async event => {
  const { id } = event.pathParameters;
  await productRepository.delete(id);
  return {
    statusCode: 204
  };
};
