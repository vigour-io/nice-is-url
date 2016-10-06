'use strict'
var protocol = '(((ws(s)?)|(http(s)?))\\:\\/\\/)'
var domain = '[a-zA-Z0-9_-]+'
var other = '([a-zA-Z/0-9$-/:-?{#-~!"^_`\\[\\]]+)?'
var ext = '(\\.' + other + ')'
var port = '(\\:[0-9]+)?'
var ip = '([a-zA-Z0-9]{4}:)+[a-zA-Z0-9]'
/**
 * @id isUrl
 * @function isUrl
 * Checks if a string is a valid url
 * @param {string} val - the string to check
 * @param {object} [options] - defaults to `{}`
 * - **options.requireProtocol** {boolean} - set to true if you only want URLs with a protocol to be considered valid. Defaults to `false`
 * @returns {boolean} valid - `true` if *val* is a valid url, `false` otherwise
 */
module.exports = function (val, options) {
  if (!options) {
    options = {}
  }
  var re = new RegExp('^' + protocol + (!options.requireProtocol ? '?' : '') + '(' + domain + ext + '|localhost|' + ip + ')' + port + other + '$')
  return typeof val === 'string' && re.test(val)
}
