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
});
