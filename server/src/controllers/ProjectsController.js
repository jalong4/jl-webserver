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
  }
}
