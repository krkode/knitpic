'use strict';
var KEY = []
function generate_chart(event){
  var input = document.getElementById('input_image');
  input.addEventListener('load', function(load_event){
    var image = load_event.target;
    var canvas = init_canvas(image);
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    var key = create_key(context, canvas.width, canvas.height);
    KEY = key;
    generate_grid(key);
  });
  var display_color = document.getElementById('display_color');
  display_color.addEventListener('change', function(){
    //TODO: make this not so wasteful, like no need to regenerate just remove colors and add em back bra
    if (this.checked) {
      color_grid(KEY);//TODO: eek global var thats no good, look up how to change
    } else {
      generate_grid(KEY);//TODO: eek global var thats no good, look up how to change
    }
  });
  preview_image(input, event);
}

function init_canvas(image){
  var canvas = document.getElementById('scaled_input');
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

function generate_grid(key){
  var color_chart = document.getElementById('color_chart');
  var scaled_input = document.getElementById('scaled_input');
  var x = scaled_input.width;
  var y = scaled_input.height;
  var table = '<table cellspacing="0" cellpadding="10px">';
      for(var iy=0;iy<y;iy++){
          table += '<tr>';
          for(var ix=0;ix<x;ix++){
            table += '<td id="'+ix.toString()+','+iy.toString()+'"></td>';
          }
          //y grid coordinates
          table += '<td>'+(y-iy).toString()+'</td>';//TODO since ive used iy.toString 3 times now, would it be better it declare var in loop? or is the difference miniscule?
          table += '</tr>';
      }
      // TODO: this feels sloppy like we just looped up there why we repeating here
      // x grid coordinates
      table += '<tr>';
      for(var ix=1;ix<=x;ix++){
        table += '<td>'+ix.toString()+'</td>';
      }
      table += '</tr>';
      table += '</table>';
  
  color_chart.innerHTML = '';
  color_chart.innerHTML = table;
  label_grid_cells(key);
}

function label_grid_cells(key){
  for (const [color, value] of Object.entries(key)){
    for (const coordinate of value["coordinates"]){
      var cell = document.getElementById(coordinate);
      cell.innerHTML = value["id"];
    }
  }
  
}

function color_grid(key){
  //TODO: should i just move this functionality to create_color_histogram.display_key cause key is being iterated over there anyway? and like web shit values speed over readability no?
  for (const [color, value] of Object.entries(key)){
    for (const coordinate of value["coordinates"]){
      var cell = document.getElementById(coordinate);
      cell.style.backgroundColor = color;
    }
  }
  
}