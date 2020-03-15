
var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var p1dis=document.querySelector("#p1score");
var p2dis=document.getElementById("p2score");
var reset=document.getElementById("reset");
var p1score=0;
var p2score=0;
var numinput=document.querySelector("input");
var h1=document.querySelector("h1");
var gameover=false;
var winnerscore=5;
var winnerscore_dis=document.querySelector("p span");
p1.addEventListener("click",function(){
	if (!gameover){
		p1score++;
		if(p1score===winnerscore){
			p1dis.classList.add("winner");
			gameover=true;
		}
		p1dis.textContent=p1score;

	}
});
p2.addEventListener("click",function(){
	if (!gameover){
		p2score++;
		if(p2score===winnerscore){
			p2dis.classList.add("winner");
			gameover=true
		}
		p2dis.textContent=p2score;

	}
});
reset.addEventListener("click",function(){
	reset_();

});
function reset_(){
	p1dis.textContent=0;
	p2dis.textContent=0;
	p1score=0;
	p2score=0;
	gameover=false;
	p1dis.classList.remove("winner")
	p2dis.classList.remove("winner")
};
numinput.addEventListener("change",function(){

	winnerscore_dis.textContent=numinput.value;
	winnerscore=Number(numinput.value);
	reset_();
})


