/* 
    Created By: Nipun Jindal
    Student Number: 301325265
*/


var cells = document.querySelectorAll(".cell");

var gray = [3, 4, 5, 6, 7, 8, 11, 12, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 
    42, 43, 44, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 75, 76, 77, 78, 81, 
    82, 85, 86, 87, 90, 91, 92, 96, 97, 98, 100, 101, 102, 105, 106, 109, 110, 111, 112, 114, 115, 116, 117, 120, 121, 124, 
    125, 129, 130, 131, 132, 135, 136, 137, 139, 140, 152, 153, 154, 155, 158, 159, 160, 166, 167, 168, 169, 172, 173, 174, 
    175, 176, 177, 178, 179, 181, 182, 183, 187, 191, 192, 193, 194, 196, 198, 202, 203, 204, 205, 206, 207, 211, 213, 217];

var gainsboro = [0,1, 2, 9, 10, 13, 14, 15, 16, 29, 30, 31, 45, 46, 59, 60, 61, 68, 73, 74, 79, 80, 83, 84, 88, 89, 93, 94, 95, 
    99, 103, 104, 107, 108, 113, 118, 119, 122, 123, 126, 127, 128, 133, 134, 138, 141, 142, 143, 144, 145, 146, 147, 148, 
    149, 150, 151, 156, 157, 161, 162, 163, 164, 165, 170, 171, 180, 184, 185, 186, 188, 189, 190, 195, 197, 199, 200, 201, 
    208, 209, 210, 212, 214, 215, 216, 218, 219, 220, 221, 222, 223, 224];

var correct;
var puzzleSolved = document.querySelector("#puzzleSolved");
var showAnswer = document.querySelector("#showAnswer");
var reset = document.querySelector("#reset");
var gameOver = false;
 

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {  
        if (gameOver === false) {
            this.classList.toggle("clicked");
            isCorrect();
            if(correct === true) {
                puzzleSolved.textContent = "CONGRATULATIONS! YOU SOLVED THE PUZZLE";
                gameOver = true;
            }
        }    
    });
}


showAnswer.addEventListener ("click", function() {
    displayCorrectPattern();
    gameOver = true;
});

reset.addEventListener ("click", function () {
   correct = false;
   gameOver = false;
   for (var i = 0; i < cells.length; i++) {
      cells[i].classList.remove("clicked");
   }
   puzzleSolved.textContent = "";
});


function displayCorrectPattern () {
    for (var i = 0; i < gray.length; i++) {
        cells[gray[i]].classList.add("clicked");
    }
    for (var i = 0; i < gainsboro.length; i++) {
        cells[gainsboro[i]].classList.remove("clicked");
    }   
}


function isCorrect() {
    correct = true;
    for (var i = 0; i < gray.length; i++) {
        if (!cells[gray[i]].classList.contains("clicked"))
            correct = false;
    }
    for (var i = 0; i < gainsboro.length; i++) {
        if (cells[gainsboro[i]].classList.contains("clicked"))
            correct = false;
    } 
}