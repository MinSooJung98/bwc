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
	$(window).scroll( function(){
        $('.contest_pos').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        });
		 $('.about_font').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'109'},700);
            }
            
        });
		$('.sec_pro_fbx').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0'},700);
            }
            
        });
    });
});
