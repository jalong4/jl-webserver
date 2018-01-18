const Projects = require('../models/Projects')

module.exports = {
  getProjects (req, res) {
    Projects.getProjects(function (err, projects) {
      if (err) {
        res.send({error: err.message})
      } else {
        res.json(projects)
      }
    })
  }
}
