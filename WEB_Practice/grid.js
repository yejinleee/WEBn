function gridTemplateColumns(self){
  var target = document.getElementsByClassName('container')[0]
  target.style.gridTemplateColumns=self.value;
}
function gridGap(self){
  var target = document.getElementsByClassName('container')[0]
  target.style.gap=self.value;
}
