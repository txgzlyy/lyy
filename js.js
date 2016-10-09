

$(function(){
	$("#shj").click(function(){
		$('#shlb').css('display','block');

	});
	$("#close").click(function(){
		$('#shlb').css('display','none');
	});
	$('#jnyl').click(function(){
		$('body').css('background','url(images/8.jpg)');
		$('#shlb li').css('color','#635641');
		$('.yysh').hide();
		$('#jny').show(5000);
	})
	$('#xxl').click(function(){
		$('body').css('background','url(images/000.jpg)');
		$('#shlb li').css('color','#fff');
		$('.yysh').hide();
		$('#xx').show(5000);
	})
	$('#myxl').click(function(){
		$('.yysh').hide();
		$('#myx').show(5000);
	})
	$('#cyl').click(function(){
		$('body').css('background','url(images/20.jpg)');
		$('#shlb li').css('color','#635641');
		$('.yysh').hide();
		$('#cy').show(5000).css('color','#901d87');
	})
	$('#syyl').click(function(){
		$('body').css('background','url(images/16.jpg)');
		$('#shlb li').css('color','#fff');
		$('.yysh').hide();
		$('#syy').show(5000).css('color','#333');
	})
	$('#sljl').click(function(){
		$('body').css('background','url(images/5.jpg)');
		$('#shlb li').css('color','#635641');
		$('.yysh').hide();
		$('#slj').show(5000).css('color','#a09488');
	})
	$('#mzyl').click(function(){
		$('body').css('background','url(images/6.jpg)');
		$('#shlb li').css('color','#fff');
		$('.yysh').hide();
		$('#mzy').show(5000).css('color','#fff');
	})
	$('#jgcl').click(function(){
		$('body').css('background','url(images/7.jpg)');
		$('#shlb li').css('color','#fff');
		$('.yysh').hide().css('color','#F5FEFF');
		$('#jgc').show(5000);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
