const Job = require('../models/jobs');

module.exports = function (app) {

  app.get('/api/jobs', function (req, res) {
    Job.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });




  app.post('/api/jobs', function (req, res) {
   console.log('hits');
    Job.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}