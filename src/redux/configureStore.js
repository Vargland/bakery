if (process.env.NODE_ENV === 'production') {
  module.exports = require('./store.dev')
} else {
  module.exports = require('./store.dev')
}
