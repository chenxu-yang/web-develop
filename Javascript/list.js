console.log("connected");
var todo=["buy books"];

var input=prompt("what will you do");
while(input!=="quit"){
	
	if (input==="list"){
		listtodos();
	}
	else if (input==="new"){
		addtodo();
	}
	else if(input==="delete"){
		deletetodo();
	}
	input=prompt("what will you do");
}
console.log("you quit")

function listtodos(){
	console.log("**********")
	todo.forEach(function(todo,index){

		console.log(index+" "+todo);
	});
	console.log("**********")
	console.log(todo);
}
function addtodo(){
	var newtodo=prompt("enter new todo");
	todo.push(newtodo);
	console.log("added todo")
}
function deletetodo(){
	var index=prompt("enter index of delete");
	todo.splice(index,1);
	console.log("deleted todo")
}