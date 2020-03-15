var numberofsquare=6;
var colors=[];
var pickedcolor;

var colordis=document.getElementById("colordis");
var squares=document.querySelectorAll(".square");
var messagedis=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset_buttom=document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	for (var i=0;i<modebuttons.length;i++){
		modebuttons[i].addEventListener("click",function(){
			modebuttons[0].classList.remove("selected");
			modebuttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"?numberofsquare=3:numberofsquare=6;
			reset();
	//update page to reflect changes
	})
	}

	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",function(){
			var clickcolor=this.style.backgroundColor;
			if (clickcolor===pickedcolor){
				messagedis.textContent="Correct!";
				changecolor(clickcolor);
				reset_buttom.textContent="Play Again?"
				h1.style.backgroundColor=clickcolor;

			}
			else{
				this.style.backgroundColor="#232323";
				messagedis.textContent="Try Again";
			}
	});

	}
	reset();

}


function reset(){
	colors=generate_random_colors(numberofsquare);
	pickedcolor=pickcolor();
	colordis.textContent=pickedcolor;
	reset_buttom.textContent="New colors";
	for (var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

	messagedis.textContent="";
	h1.style.backgroundColor="steelblue";
}

reset_buttom.addEventListener("click",function(){
	reset();
})


function changecolor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random]
}
function generate_random_colors(number){
	var arr=[];
	for (var i=0;i<number;i++){
		arr.push(random_color())
		//get random colors
	}
	return arr;
}
function random_color(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return "rgb(" +red +", "+green +", "+blue +")";
}