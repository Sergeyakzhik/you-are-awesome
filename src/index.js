const createEnumerableProperty = name => name;

const createNotEnumerableProperty = name1 => {
    Object.defineProperty(Object.prototype, name1, {
        enumerable: false,
        set: function (value) {
            Object.name1 = value;
        },
        get: function () {
            return Object.name1;
        }
    });
    return name1;
};

Function.prototype.valueOf = function () {
    return this.i;
};

const createProtoMagicObject = () => {
    return Function;
};

const incrementor = () => {
    incrementor.i++;
    return incrementor;
};

incrementor.i = 0;

const asyncIncrementor = () => {
    asyncIncrementor.i++;
    return asyncIncrementor;
};

asyncIncrementor.i = 0;

const createIncrementer = () => {
    function* gen() {
        var v = 0;
        for(let j = 0; j < 3; j++) {
            v++;
            yield v;
        }
    }
    return gen();
};

const returnBackInSecond = (x) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
};

var number = 0;

const getDeepPropertiesCount = (obj) => {
    let ind = number;
    for(let i in obj){
        if (obj.hasOwnProperty(i)) {
            number++;
            getDeepPropertiesCount(obj[i]);
        }
    }
    return number - ind;
};

const createSerializedObject = () => {
    return Object(JSON.stringify(this));
};

const toBuffer = () => {};

const sortByProto = (obj) => {
    return obj.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;