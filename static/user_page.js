$('document').ready(function(){
	$('#menu-wrapper').css("margin-top",$('#header').css("height"));
	$('#sidebar-image').on('click',function(){
		if($('#menu-wrapper').css("display")=='block'){
			$('#menu-wrapper').css('display','none')}
		else{
			$('#menu-wrapper').css('display','block');

		}
	});
});