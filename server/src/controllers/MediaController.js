const Media = require('../models/Media')

module.exports = {
  getMedia (req, res) {
    Media.getMedia(function (err, media) {
      if (err) {
        res.send({error: err.message})
      } else {
        res.json(media)
      }
    })
  }
}
