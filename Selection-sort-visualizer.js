//Displaying Array, that displays sorted numbers in array
var displayArray = function(array, x, y) {
    fill(0, 0, 0);
    textFont(createFont("arial"), 12);
    for (var i = 0; i < array.length; i++){
        text(array[i], x, y);
        x += 25;
        
    }
};

//swap function that switches values
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

//checks if the value in the array is smaller or greater than the one after it
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 


//orders and displays the array
var selectionSort = function(array, xPlace, yPlace) {
    var length = array.length;
    
    displayArray(array, xPlace, yPlace);
    
  
    for(var i = 0; i < length; i++){
        var min = indexOfMinimum(array, i);
        swap(array, i, min);
        
        yPlace += 19;

        displayArray(array, xPlace, yPlace);
    }
};

//Creating arrays (4) to sort and display
var array = [2, 1, 6, 9, 3, 10, 5];
array = selectionSort(array, 10, 20);

var array = [2, 1, 0, 19, -3, 7, 6];
array = selectionSort(array, 204, 20);

var array = [22, 11, 54, 0, 3];
array = selectionSort(array, 10, 220);

var array = [4, 1, 0, 0, 3];
array = selectionSort(array, 204, 220);

//Draws lines to show swapping and sorting
stroke(255, 0, 0);
line(35,30,17,22);
line(112,61,63,66);
line(165,79,86,86);
line(165,119,138,124);

line(313,21,212,29);
line(260,41,231,49);
line(307,80,282,84);
line(357,96,307,106);

line(91,222,14,229);
line(116,243,36,247);
line(118,261,64,268);

line(259,222,207,229);
line(285,240,234,249);
line(283,261,255,268);
line(309,279,283,286);
