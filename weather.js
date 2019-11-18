	var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('#submit');
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
 var tempValue = data['main']['temp'];
 var nameValue = data['name'];
 var descValue = data['weather'][0]['description'];
 main.innerHTML = nameValue;
 desc.innerHTML = "Description - "+descValue;
 var V=Math.ceil(tempValue-273.15);
 temp.innerHTML = "Temperature - "+V+'&#8451';
 clouds.innerHTML = "<img src=\"w1.jpg\" width=\"58px\" height=\"58px\">";

})
.catch(err => alert("Wrong city name!"));
})
$(function(){
var games = ["Kottayam","Kochi","Kozhikodu","Mumbai","Chennai","Kannur","Jaipur","Kollam"];
$("#autocomplete").autocomplete({
source: games
});
});
