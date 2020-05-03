const request = require('supertest');
let url='https://maps.googleapis.com';

describe('api testing for google maps api',function()
{
it("validating repsponse status code content-desc header",function()
{
request(url)
.get('maps/api/place/nearbysearch/json')
.set('accept','application/json')
.expect(200)
.expect('Content-Type', /json/)
.expect('Server','scaffolding on HTTPServer2')
.expect('name','Cruise Bar')

})

it("post operation ",function()
{
var user = {name: 'Bob'};
request(url)
    .post('/create-user')
    .send(user)
   .expect(400)

})


})
