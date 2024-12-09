var imgNames = [
  "../img/gallery/coffee-and-working.jpg",
  "../img/gallery/designer-drawing-website-mockup.jpg",
  "../img/gallery/finger-pointing-at-javascript-code.jpg",
  "../img/gallery/javascript-with-laptop-code.jpg",
  "../img/gallery/reading-notes-at-work.jpg",
];
var curentImageNumber = 0;
function change(where) {
  //Compute current image number (next or previous)
  //I add imgNames.length because javascript does not work good wint negative numbers and modulus

  curentImageNumber =
    (curentImageNumber + where + imgNames.length) % imgNames.length;

  //Set the src of the image
  //We use the name of the img tag
  document.myImage.src = imgNames[curentImageNumber];
}
