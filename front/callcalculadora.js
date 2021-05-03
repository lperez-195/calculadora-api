 function suma() {
   var myX = $('#x').val();
   var myY = $('#y').val();
   var url = "http://localhost:8085/suma/?x=" + myX + "&y=" + myY;
   console.log('url');
   console.log(url);
   $.getJSON(url,
    function(json) {
      console.log(json);
      $('#suma').html(json.result);
    }
   );
 }

 function resta() {
   var myX = $('#x').val();
   var myY = $('#y').val();
   var url = "http://localhost:8085/resta/?x=" + myX + "&y=" + myY;
   console.log('url');
   console.log(url);
   $.getJSON(url,
    function(json) {
      console.log(json);
      $('#resta').html(json.result);
    }
   );
 }

 function mult() {
   var myX = $('#x').val();
   var myY = $('#y').val();
   var url = "http://localhost:8085/mult/?x=" + myX + "&y=" + myY;
   console.log('url');
   console.log(url);
   $.getJSON(url,
    function(json) {
      console.log(json);
      $('#mult').html(json.result);
    }
   );
 }

 function div() {
   var myX = $('#x').val();
   var myY = $('#y').val();
   var url = "http://localhost:8085/div/?x=" + myX + "&y=" + myY;
   console.log('url');
   console.log(url);
   $.getJSON(url,
    function(json) {
      console.log(json);
      $('#div').html(json.result);
    }
   );
 }

 function pow() {
   var myX = $('#x').val();
   var myY = $('#y').val();
   var url = "http://localhost:8085/pow/?x=" + myX + "&y=" + myY;
   console.log('url');
   console.log(url);
   $.getJSON(url,
    function(json) {
      console.log(json);
      $('#pow').html(json.result);
    }
   );
 }

 function cuad() {
   var myN = $('#n').val();
   var url = "http://localhost:8085/cuad/?n=" + myN;
   console.log('url');
   console.log(url);
   $.getJSON(url,
    function(json) {
      console.log(json);
      $('#cuad').html(json.result);
    }
   );
 }

 function sqrt() {
   var myN = $('#n').val();
   var url = "http://localhost:8085/sqrt/?n=" + myN;
   console.log('url');
   console.log(url);
   $.getJSON(url,
    function(json) {
      console.log(json);
      $('#sqrt').html(json.result);
    }
   );
 }
