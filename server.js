var express = require('express');
var app = express();
var fs = require("fs");
var converter = require("xls-to-json");  

app.get('/listNSEStocks', function (req, res) {

    converter({  
      input: "c:\\equity_l.xls", 
      output: null
    }, function(err, result) {
      if(err) {
        console.error(err);
      } else {
		  res.setHeader("Access-Control-Allow-Origin", "*");
          console.log(JSON.stringify(result));
          res.end (JSON.stringify(result));
      }

    });
})

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


