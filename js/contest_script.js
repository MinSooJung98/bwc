$(function(){
	$('.gnb> li> a').hover(function(){
			$(this).parent().addClass('on').siblings().removeClass('on');
			$('#header_wrap').addClass('on');
			if($(this).next('.submenu_wrap').length > 0){
				$('#header_wrap .submenu_wrap').not($(this).next('.submenu_wrap')).stop().hide();
				$(this).next('.submenu_wrap').show();
				$('#header_wrap .bgDepth').stop().slideDown(100);
			}else{
				$('#header_wrap .bgDepth').stop().slideUp('fast');
				$('#header_wrap .submenu_wrap').hide();
			}

		});
		
		$('.gnb').mouseleave(function(){
			gnbNone();
		});
		
		function gnbNone(){
			$('#header_wrap .gnb> li').removeClass('on');
			//$('#headerWrap .gnbDepth2').stop().slideUp('fast');
			$('#header_wrap .submenu_wrap').hide();
			$('#header_wrap .bgDepth').stop().slideUp('fast');
			$('#header_wrap').removeClass('on');
		}
	$('.gal_imgbox1').show();
	$('.gal_imgbox2').hide();
	$('.gal_imgbox3').hide();
	$('.gal_number li:nth-child(1)').css("border","solid 1px #e0b8e1");
	$('.gal_number li:nth-child(2)').css("border","solid 1px #000");
	$('.gal_number li:nth-child(3)').css("border","solid 1px #000");
	$('.gal_number li:nth-child(1)').click(function(){
		$('.gal_imgbox1').show();
		$('.gal_imgbox2').hide();
		$('.gal_imgbox3').hide();
		$('.gal_number li:nth-child(1)').css("border","solid 1px #e0b8e1");
		$('.gal_number li:nth-child(2)').css("border","solid 1px #000");
		$('.gal_number li:nth-child(3)').css("border","solid 1px #000");
	});
	$('.gal_number li:nth-child(2)').click(function(){
		$('.gal_imgbox1').hide();
		$('.gal_imgbox2').show();
		$('.gal_imgbox3').hide();
		$('.gal_number li:nth-child(1)').css("border","solid 1px #000");
		$('.gal_number li:nth-child(2)').css("border","solid 1px #e0b8e1");
		$('.gal_number li:nth-child(3)').css("border","solid 1px #000");
	});
	$('.gal_number li:nth-child(3)').click(function(){
		$('.gal_imgbox1').hide();
		$('.gal_imgbox2').hide();
		$('.gal_imgbox3').show();
		$('.gal_number li:nth-child(1)').css("border","solid 1px #000");
		$('.gal_number li:nth-child(2)').css("border","solid 1px #000");
		$('.gal_number li:nth-child(3)').css("border","solid 1px #e0b8e1");
	});
	$(window).scroll( function(){
        $('.paris').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0'},1000);
            }
            
        });
    });
});
