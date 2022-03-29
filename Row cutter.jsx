var size = []
size[0] = parseInt(prompt("Width of the repeated element."))
size[1] = parseInt(prompt("Height of the repeated element"))
var columns = parseInt(prompt("Columns"))
var rows = parseInt(prompt("Rows"))
var docRef = app.activeDocument
var area = [ [0, 0], [size[0], 0], [size[0], size[1]], [0, size[1]] ]
var select = docRef.selection.select(area)
var selection = docRef.selection

docRef.activeLayer = docRef.layers[docRef.layers.length-1]



for(i = 1; i <= rows; i++){
    for(j = 1; j <= columns; j++){
        select = docRef.selection.select(area)
        selection.cut()
        docRef.paste()
        docRef.activeLayer = docRef.layers[docRef.layers.length-1]
        area[0][0] += size[0]
        area[1][0] += size[0]
        area[2][0] += size[0]
        if(j === columns){
            area[0][1] += size[1]
            area[1][1] += size[1]
            area[2][1] += size[1]
            area[3][1] += size[1]
            area[0][0] = 0
            area[1][0] = size[0]
            area[2][0] = size[0]
            }
        }
}