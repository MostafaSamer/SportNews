var i = 0;
var slide = ["../../image/american-football/1.jpg", "../../image/american-football/2.jpg", "../../image/american-football/3.jpg"];
var slideShow = function () {
    "use strict";
    document.main_slider.src = slide[i];
    if (i < slide.length - 1) {
        i = i + 1;
    } else {
        i = 0;
    }
    setTimeout("slideShow()", 2000);
};
function changeColor(id)
{
  document.getElementById(id).style.color = "white"; // forecolor
  document.getElementById(id).style.backgroundColor = "#ff0000"; // backcolor
};

slideShow();
