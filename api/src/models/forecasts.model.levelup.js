module.exports = function(app, options) {
  options.db = app.db.collection('forecasts')
}