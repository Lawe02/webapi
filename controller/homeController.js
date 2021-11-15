'use strict';

exports.index = (req, res) => {
   res.sendfile('public/index.html');
};
exports.data = (req, res) => {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyjoomvCUbUOZIwz'}).base('appFUe5qse4xBUmuA');

  let recordList = [];
  
  base('Design projects').select({
      // Selecting the first 3 records in All projects:
       
      view: "All projects"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.forEach(function(record) {
          let newTest = JSON.stringify(record._rawJson);
          recordList.push({
            "raw": newTest
          });
        });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
  }, function done(err) {
    res.send(JSON.stringify(recordList));

      if (err) {
         console.error(err); return; 
        }
        
  });
   
};