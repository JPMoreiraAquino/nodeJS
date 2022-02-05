class NotImplemetedException extends Error {
    constructor () {
        super("Not Implemented Exception")
    }
}

class ICrud {
    create(item) {
        throw new NotImplemetedException()
    }

    read(query) {
        throw new NotImplemetedException()
    }

    update(id, item) {
        throw new NotImplemetedException()
    }

    delete(id) {
        throw new NotImplemetedException()
    }


}


module.exports = ICrud