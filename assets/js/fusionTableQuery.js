var getData=function (where,cb,cond){

              var query = "SELECT * FROM " +where+" "+cond;
              var encodedQuery = encodeURIComponent(query);      		
              // Construct the URL
              var url = ['https://www.googleapis.com/fusiontables/v1/query'];
              url.push('?sql=' + encodedQuery);
              url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
              url.push('&callback=?');
              // Send the JSONP request using jQuery
              $.ajax({
                url: url.join(''),
                dataType: 'jsonp',
                success: cb 
              });

        };

var setData=function (where, values){
              var query = "INSERT INTO "+where+" (reportero,texto) VALUES ('hola','hola')";// +values;
              var encodedQuery = encodeURIComponent(query);
              // Construct the URL
              var url = ['https://www.googleapis.com/fusiontables/v1/query'];
              url.push('?sql=' + encodedQuery);
              url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
              url.push('&callback=?');
              // Send the JSONP request using jQuery
              $.ajax({
                  type: "POST",
                  url: url.join(''),                  
                  success: function(err){
                    console.log(err);
                }
              });
              
};

// data:{
//                     "kind": "fusiontables#table",
//                     "tableId": ,
//                     "name": string,
//                     "columns": [
//                       column Resource
//                     ],
//                     "description": string,
//                     "isExportable": boolean,
//                     "attribution": string,
//                     "attributionLink": string,
//                     "baseTableIds": [
//                       string
//                     ],
//                     "sql": string
//                   }