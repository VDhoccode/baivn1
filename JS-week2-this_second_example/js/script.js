function showProperties(element){
  document.getElementById('message').innerHTML = element.alt;
  var urlimg= element.src;
  document.getElementById('message').style.backgroundImage="url('"+urlimg+"')";
}
