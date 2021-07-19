'use strict';

function generate_chart(event){
  preview_image(event);
  //seems wasteful to grab the object we JUST set but idk how to return a value from the onchange event
  //maybe its anti-javascriptic
  add_gridlines();
}

function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var input = document.getElementById('input_image');
      input.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  function add_gridlines(){
    var chart = document.getElementById('knit_chart');
    var img = document.getElementById('input_image');
    //TODO: generate simplified color chart as image before gridlines i guess
    // and then set that as the chart background, hmm im sure theres a way to use the grids first though
    // cause i wanna do the most prevalent color in each square

    // var x = ~~(img.clientWidth/10);
    // var y = ~~(img.clientHeight/10);
    var x = 10;
    var y = 10;
    var table = '<table cellspacing="0" cellpadding="0">';
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