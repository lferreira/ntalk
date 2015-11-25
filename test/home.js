var app = require('../app')
  , should = require('should')
  , request = require('supertest')(app);

describe('HomeController', function() {

  it('should return status 200 when GET /', function(done){
    request.get('/')
           .end(function(err, res){
      res.status.should.eql(200);
      done();
    });
  });

  it('should go to / when GET /logout', function(done){
    request.get('/logout')
           .end(function(err, res){
      res.headers.location.should.eql('/');
      done();
    });
  });
  
  it('should go to / when POST empty /login', function(done){
    var empty;
    request.post('/login')
           .send(empty)
           .end(function(err, res){
      res.headers.location.should.eql('/');
      done();
    });
  });

  it('should go to /contacts when POST /login', function(done){
    var login = {user: {name: 'Node', email: 'node@teste'}};
    request.post('/login')
           .send(login)
           .end(function(err, res){
      res.headers.location.should.eql('/contacts');
      done();
    });
  });
});