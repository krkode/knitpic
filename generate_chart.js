'use strict';

function generate_chart(event){
  var input = document.getElementById('input_image');
  input.addEventListener('load', function(load_event){
    var image = load_event.target;
    var canvas = init_canvas(image);
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    var key = create_key(context, canvas.width, canvas.height);
    var color_chart = document.getElementById('color_chart');
    generate_grid(color_chart, canvas.width, canvas.height, key);
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

function generate_grid(color_chart,x, y, key){
  var table = '<table cellspacing="0" cellpadding="10px">';
      for(var iy=0;iy<=y;iy++){
          table += '<tr>';
          for(var ix=0;ix<=x;ix++){
            table += '<td id="'+ix.toString()+','+iy.toString()+'"></td>';
          }
          table += '</tr>';
      }
      table += '</table>';
  
  color_chart.innerHTML = table;
  color_grid(key);
}

function color_grid(key){
  //TODO: should i just move this functionality to create_color_histogram.display_key cause key is being iterated over there anyway? and like web shit values speed over readability no?
  for (const [color, value] of Object.entries(key)){
    for (const coordinate of value["coordinates"]){
      var cell = document.getElementById(coordinate);
      cell.style.backgroundColor = color;
      cell.innerHTML = value["id"];
    }
  }
  
}