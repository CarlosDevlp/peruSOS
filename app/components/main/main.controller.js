var mainController=function($scope,$http){
		
        var query = "SELECT * FROM " +
            // '1vLWBFfzx9v2W-hNh5hRfUXrXxbe-nw9XvQD8PT7c';
            '1KZiPM71xjsZJBGl7d2c4kG1A78GCnFrHHbjREpo';
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
          success: function (data) {
          	console.log(data);
        }});
};