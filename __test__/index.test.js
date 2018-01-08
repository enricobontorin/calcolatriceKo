const root = process.env.SERVER_URL || 'http://127.0.0.1:8080'
const fetch = require("node-fetch")
const calcRoot = root+'/api'

/*
npm install --save-dev jest
npm install node-fetch --save

"jest": {
  "verbose": true,
  "collectCoverage": true
},

*/

//ROTTE e metodi utili

//router.route('/sum')
//GET /user/x per i dettagli dell'utente
const getSum = function (x, y) {
    var getSumPath = calcRoot + "/sum?x=" + x + "&y=" + y;
    return fetch(getSumPath, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
}

test('getSum', () => {
    return getSum(3,4)
        .then(getResponse => {return getResponse.json()})
        .then(getResponseJson => {
            expect(getResponseJson.risultato).toEqual(7)
          });
});



//router.route('/multiply')

const getMult = function (x, y) {
    var getMultPath = calcRoot + "/multiply?x=" + x + "&y=" + y;
    return fetch(getMultPath, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
}

test('getMultiply', () => {
    return getMult(3,4)
        .then(getResponse => {return getResponse.json()})
        .then(getResponseJson => {
            expect(getResponseJson.risultato).toEqual(12)
          });
});
