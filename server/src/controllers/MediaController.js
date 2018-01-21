const Media = require('../models/Media')

module.exports = {
  index (req, res) {
    Media.index(function (err, media) {
      if (err) {
        res.send({error: err.message})
      } else {
        res.json(media)
      }
    })
  }
}
