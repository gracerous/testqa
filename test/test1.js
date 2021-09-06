const assert = require('assert');
const fs = require('fs');
const request = require('request');

let download = function(uri, filename, callback){ 
    request.head(uri, function(err, res, body){ 
      console.log('content-type:', res.headers['content-type']); 
      console.log('content-length:', res.headers['content-length']); 
   
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback); 
    }); 
  };

describe('Test #1', function() {
    it('Compare images base on base64', function () {
        download('http://apimeme.com/meme?meme=Alarm-Clock&top=Top+text&bottom=Bottom+text', './compare.jpeg', function () { console.log('done') });
        let etalon = fs.readFileSync('./test/example.jpg', { encoding: 'base64' });
        let compared = fs.readFileSync('compare.jpeg', { encoding: 'base64' });
        assert.equal(etalon, compared);
    });
});