const Repository = require("./Repository");
const ProductCollection = require("./../collections/Product");

class ProductRepository extends Repository {

    constructor() {
        super(ProductCollection);
    }
}

module.exports = ProductRepository;