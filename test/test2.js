const http = require('http')
const assert = require('assert')
const sqlite3 = require('sqlite3').verbose();

describe('Test #2', function() { 
    it('Compare Population Density', function (done) {
        let db = new sqlite3.Database('./test/countries.db');
        let sql = 'SELECT * FROM countries WHERE Population/Area<50';
        db.all(sql, [], (err, rows) => {
            if (err) { throw err; }
            let tmp = [];
            rows.forEach((row) => { tmp.push(row.Name) });
            assert.deepEqual(tmp, ['USA'])
            done()
        });
    }); 

    it('Check Population', function (done) {
        let db = new sqlite3.Database('./test/countries.db');
        let sql = 'SELECT sum(Population) as SUM FROM countries';
        db.all(sql, [], (err, rows) => {
            if (err) { throw err; }
            let tmp;
            rows.forEach((row) => { tmp = row.SUM});
            assert(tmp<2000000000)
            done()
        });
    });
});

//let sql = 'SELECT sum(Population) as SUM FROM countries';