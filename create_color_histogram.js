function create_key(context, width, height){
    //TODO: THIS FOR SURE NEEDS TEST CASES
    //TODO: MAKE THAT SHIT ASYNC if possible no its always possible
    var data = context.getImageData(0,0,width,height).data;
    var key = {}
    var count = 0
    //TODO: MUST WE HAVE A DOUBLE LOOP KIDDIE
    for(var y=0; y < height;++y){
        for(var x=0; x < width; ++x){
            var color = 'rgb('+data[count] +','+ data[count+1] +','+ data[count+2]+ ')';
            var coordinates = x.toString()+','+y.toString();
            if (color in key){
                key[color].push(coordinates);
            }
            else{
                key[color] = [coordinates];
            }
            count += 4;
        }
    }
    display_key(key);
    return key;
}

function display_key(key){
    var table = document.getElementById('color_legend');
    // <td><div class="square" style="background-color:rgb(0,0,255)"></div></td>
    body = '<tr><th>Swatch</th><th>ID</th><th># of sts</th></tr>'
    count = 0;
    for (const [color, value] of Object.entries(key)) {
        body += '<tr>';
        body += '<td style="background-color:'+ color + '"></td>';
        body += '<td>'+ count.toString() +'</td>';
        body += '<td>' + value.length.toString() + '</td>';
        body += '</tr>';
        ++count;
      }
    table.innerHTML = body;

}