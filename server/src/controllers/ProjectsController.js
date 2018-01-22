const Projects = require('../models/Projects')

module.exports = {
  index (req, res) {
    Projects.index(function (err, projects) {
      if (err) {
        res.send({error: err.message})
      } else {
        res.json(projects)
      }
    })
  },
  post (req, res) {
    Projects.create(req.body, function (err, doc) {
      if (err) {
        console.log('Error: ', err)
        return res.status(500).send({
          error: err.message
        })
      }

      res.send({message: `Project ${req.body.name} successfully created...`})
    })
  },
  get (req, res) {
    Projects.get(req.params.id, function (err, doc) {
      if (err) {
        res.status(400).send({message: err.message})
      } else {
        res.json(doc)
      }
    })
  },
  delete (req, res) {
    Projects.delete(req.params.id, function (err, doc) {
      // const statusCode = JSON.parse(response).n
      if (err) {
        res.status(400).send({message: err.message})
      } else if (doc == null) {
        res.status(401).send({message: `Project Id: ${req.params.id} does not exist.`})
      } else {
        res.send({message: `Deleted project Id ${req.params.id}`})
      }
    })
  }
}
