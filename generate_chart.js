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
    var display_color = document.getElementById('display_color');
    generate_grid(key, function(){
      apply_color_preference(display_color.checked);
    });
  });
  display_color.addEventListener('change', function(){
    apply_color_preference(this.checked);
  });
  var knit_chart_padding = document.getElementById('knit_chart_padding');
  knit_chart_padding.addEventListener('change', function(){
    var knit_chart = document.getElementById('knit_chart');
    var knit_chart_cells = knit_chart.querySelectorAll('td');
    knit_chart_cells.forEach(cell => cell.style.padding = knit_chart_padding.value.toString() + 'px');
  })
  preview_image(input, event);
}

function enable_browse(event){
    var widthInput = document.getElementById('chart_width').value;
    if (widthInput != "") {
        document.getElementById('browse').removeAttribute("disabled");
    } else {
        document.getElementById('browse').setAttribute("disabled", null);
    }
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

function generate_grid(key, callback){
  var knit_chart = document.getElementById('knit_chart');
  var scaled_input = document.getElementById('scaled_input');
  var x = scaled_input.width;
  var y = scaled_input.height;
  var table = '<table>';
      for(var iy=1;iy<=y;iy++){
          table += '<tr>';
          //y grid coordinates
          table += '<td>'+(1+y-iy).toString()+'</td>';
          for(var ix=1;ix<=x;ix++){
            table += '<td id="'+ix.toString()+','+iy.toString()+'"';
            if ((ix%10===0)||(iy%10===0)){
              table += 'class="bold_td"'
            }
            table += '></td>';
          }
          //y grid coordinates
          table += '<td>'+(1+y-iy).toString()+'</td>';
          table += '</tr>';
      }
      // TODO: this feels sloppy like we just looped up there why we repeating here
      // x grid coordinates
      table += '<tr>';
      //trying to push x axis markers tot he left by 1
      table +='<td></td>';
      for(var ix=1;ix<=x;ix++){
        table += '<td>'+ix.toString()+'</td>';
      }
      table +='<td></td>';
      table += '</tr>';
      table += '</table>';
  
  knit_chart.innerHTML = '';
  knit_chart.innerHTML = table;
  label_grid_cells(key);
  callback();
}

function label_grid_cells(key){
  for (const [color, value] of Object.entries(key)){
    for (const coordinate of value["coordinates"]){
      var cell = document.getElementById(coordinate);
      cell.innerHTML = '<div class="tooltip">'+value["id"]+'<span class="tooltiptext">'+coordinate+'</span></div>';
    }
  }
  
}

function remove_colors_from_grid(key){
  for (const [color, value] of Object.entries(key)){
    for (const coordinate of value["coordinates"]){
      var cell = document.getElementById(coordinate);
      cell.style.backgroundColor = "";
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

function apply_color_preference(display_color_checked){
  if (display_color_checked) {
    color_grid(KEY);//TODO: eek global var thats no good, look up how to change
  } else {
    remove_colors_from_grid(KEY);//TODO: eek global var thats no good, look up how to change
  }
}
