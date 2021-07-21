'use strict';

function generate_chart(event){
  var input = document.getElementById('input_image');
  input.addEventListener('load', function(load_event){
    var image = load_event.target;
    //add_gridlines(image);
    var context = init_context(image);
    var simplified = simplify_image(image,context);

  });
  preview_image(input, event);
}

function init_canvas(image){
  var canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  return canvas;
}

function init_context(image){
  var canvas = init_canvas(image);
  var context = canvas.getContext('2d');

  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  return context;
}

function simplify_image(image, context){
  var simplified = [];
  //var width = ~~image.width/10;
  //x top
  var sx = 0
  //y top
  var sy = 0
  //width of section
  var sw = 10
  //length of section
  var sh = 10
  var simp = context.getImageData(sx,sy ,sw,sh);
  // for(var i=1;i<=image.height;i++){
  //   var simp = context.getImageData(sx,sy ,sw,sh);
  //   simplified.push(average_color(simp))
  // }
  
  alert(simp);
  return simp;
}
// most common color from the pixels in given coordinate range
function common_color(x1, x2, y1, y2){
  var color = context.getImageData(X, Y, 1, 1).data;
}
function preview_image(input, event) {
    var reader = new FileReader();
    reader.onload = function(){
      input.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

function add_gridlines(image){
  var x = ~~image.clientWidth/10;
  var y = ~~image.clientHeight/10;

  var chart = document.getElementById('knit_chart');
  var table = '<table cellspacing="0" cellpadding="10px">';
      for(var i=1;i<=y;i++){
          table += '<tr>';
          table += '<td></td>'.repeat(x);
          table += '</tr>';
      }
      table += '</table>';
  
  chart.innerHTML = table;
}