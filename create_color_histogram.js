//knit_chart.getContext('2d').getImageData(0,0,90,160).data
//each key obj will ahve:
//label
//color swatch
//id or should label be id?
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
            var coordinates = [x,y];
            if (color in key){
                key[color].push(coordinates);
            }
            else{
                key[color] = [coordinates];
            }
            count += 4;
        }
    }
    alert(key);
}