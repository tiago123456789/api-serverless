'use strict';

require("./../configs/Database");
const ProductRepository = require("./../repository/ProductRepository");
const productRepository = new ProductRepository();

module.exports.main = async event => {
  const { id } = event.pathParameters;
  const datasModified = JSON.parse(event.body);
  await productRepository.update(id, datasModified);
  return {
    statusCode: 204
  };
};
