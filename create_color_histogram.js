function create_key(context, width, height){
    //TODO: THIS FOR SURE NEEDS TEST CASES
    //TODO: MAKE THAT SHIT ASYNC if possible no its always possible
    var data = context.getImageData(0,0,width,height).data;
    var key = {}
    var color_index = 0
    var id_counter = 1

    for(var y=1; y <= height;++y){
        for(var x=1; x <= width; ++x){
            var color = 'rgb('+data[color_index] +','+ data[color_index+1] +','+ data[color_index+2]+ ')';
            var coordinates = x.toString()+','+y.toString();
            if (color in key){
                key[color]["coordinates"].push(coordinates);
            }
            else{
                key[color] = {"id":id_counter,"coordinates":[coordinates]};
                id_counter += 1;
            }
            color_index += 4;
        }
    }
    display_key(key);
    return key;
}

function display_key(key){
    var table = document.getElementById('color_legend');
    // <td><div class="square" style="background-color:rgb(0,0,255)"></div></td>
    body = '<tr><th>Swatch</th><th>ID</th><th># of sts</th></tr>'
    for (const [color, value] of Object.entries(key)) {
        body += '<tr>';
        body += '<td style="background-color:'+ color + '"></td>';
        body += '<td>'+ value["id"].toString() +'</td>';
        body += '<td>' + value["coordinates"].length.toString() + '</td>';
        body += '</tr>';
      }
    table.innerHTML = body;

}