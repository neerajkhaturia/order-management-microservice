const MongoClient = require('mongodb').MongoClient
const getMongoURL = (options) => {
  const url = options.servers
    .reduce((prev, cur) => prev + cur + ',', 'mongodb://')

  return `${url.substr(0, url.length - 1)}/${options.db}`
}

const connect = (options, mediator) => {
  mediator.once('boot.ready', () => {
    MongoClient.connect(getMongoURL(options), function (err, client) {
      if (err) {
        mediator.emit('db.error', err)
      }
      mediator.emit('db.ready', client)
    })
  })
}

module.exports = Object.assign({}, { connect })
