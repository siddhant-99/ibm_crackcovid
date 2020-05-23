function main(params) {
  if (!params.hname || !params.hemail) {
    return Promise.reject({ error: 'no name or comment'});
  }

  return {
    doc: {
      createdAt: new Date(),
       sno: params.sno,
       hname: params.hname,
       hemail: params.hemail,
       nbeds: params.nbeds,
       testing: params.testing,
       haddress: params.haddress,
       poc: params.poc,
       pocemail: params.pocemail
    }
  };
}