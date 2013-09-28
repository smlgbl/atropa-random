var random = require('../src/atropa-random.js');

try {
    Object.keys(random).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = random[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-random.js');
}

Object.keys(random.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = random.data[prop];
    }
);
