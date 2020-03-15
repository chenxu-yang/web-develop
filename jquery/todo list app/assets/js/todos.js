//check off specific todos by click
$("ul").on("click","li",function(){
	//if its gray turn it back else turn it gray
	$(this).toggleClass("completed");
});
//click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();//prevent delete all elements contains the span
});
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//get new todo text from input
		var todotext=$(this).val();
		$(this).val("");
		//create a new li
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+todotext+"</li>")
	}
	
})
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});