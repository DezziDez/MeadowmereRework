var slideIndex = 1;
var timeout = null;

function plusDivs(n) {
  showDivs(slideIndex += n);
  clearTimeout(timeout);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("MainSlides");
  if (n > x.length) {slideIndex = 1};
  if (n < 1) {slideIndex = x.length};

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  clearTimeout(timeout);
  timeout = setTimeout(carousel, 12000);
}

function carousel() {
  slideIndex++;
  showDivs(slideIndex);
}