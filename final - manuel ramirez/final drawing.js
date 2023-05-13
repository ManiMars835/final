var shapeX = 30;
var shapeY = 50;
var shapeXspeed;
var shapeYspeed;

//var shape number 2 x and y
var shapeX2 = 100;
var shapeY2 = 400;
var shapeX2speed;
var shapeY2speed;

//var more shape stuff
var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

function setup() {
  createCanvas(600, 600);
    shapeXs[0] = 90;
    shapeYs [0] = 300;
    diameters[0] = 10;
    shapeXs[1] = 150;
    shapeYs [1] = 150;
    diameters[1] = 15;
    shapeXs[2] = 30;
    shapeYs [2] = 10;
    diameters[2] = 5;
    shapeXs[3] = 0;
    shapeYs [3] = 60;
    diameters[3] = 6;
    shapeXs[4] = 10;
    shapeYs [4] = 190;
    diameters[4] = 7;
    shapeXs[5] = 200;
    shapeYs [5] = 20;
    diameters[5] = 8;
    shapeXs[6] = 400;
    shapeYs [6] = 20;
    diameters[6] = 2;
    shapeXs[7] = 100;
    shapeYs [7] = 500;
    diameters[7] = 9;
    shapeXs[8] = 15;
    shapeYs [8] = 10;
    diameters[8] = 9;
    shapeXs[9] = 500;
    shapeYs [9] = 200;
    diameters[9] = 9;
    shapeXs[10] = 600;
    shapeYs [10] = 100;
    diameters[10] = 9;

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

}

function draw() {
background (253,253,190);

    for (var i = 0; i < shapeXs.length; i++) {
        square(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
}

//left eye
line (252, 320, 235, 287);
line (235, 287, 217, 273);
line (217, 273, 200, 268);
line (200, 268, 179, 276);
line (179, 276, 170, 287);
line (170, 287, 171, 309);
line (171, 309, 184, 327);
line (184, 327, 203, 335);
line (203, 335, 224, 335);
line (224, 335, 235, 327);
line (235, 327, 245, 306);
// left pupil
fill (0,0,0);
circle (212, 300, 46);

//right eye
line (305, 318, 314, 281); 
line (314, 281, 324, 265); 
line (324, 265, 337, 256);
line (337, 256, 354, 253);
line (354, 253, 374, 255);
line (374, 255, 387, 266);
line (387, 266, 392, 281);
line (392, 281, 389, 299);
line (389, 299, 380, 311);
line (380, 311, 364, 316);
line (364, 316, 339, 315);
line (339, 315, 324, 312);
line (324, 312, 310, 300);

//right pupil
fill (0,0,0);
circle (345, 281, 46);

//eye shine
fill (255,255,255);
circle (200, 295, 10);
circle (330, 280, 10);

//nose
line (260, 376, 271, 384);
line (271, 384, 280, 387);
line (280, 387, 293, 382);
line (293, 382, 304, 374);
line (260, 376, 272, 389);
line (272, 389, 282, 393);
line (282, 393, 297, 385);
line (297, 385, 304, 374);

//mouth
line (269, 437, 284, 420);
line (284, 420, 309, 435);

//body
line (222, 472, 188, 485);
line (188, 485, 166, 507);
line (166, 507, 150, 557);
line (150, 557, 140, 581);
line (140, 581, 138, 600);
line (373, 472, 397, 495);
line (397, 495, 415, 524);
line (415, 524, 428, 560);
line (428, 560, 432, 593);
line (432, 593, 433, 600);
line (373, 472, 356, 461);
//head
line (222, 472, 196, 458);
line (196, 458, 177, 446);
line (177, 446, 165, 433);
line (164, 410, 141, 424);
line (146, 408, 137, 396);
line (137, 396, 135, 386);
line (143, 370, 116, 382);
line (229, 471, 250, 474);
line (263, 475, 290, 474);
line (305, 473, 335, 467);
line (356, 461, 372, 453);
line (372, 453, 388, 442);
line (388, 442, 403, 433); 
line (407, 402, 432, 418);
line (424, 404, 436, 386);
line (436, 386, 442, 371);
line (431, 350, 463, 361);
line (448, 342, 449, 326);
line (449, 326, 444, 305);
line (444, 305, 432, 281);
line (432, 281, 421, 261);
line (421, 261, 405, 244);
line (405, 244, 374, 229);
line (374, 229, 353, 220);
line (353, 220, 320, 216);
line (320, 216, 281, 219);
line (281, 219, 242, 227);
line (242, 227, 224, 232);
line (224, 232, 201, 243);
line (201, 243, 183, 255);
line (183, 255, 176, 259);
line (176, 259, 162, 270);
line (145, 297, 137, 309);
line (137, 309, 129, 324);
line (129, 324, 126, 339);
line (126, 339, 124, 351);
line (124, 351, 126, 361);

//hat
line (183, 255, 253, 43);
line (253, 43, 353, 220);

//ears
line (183, 255, 90, 161);
line (353, 220, 436, 104);
line (436, 104, 438, 185);
line (438, 185, 421, 261);
line (90, 161, 106, 245);
line (106, 245, 139, 305);
line (112, 210, 136, 242);
line (136, 242, 173, 262);
line (417, 156, 403, 196);
line (403, 196, 377, 230);
//pom pom
line (211, 15, 285, 67);
line (215, 68, 291, 21);
line (201, 41, 316, 46);
line (253, 11, 253, 77);
//party hat circles
fill (250, 10, 30);
circle (246, 108, 20);
fill (10, 100, 46);
circle (289, 152, 30);
fill (16, 191, 216);
circle (242, 185, 50);
fill (252, 15, 192);

}