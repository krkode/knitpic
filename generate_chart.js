'use strict';

function generate_chart(event){
  var input = document.getElementById('input_image');
  input.addEventListener('load', add_gridlines)
  preview_image(input, event);  
}

function preview_image(input, event) {
    var reader = new FileReader();
    reader.onload = function(){
      input.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

function add_gridlines(input){
  var chart = document.getElementById('knit_chart');
  //TODO: generate simplified color chart as image before gridlines i guess
  // and then set that as the chart background, hmm im sure theres a way to use the grids first though
  // cause i wanna do the most prevalent color in each square

  var x = ~~input.srcElement.clientWidth/10;
  var y = ~~input.srcElement.clientHeight/10;
  var table = '<table cellspacing="0" cellpadding="10px">';
      for(var i=1;i<=y;i++){
          table += '<tr>';
          table += '<td></td>'.repeat(x);
          table += '</tr>';
      }
      table += '</table>';
  
  var table_obj = document.createElement('table');
  table_obj.innerHTML = table;
  chart.appendChild(table_obj);    
}