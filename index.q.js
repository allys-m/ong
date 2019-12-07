
'use strict';

let main = {};

main.start = $(function(){
  var fset = $('#fset'),
      nav  = $('#nav');
  
  fset.on('mouseover', function(){
    nav.css({ 'fontSize': '15px' });
  });
  
  alert("Juste a test ");
})();
