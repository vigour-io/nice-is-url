'use strict'
const test = require('tape')
const isURL = require('../')

const testCases = [
// ['url', expectedResult]
  ['string', false],
  ['domain.ext', true],
  ['http://domain.ext/path?query=string', true],
  ['https://domain.ext/path?query=string%20with%20spaces', true],
  ['https://domain.ext/path#withHash', true],
  ['http://domain.ext/path?query=string#withHash', true],
  ['http://domain.ext:8000', true],
  ['localhost', true],
  ['localhost/path', true],
  ['localhost:8080', true],
  ['localhost:8080/path', true],
  ['192.11.222.444', true],
  ['192.11.222.444/path', true],
  ['2001:0db8:0000:0042:0000:8a2e:0370:7334', true],
  ['2001:0db8:0000:0042:0000:8a2e:0370:7334/path', true],
  ['ws://localhost:8080', true],
  ['ws://localhost:8080/path', true],
  ['wss://etc.com', true]
]

test('isURL', function (t) {
  var nb = testCases.length
  t.plan(nb)
  for (let i = 0; i < nb; i += 1) {
    t.equals(isURL(testCases[i][0]), testCases[i][1], 'isURL(\'' + testCases[i][0] + '\') === ' + testCases[i][1])
  }
})

const protocolCases = [
// ['url', expectedResult]
  ['string', false],
  ['domain.ext', false],
  ['http://domain.ext/path?query=string', true],
  ['https://domain.ext/path?query=string%20with%20spaces', true],
  ['https://domain.ext/path#withHash', true],
  ['http://domain.ext/path?query=string#withHash', true],
  ['http://domain.ext:8000', true],
  ['domain.ext:8000', false],
  ['localhost', false],
  ['localhost/path', false],
  ['localhost:8080', false],
  ['localhost:8080/path', false],
  ['192.11.222.444', false],
  ['192.11.222.444/path', false],
  ['2001:0db8:0000:0042:0000:8a2e:0370:7334', false],
  ['2001:0db8:0000:0042:0000:8a2e:0370:7334/path', false],
  ['ws://localhost:8080', true],
  ['ws://localhost:8080/path', true],
  ['wss://etc.com', true],
  ['http://localhost', true],
  ['http://localhost/path', true],
  ['http://localhost:8080', true],
  ['http://localhost:8080/path', true],
  ['http://192.11.222.444', true],
  ['http://192.11.222.444/path', true],
  ['http://2001:0db8:0000:0042:0000:8a2e:0370:7334', true],
  ['http://2001:0db8:0000:0042:0000:8a2e:0370:7334/path', true]
]

test('isUrl (requireProtocol)', function (t) {
  var nb = protocolCases.length
  t.plan(nb)
  for (let i = 0; i < nb; i += 1) {
    t.equals(isURL(protocolCases[i][0], { requireProtocol: true }), protocolCases[i][1], 'isURL(\'' + protocolCases[i][0] + '\', { requireProtocol: true }) === ' + protocolCases[i][1])
  }
})
