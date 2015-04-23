var i=0;
function timeCount(){
	i=i++;
	postMessage(i);
	setTimeout('timeCount()',500);
}
timeCount();

function date(){
	x = document.getElementById("demo");
	x.innerHTML="hello word";
}
function changeImage(){
	Img = document.getElementById("myimage");
	if (Img.src.match("bg_flower")){
		Img.src="images/border.png"
	}else{
		Img.src="images/bg_flower.gif"
	}
}
function color(){
	document.getElementById("text").style.color="red"
}
function myNum(){
	x = document.getElementById('tel').value;
	if(x == ''||isNaN(x)){
		alert('不是数字')
	}
}

// // 定义参数
// var length= 16;
// var points=x * 10;

// /*
// var lastname="lastname";
// var address=["a","b","c","d"];
// var person={first:"name",lastname:"name2"};
// */
// var length= 16;

// function myvar(){
// 	var carName="123";
// 	document.getElementById('demo_var').innerHTML=carName;
// }
// var i;
// function(){
// 	var cars = new Array();
// 	cars[0] = "aaa";
// 	cars[1] = "bbb";
// 	cars[2] = "ccc";

// 	// var cars = new array("0","1","2");
// 	for ( i = 0; i < cars.length; i++){
// 		document.write(cars[i] + '<br>');
// 	}
// }

// var person = {
// 	firstName:"xia",
// 	lastName:"qing",
// 	time:9
// }
// function onmouseout(){
// 	alert('..')
// }

// function onkeydown(){}

// }

// function onload(){

// } 
// cars=["BMW","Volvo","Saab","Ford"];
// list:
// {
// document.write(cars[0] + "<br>"); 
// document.write(cars[1] + "<br>"); 
// document.write(cars[2] + "<br>"); 

// document.write(cars[3] + "<br>"); 
// document.write(cars[4] + "<br>"); 
// document.write(cars[5] + "<br>"); 
// }

