const md5 = require('spark-md5');

function main(params) {
  return {
    entries: params.rows.map((row) => { return {
      sno: row.doc.sno,
      hname: row.doc.hname,
      hemail: row.doc.hemail,
      nbeds: row.doc.nbeds,
      testing: row.doc.testing,
      haddress: row.doc.haddress,
      poc: row.doc.poc,
      pocemail: row.doc.pocemail,
      createdAt: row.doc.createdAt,
      _rev: row.doc._rev,
      icon: (row.doc.hemail ? `https://secure.gravatar.com/avatar/${md5.hash(row.doc.hemail.trim().toLowerCase())}?s=64` : null)
    }})
  };
}