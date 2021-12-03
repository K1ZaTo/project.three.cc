//draggable element code sourced from W3 Schools
dragElement(document.getElementById("window"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Modal code by W3 Schools
var modalparent = document.getElementsByClassName("modal_multi");
// Get the button that opens the modal
var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
// When the user clicks the button, open the modal
function setDataIndex() {
  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].setAttribute('data-index', i);
    modalparent[i].setAttribute('data-index', i);
  }
}
for (i = 0; i < modal_btn_multi.length; i++) {
  modal_btn_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute('data-index');
    modalparent[ElementIndex].style.display = "block";
  };
}
window.onload = function () {
  setDataIndex();
};
window.onclick = function (event) {
  if (event.target === modalparent[event.target.getAttribute('data-index')]) {
    modalparent[event.target.getAttribute('data-index')].style.display = "none";
  }
};

//the background that changes. Shouts out to 'fnune' from stackoverflow.com
var images = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg",
]
var imageHead = document.getElementById("switch");
var i = 0;

setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
      	i =  0;
      }
}, 3000);