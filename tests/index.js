'use strict';

var supertest = require("supertest");
var should = require("should");
var app = require('../index.js');

var legislators = [
  {
    "id": 1,
    "name": "John Smith",
    "state": "CA",
    "district": 1,
    "political_party": "independent",
    "term_starts_on": "2016-02-01",
    "term_ends_on": "2018-02-01"
  },
  {
    "id": 14,
    "name": "Jackie Spiere",
    "state": "CA",
    "district": 12,
    "political_party": "democrat",
    "term_starts_on": "2014-02-01",
    "term_ends_on": "2016-02-01"
  },
  {
    "id": 33,
    "name": "Ana Eshoo",
    "state": "CA",
    "district": 11,
    "political_party": "democrat",
    "term_starts_on": "2016-02-01",
    "term_ends_on": "2018-02-01"
  },
  {
    "id": 54,
    "name": "Mike Honda",
    "state": "CA",
    "district": 4,
    "political_party": "democrat",
    "term_starts_on": "2016-02-01",
    "term_ends_on": "2018-02-01"
  }
];


var server = supertest(app);

describe("/v1/legislator",function(){
  var route = '/v1/legislator/';

  describe("test happy path",function(){
    legislators.forEach(function(legislator){
      it("post legislator id " + legislator.id, function(done){
        server
          .post(route)
          .send(legislator)
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err,res){
            res.body.should.eql(legislator);
            done();
          });
      });
    });

    legislators.forEach(function(legislator){
      it("retrieve legislator id " + legislator.id, function(done){
        server
          .get(route + legislator.id)
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err,res){
            res.body.should.eql(legislator);
            done();
          });
      });
    });
  });

  describe("test invalid inputs",function(){
    it("post empty data", function(done){
      server
        .post(route)
        .send({})
        .expect("Content-type",/json/)
        .expect(400)
        .end(function(err,res){
          res.body.should.eql({});
          done();
        });
      });

    it("get unknown id", function(done){
      server
        .get(route + '4444')
        .expect("Content-type",/json/)
        .expect(400)
        .end(function(err,res){
          res.body.should.eql({});
          done();
        });
      });

    it("get without id", function(done){
      server
        .get(route)
        .expect("Content-type",/json/)
        .expect(400)
        .end(function(err,res){
          res.body.should.eql({});
          done();
        });
      });
  });
});

