$('#menubtn').click( () => {
  $('.icons_wrapper').fadeToggle("fast");
});
$(document).mouseup(function (e) { 
  if (($(e.target).closest("header ul").length === 0) && ($(e.target).closest(".icons_wrapper").length === 0)) { 
      $(".icons_wrapper").fadeOut("fast"); 
  } 
});
const arr = [
  "Hi...    ", "My name is Pradyumna   ", 
  "I am a MCA Student   ", "I do like to write code   ", 
  "We could work together?   ", "Still here waiting?   ",
  "You have to click now!   ", "Resume Search"
]; 
let index = 0;
setString = () => {
  for(let x=0; x<arr.length; x++){
    let char = "";
    for(let y=0; y<arr[x].length; y++){
      char += arr[x][y];
      let el = document.querySelector('.search');
      setTimeout( char => {
          el.innerHTML = char;
      }, 150 * index, char);
      index++;
    }
    if(x+1 == arr.length){break;}
    while(char.length > 0){
      char = char.substr(0, char.length-1);
      let el = document.querySelector('.search');
      setTimeout( char => {
          el.innerHTML = char;
      }, 150 * index, char);
      index++;
    }
  }
}
$(document).ready(setString());