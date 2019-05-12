$('.subbtn').click(function(){
    jquery.get("http://localhost:5400/api?username='ok'", function() {
        // $( ".result" ).html( data );
        alert( "Load was performed.");
      }).complete(function (data) {
alert('okok');
      });
    })