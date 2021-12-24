'use strict';

exports.index = (req, res) => {
   res.sendfile('public/index.html');
};
exports.data = (req, res) => {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyjoomvCUbUOZIwz'}).base('appFUe5qse4xBUmuA');

  let recordList = [];
  
  base('Clients').select().eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.forEach(function(record) {
         recordList.push({
           "record": record._rawJson

         })
         
        });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
  }, function done(err) {
    res.send(recordList);

      if (err) {
         console.error(err); return; 
        }
        
  });
   
};