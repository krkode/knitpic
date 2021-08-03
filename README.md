# knitpic
converts a picture to a knitting chart

# TODO
MED - flip work feature oooo do i generate chart again? have a hidden flipped copy that watches all the changes? becomes visible when flip is selected?
ADV - browser compatibility is gonna be a problem sooner than i thought. if i use webkit then itll only work in safari and chrome. after basic functionality is done, test in a couple of browers
MED - make the color of the cell label contrast to the cell color, like what if i have a black cell and black text?
EZ - allow the user to turn the colors off and on in the chart as well VIA TOGGLE BUTTON with text
(its a checkbox for now)
EZ - lookup standard practice for global vars in javascript cause KEY is making me insecure like we neeeever resort to such vile practices
EZ - also callback violates clean code according to the chapter i JUST read so think if there are any better solutions
EZ - refactor: split the color stuff out into separate js file AND name everything better
MED - probably should start making test cases now
MED - reconsider key structure. idk if id should be an attribute, does nesting dictionaries make it too complicated? would a lookup table be better?
EZ - allow chart to be downloaded as file (pdf or image i dont care)
EZ - hover over cell in grid to view coordinates
MED - allow user to put marker in the last row they were on
ADV - allow user to save chart and come back to site, upload working chart (including legend) and keep going/adjust. Did someone say injection attacked?!?!
ADV - allow user to change selected colors
        e.x. all reds change to blue
        - each tr in legend should be draggable aka need to use jquery aka maybe i should refactor existing code to rely on jquery where possible to keep shit consistent
        - the user should be able to select and drag multiple trs by clicking while ctrl/cmd key is held down
        - user should be able to drop selected trs onto a tr in legend which will cause:
                - each selected trs will have their coordinates added to destinations tr
                - color of selects trs coords will change to destinations tr color
                - select trs will be removed from legend 
MED - allow user to input length and width the scale pic accordingly
ADV - allow user to input measurements/gauge
MED - display stitch as v not a square
EZ - having a blog page with the projects made from the knitpic function would be cute. like include the generated chart and then the final product, ooo could include the pics in the read me too!
