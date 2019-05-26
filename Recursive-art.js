//Declaring drawshape 
var drawShape = function(a, b, c, d) {
    //colouring and drawing shapes
    fill(a, c, d);
    rect(a+176,b-232,c+24,d);
    fill(a, b, d);
    triangle(a+590,b+536,c+27,d-204,a+165,b-315);
    fill(c, a, a);
    quad(a+41, b-333, c+198, d-61, a+37, b-220, c-224, d-265);
    fill(a, a, b);
    ellipse(a+237, b-20, c+55, d-0);

    if (c < 100) {
        //Changing variable values
        d+=9.5;
        c += 3;
        b+=6;
        a-=7;
        //Calling drawing shape function
        drawShape(a, b, c, d);
        
    }
    else if (c < 500) {
        //Changing variable values
        d+=12;
        c += 1;
        b+=8;
        a-=7;
        //Calling drawing shape function
        drawShape(a, b, c, d);
    }
};
//Setting display size
drawShape(width/2, height/2, 0, 0);
