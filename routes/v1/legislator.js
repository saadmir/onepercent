var router = require('express').Router();

var legislatorProps = [
	"id",
  "name",
  "state",
  "district",
  "political_party",
  "term_starts_on",
  "term_ends_on"
];

var legislators = {};

router
  .get('/legislator/:id', function(req, res) {
    if ('id' in req.params && legislators[req.params.id]) {
      res.status(200).json(legislators[req.params.id]);
    } else {
      res.status(400).end();
    }
  })
  .post('/legislator', function(req, res) {
    var legislator = {};
    var isValidInput = legislatorProps.every(function(k){
      if (req.body[k]) {
        legislator[k] = req.body[k];
        return true;
      }

      return false;
    });

    if (isValidInput) {
      legislators[legislator.id] = legislator;
      res.status(200).json(legislator);
    } else {
      res.status(400).end();
    }
  });

module.exports = router;

