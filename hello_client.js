var unirest = require('unirest');

unirest.get('http://localhost:8080/test').end(function(response) {
  console.log('Status:', response.statusCode);
  console.log('Headers: ', response.headers);
  console.log('Body:', response.body);
});
