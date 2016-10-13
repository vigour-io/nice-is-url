# nice-is-url

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/nice-is-url.svg?branch=master)](https://travis-ci.org/vigour-io/nice-is-url)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/nice-is-url.svg)](https://badge.fury.io/js/nice-is-url)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/nice-is-url/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/nice-is-url?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc isUrl -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var valid = isUrl(val, [options])

Checks if a string is a valid url
- **val** (*string*) - the string to check
- **[options]** (*object*) - defaults to `{}`

- **options.requireProtocol** {boolean} - set to true if you only want URLs with a protocol to be considered valid. Defaults to `false`
- **returns** (*boolean*) valid - `true` if *val* is a valid url, `false` otherwise

<!-- VDOC END -->

```javascript
const isUrl = require('nice-is-url')
isUrl('http://localhost:3000') // true
isUrl('boom') // false
```