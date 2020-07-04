class Repository {

    constructor(collection) {
        this._collection = collection;
    }

    findAll() {
        return this._collection.find({});
    }

    findById(id) {
        return this._collection.find({ _id: id });
    }

    create(newRegister) {
        const register = new this._collection(newRegister);
        return register.save();
    }

    update(id, datasModified) {
        return this._collection.update({ _id: id }, { $set: datasModified });
    }

    delete(id) {
        return this._collection.remove({ _id: id });
    }
}

module.exports = Repository;