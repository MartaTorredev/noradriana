jQuery(document).ready(function($){


	$('#name').on('keyup',function(){
	    var my_txt = $(this).val();
	    var len = my_txt.length;
	    if(len > 2){
	        $('#name').next().addClass('hide');
	        $('#name').next().next().removeClass('hide'); 
	        $('#name').removeClass('border-error');
	    } else{
	    	$('#name').next().removeClass('hide');
	        $('#name').next().next().addClass('hide'); 
	        $('#name').addClass('border-error');
	    }
	});

	$('#email').on('keyup',function(){
	   	email = $('#email').val();
		emailReg =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    if(!emailReg.test(email) || email == ''){
	        $('#email').next().removeClass('hide');
	        $('#email').next().next().addClass('hide'); 
	        $('#email').addClass('border-error');
	    } else{
	        $('#email').next().addClass('hide');
	        $('#email').next().next().removeClass('hide'); 
	        $('#email').removeClass('border-error');
	    }
	});

	$('#mensaje').on('keyup',function(){
	    var my_txt = $(this).val();
	    var len = my_txt.length;
	    if(len > 9){
	        $('#mensaje').next().addClass('hide');
	        $('#mensaje').next().next().removeClass('hide'); 
	        $('#mensaje').removeClass('border-error');
	    } else{
	    	$('#mensaje').next().removeClass('hide');
	        $('#mensaje').next().next().addClass('hide'); 
	        $('#mensaje').addClass('border-error');
	    }
	});
	

	$('#form-contact').on('submit', function(event) {
		event.preventDefault();

		email = $('#email').val();
		emailReg =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if( $('#name').val().length < 3 ) {
			$('#name').next().removeClass('hide');
			$('#name').addClass('border-error');
			return;
		}

		if(!emailReg.test(email) || email == ''){
			$('#email').next().removeClass('hide');
			$('#email').addClass('border-error');
			return;
		}

		if( $('#mensaje').val().length < 10 ) {
			$('#mensaje').next().removeClass('hide');
			$('#mensaje').addClass('border-error');
			return;
		}

		var e = $('#email').val();
		var n = $('#name').val();
		var m = $('#mensaje').val(); 
		var u = $('#web').val(); 


		$.ajax
		({
			type: 'POST',
			url: '../../helpers/addemail.php',
			dataType: 'json',
			data: {
				e: e,
				n: n,
				m: m,
				u: u
			}
		})
		.done
		(function(data){
			
			Swal.fire({
			  	position: 'center',
			  	type: 'success',
			  	title: 'Tu mensaje ha sido enviado',
			  	showConfirmButton: false,
			  	timer: 1500
			});
			$('#email').val('');
			$('#name').val('');
			$('#mensaje').val('');
			$('#web').val(''); 
			$('.icon-check-form').addClass('hide');
			$('.icon-error-form').addClass('hide');
		})
		.fail
		(function(data){
			console.log('No se ha procesado la solicitud.');
		});
		
	});


	$('.bs1').on('click', function(event) {
		event.preventDefault();
		if($('#box1').hasClass('hide')) {
			$('.box').addClass('hide');
			$('#box1').removeClass('hide');
		} else {
			$('#box1').addClass('hide');
		}
	});

	$('.bs2').on('click', function(event) {
		event.preventDefault();
		if($('#box2').hasClass('hide')) {
			$('.box').addClass('hide');
			$('#box2').removeClass('hide');
		} else {
			$('#box2').addClass('hide');
		}
	});

	$('.bs3').on('click', function(event) {
		event.preventDefault();
		if($('#box3').hasClass('hide')) {
			$('.box').addClass('hide');
			$('#box3').removeClass('hide');
		} else {
			$('#box3').addClass('hide');
		}
	});

	$('.bs4').on('click', function(event) {
		event.preventDefault();
		if($('#box4').hasClass('hide')) {
			$('.box').addClass('hide');
			$('#box4').removeClass('hide');
		} else {
			$('#box4').addClass('hide');
		}
	});


	$(window).resize(function(){
       if ($(window).width() <= 767) {  
              $('.boxx1').removeAttr('id');
              $('.boxx2').removeAttr('id');
              $('.boxx3').removeAttr('id');
              $('.boxx4').removeAttr('id');
              $('.bot1').attr('id' , 'box1');
              $('.bot2').attr('id', 'box2');
              $('.bot3').attr('id', 'box3');
              $('.bot4').attr('id', 'box4');
              $('.box').addClass('hide');
       } else {
       		  $('.boxx1').attr('id', 'box1');
              $('.boxx2').attr('id', 'box2');
              $('.boxx3').attr('id', 'box3');
              $('.boxx4').attr('id', 'box4');
              $('.bot1').removeAttr('id');
              $('.bot2').removeAttr('id');
              $('.bot3').removeAttr('id');
              $('.bot4').removeAttr('id');
              $('.box').addClass('hide');
       }    
	});

	if (window.matchMedia('(max-width: 767px)').matches) {
        $('.boxx1').removeAttr('id');
          	$('.boxx2').removeAttr('id');
          $('.boxx3').removeAttr('id');
          $('.boxx4').removeAttr('id');
          $('.bot1').attr('id', 'box1');
          	$('.bot2').attr('id', 'box2');
          $('.bot3').attr('id', 'box3');
          $('.bot4').attr('id', 'box4');
    } else {
        $('.boxx1').attr('id', 'box1');
              $('.boxx2').attr('id', 'box2');
              $('.boxx3').attr('id', 'box3');
              $('.boxx4').attr('id', 'box4');
              $('.bot1').removeAttr('id');
          	$('.bot2').removeAttr('id');
          $('.bot3').removeAttr('id');
          $('.bot4').removeAttr('id');
    }


    $('.card a').on('click', function(event) {
    	event.preventDefault();
    	$('html,body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 'slow');
    });
	
})

