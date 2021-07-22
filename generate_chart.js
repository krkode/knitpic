'use strict';

function generate_chart(event){
  var input = document.getElementById('input_image');
  input.addEventListener('load', function(load_event){
    var image = load_event.target;
    //add_gridlines(image);
    var canvas = init_canvas(image);
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

  });
  preview_image(input, event);
}

function init_canvas(image){
  var canvas = document.getElementById('knit_chart');
  var chart_width = document.getElementById('chart_width').value;
  canvas.width = chart_width;
  canvas.height = image.height * (chart_width/image.width);
  return canvas;
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