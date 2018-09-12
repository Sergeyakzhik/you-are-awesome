const createEnumerableProperty = (prop) => prop;

const createNotEnumerableProperty = prop => {
    Object.defineProperty(Object.prototype, prop, {
        enumerable: false,
        set: function (value) {
            Object.prop = value;
        },
        get: function () {
            return Object.prop;
        }
    });
    return prop;
};

const createProtoMagicObject = () => Function;

const incrementor = () => {
    incrementor.counter++;
    return incrementor;
};

incrementor.counter = 0;
incrementor.valueOf = () => incrementor.counter;

const asyncIncrementor = () => {
    asyncIncrementor.counter++;
    return asyncIncrementor;
};

asyncIncrementor.counter = 0;
asyncIncrementor.valueOf = () => asyncIncrementor.counter;

const createIncrementer = () => {
    let count = 0;

    return (function* generator() {
        for(let i = count; i < 10000; i++)
            yield i + 1;
    })();
};

const returnBackInSecond = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1100);
    })
};

const getDeepPropertiesCount = (obj) => {
    let count = 0;
    let properties = Object.getOwnPropertyNames(obj);
    properties.forEach((i) =>
        count += Object.keys(obj[i]).length ? getDeepPropertiesCount(obj[i]) : 0);
        return count += properties.length
};

const createSerializedObject = () => {
    return Object(JSON.stringify(this));
};

const toBuffer = () => {};

const sortByProto = (array) => array.sort((a, b) => a.__proto__ - b.__proto__);

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





























/*




const toBuffer = () => {};

const sortByProto = (obj) => {
    return obj.sort();
};

*/
