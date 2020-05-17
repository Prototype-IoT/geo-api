import chai from 'chai';
import request from 'request';

describe('GET /', () => {
  it('should return coordinates', function(done) {
    const response = {
      items: {
        latitude: 36.214151845703125,
        longitude: -81.67890930175781
      }
    };

    const stringy = JSON.stringify(response);

    request('http://localhost:4202/', (error, response, body) => {
      chai.expect(body).to.equal(stringy);
      done();
    });
  });
});