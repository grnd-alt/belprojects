$(document).ready(function(){
	$('#login_form').on('submit',function(event){
		$.ajax({
			url:'/main',
			type:'POST',
			data:{mail:$('#mail_input').val(),
				passwort:$('#pass_input').val()},
			success:function(result){
				if (result){
					window.history.pushState({'email':$('#mail_input').val()},'',"/tester");
					$('body').html(result);
				};}
		})

		event.preventDefault();
	});
	$('#main_button').on('click',function(){
		$.ajax({
			url : '/main',
			type: 'POST',
			data : {message:"this is a button"},
			success:function(result){
				$('body').html(result);
			}
		})
		.done(function(){
			$('#main_button').text("hello world now")
		});
	});
	$('#main_image').on('click',function(){
		$.ajax({
			url: "/main",
			type : 'POST',
			data : {message:"this is an image"}
		});
	});
});
