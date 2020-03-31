// var a = 10;
// var b = 'name';
// var bool = true; //false
// var n = null;
// var mass=[10,"name",8]
// var und = undefined;
// var obj = {
// 	'user':'masha',
// 	'age':17

// }
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(bool));
// console.log(typeof(n));
// console.log(typeof(und));
// console.log(typeof(obj));

// var num = 10;
// alert(num)

// var a = prompt('введите имя');

// // = присвоить
// // == ровно
// // === эквивалентно

//+ канкратинация строк

//-

//*

//%

// /

//<

//>

//=<

//>=

//! не

// != не равно

// var str ='say "hello"' +' '+ 'name'
// console.log(str)

// var a = prompt('число');
// var b = prompt('число');

// console.log(parseInt(a)+parseInt(b))

// var a = prompt('Введите имя');
// var b = prompt('Введите возраст');

// alert('Привет меня зовут '+ a+'. '+'Мне '+b+' лет.');

 // var a = +prompt('Введите a:');
 // var b = +prompt('Введите b:');
 // var c = +prompt('Введите c:');
 // // a=a+b;
 // // c=c*a;
 // alert("Result= "+((a+b)*c));

// var a=+prompt('number');
// var b=+prompt('number');

// if (a>b) {
// 	alert(true);
// }
// else {
// 	alert(false);
// }

//|| 

//&&

// isNaN() проверка или это не число
// if (isNaN(a) || isNaN(b)) {
// 	alert("Введите число");
// }
// else{
// 	alert(a+b);
// }

// if (a>b) {
// 	alert(a+" больше");
// }
// else if (a==b) {
// 	alert("числа равны")
// }
// else{
// 	alert(b+" больше");
// }

// var a= prompt('name');
// var b;

// if (a=='Right'){
// 	b= prompt('password');
// 	if (b==12345) {
// 		alert("welcome");
// 	}
// 	else{
// 		alert("wrong password");
// 	}
// }
// else{
// 	alert("wrong");
// }

// function number(a,b){
// 	return a+b ;
// }
// console.log(number(5,10,14,123));

// function number(a,b){
// 	if (isNaN(a)||isNaN(b)) {
// 		console.log('error');
// 	}
// 	else{
// 		console.log(a+b);
// 	}
// }
// number(5,5);

//Функция с тремя параметрами и функция будет возвращать среднее значение и сделать проверку по числам 
// var a = +prompt('Введите a:');
// var b = +prompt('Введите b:');
// var c = +prompt('Введите c:');
// if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
// 	alert("Result= "+((a+b+c)/3));
// }
// else{
// 	alert("Input a number please");
// }

// var textTag = document.getElementsByTagName('p');
// var textClass = document.getElementsByClassName('text');
// var textId = document.getElementById('text');

// var btn = document.querySelector('#btn');
// var menu = document.querySelector('.menu');
// btn.onclick = function(){
// 	alert('Hello');
// }

// btn.addEventListener('click', function(){
// 	menu.classList.toggle('active')
// });
// function hello(){
// 	alert('hello');
// }


// var txt = document.querySelectorAll('.text')

// console.log(textTag);
// console.log(textClass);
// console.log(textId);
// console.log(btn);

// var mass = [10, 'masha',true];

// mass.push('bob')
// console.log(mass)

// var mass= [1,4,6,32,7,9,4];
// var txt=document.querySelectorAll('p')
// txt.forEach(function(elem,index,arr){
// 	elem.innerHTML=mass;
// })

// mass.splice(0, 4, 'indexFirst', '4');
// mass.push('14')

// var i=0;
// for (;i<mass.length; i++){
// 	console.log(mass[i]);
// }



// for (var i=0; i<name.length; i++){
// 	console.log(name[i])
// }

// var first=document.querySelector('.firstinput');
// var second=document.querySelector('.secondinput');
// var btn=document.querySelectorAll('.btn');
// var btn2=document.querySelectorAll('.btn2');
// var reset=document.querySelector('.reset');
// var result=document.querySelector('.result');
// var out=document.querySelector('.out');
// btn.forEach(function(elem){
// 	elem.addEventListener('click', function(){
// 		first.value += this.value;
// 	})
// })
// btn2.forEach(function(elem){
// 	elem.addEventListener('click', function(){
// 		second.value += this.value;
// 	})
// })
// reset.addEventListener('click', function(){
// 		first.value = ' ';
// 		second.value = ' ';
// 		out.innerHTML=' ';
// })
// result.addEventListener('click', function(){
// 	var valfirst=parseInt(first.value);
// 	var valsecond=parseInt(second.value);
// 	var sum=valfirst+valsecond;	
// 	out.innerHTML=sum;
// })

// btn.addEventListener('click', function(){
// 	var valfirst=parseInt(first.value);
// 	var valsecond=parseInt(second.value);
// 	var sum=valfirst+valsecond;	
// 	out.innerHTML=sum;
// })

// var btnRand =document.querySelector('.btn-rand');
// var out = document.querySelector('.out')
// function getQuestion(min,max){
// 	var massQuestion = ['Как тебя зовут?', 'Сколько тебе лет?','Какого цвета глаза у твоей кошки?', 'Чем ты любишь заниматься?'];
// 	massQuestion.forEach(function(elem,index){
// 		var rand= Math.floor(Math.random(index)*(max-min+1))+min;
// 		console.log(rand);
// 		out.innerHTML=massQuestion[rand];
// 	})
// }

// btnRand.addEventListener('click', function(){
// 	getQuestion(0,3);
// })

// var btn=document.querySelector('.btn');
// var out=document.querySelector('.out');
// var erase=document.querySelector('.erase')
// var count=0;
// btn.addEventListener('click', function(){
// 	count++;
// 	out.innerHTML=count;
// })
// erase.addEventListener('click', function(){
// 	out.innerHTML=0;
// 	count=0;
// })

// setInterval(function(){
// 	console.log('Hello')
// },1000);

// var out=document.querySelector('.out')
// function greeting(){
// 	out.innerHTML+='Hello ';
// }
// setInterval(greeting, 1000);

// setTimeout(greeting, 4000);

$(document).ready(function(){

 $('.popup').magnificPopup({
 type: 'image',
 zoom: {
     enabled: true,
     duration: 300 
 }
 });
 
 });