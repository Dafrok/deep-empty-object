var isEmpty;

function type (obj) {
    return Object.prototype.toString.call(obj).split(/ |\[|\]/g)[2]
}

function walkObjectForAll (obj) {
    switch (type(obj)) {
        case 'Object':
            for (var key in obj) {
                walkObjectForAll(obj[key])
            }
            break
        case 'Array':
            for (var i = 0; i < obj.length; i++) {
                walkObjectForAll(obj[i])
            }
            break
        case 'String':
            if (!obj) {
                break
            } else {
                isEmpty = false
                return
            }
        case 'Undefined':
        case 'Null':
            break
        default:
            isEmpty = false
            return
    }
}

function walkObjectForParts (obj) {
    switch (type(obj)) {
        case 'Object':
            if (Object.keys(obj).length) {
                for (var key in obj) {
                    walkObjectForParts(obj[key])
                }
            } else {
                isEmpty = true
                return
            }
            break
        case 'Array':
            if (obj.length === 0) {
                isEmpty = true
                return
            } else {
                for (var i = 0; i < obj.length; i++) {
                    walkObjectForParts(obj[i])
                }
            }
            break
        case 'String':
            if (!obj) {
                isEmpty = true
                return
            } else {
                break
            }
        case 'Undefined':
        case 'Null':
            isEmpty = true
            return
            break
    }
}

function all (obj) {
    isEmpty = true
    walkObjectForAll(obj)
    return isEmpty
}

function some (obj) {
    isEmpty = false
    walkObjectForParts(obj)
    return isEmpty
}

module.exports = {
    all: all,
    some: some
}
