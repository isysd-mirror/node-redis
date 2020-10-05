'use strict'
var redis = undefined

if (typeof(process) !== 'undefined' && process.release && process.release.name === 'node' && typeof (require) !== 'undefined') {
  redis = require('./index.js')
}

export { redis }
