'use strict'

//TODO: expand on all these tests and build out the /test folder for
// further app functionality
// Remember, this is only a very basic boilerplate to get apps off the ground

const should = require('chai').should()
const req    = require('supertest')

const app    = require('../server')

/* these routes will be built out and refined a little bit more when the
   project is extended */
describe('Routes', function() {
    it('must respond with 200 for /', function(done) {
        req(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .end(function(err, res) {
                if (err) { return done(err) }
                done()
            })
    })

    it('must respond with 200 and return JSON /home', function(done) {
        req(app)
            .get('/home')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function(err, res) {
                if (err) { return done(err) }
                done()
            })
    })
})
