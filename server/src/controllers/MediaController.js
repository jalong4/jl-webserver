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
  },

  post (req, res) {
    Media.create(req.body, function (err, doc) {
      if (err) {
        console.log('Error: ', err)
        return res.status(500).send({
          error: err.message
        })
      }

      res.send({message: `Media entry for ${req.body.filename} successfully created...`})
    })
  },
  get (req, res) {
    Media.get(req.params.id, function (err, doc) {
      if (err) {
        res.status(400).send({message: err.message})
      } else {
        res.json(doc)
      }
    })
  },
  delete (req, res) {
    Media.delete(req.params.id, function (err, doc) {
      // const statusCode = JSON.parse(response).n
      if (err) {
        res.status(400).send({message: err.message})
      } else if (doc == null) {
        res.status(401).send({message: `Media Id: ${req.params.id} does not exist.`})
      } else {
        res.send({message: `Deleted Media Id ${req.params.id}`})
      }
    })
  }
}
