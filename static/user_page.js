$('document').ready(function(){
	$('#menu-wrapper').css("margin-top",$('#header').css("height"));
	$('#sidebar-image').on('click',function(){
		if($('#menu-wrapper').css("display")=='block'){
			$('#menu-wrapper').css('display','none')}
		else{
			$('#menu-wrapper').css('display','block');
		}
	});
	$("#Projects").on("click",function(event){
		$.ajax(){
			url:"/control",
			type:"POST",
			data:{button:"projects"}
			succes:funtction(result){
				if (result){
					$('body').html(result);
				}
			}
		}		
	})
	event.preventDefault();
});