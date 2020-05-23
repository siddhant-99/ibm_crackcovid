const md5 = require('spark-md5');

function main(params) {
  return {
    entries: params.rows.map((row) => { return {
      location: row.doc.location,
      lattitude: row.doc.lattitude,
      longitude: row.doc.longitude,
      npeople: row.doc.npeople,
      score: row.doc.score
    }})
  };
}