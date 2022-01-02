var Links = {
  setLinksColor:function (color){
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i<links.length){
      links[i].style.color=color;
      i+=1;
    }
  }
}
var Body = {
  setTargetColor:function (backcolor,color){
    document.querySelector('body').style.backgroundColor=backcolor;
    document.querySelector('body').style.color=color;
  }
}
function NightDayHandler(self){
  var target = document.querySelector('body')
  if(self.value === 'night'){
    Body.setTargetColor('black','white');
    self.value = 'day';
    Links.setLinksColor('powderblue')
  }
  else{
    Body.setTargetColor('white','black');
    self.value = 'night';
    Links.setLinksColor('blue')
  }
}
