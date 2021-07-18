'use strict';

function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var input = document.getElementById('input_image');
      input.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }