 $(function(){
	$('.circle_in1').show();
	$('.circle_in2').hide();
	$('.circle_in3').hide();
	$('.circle_in4').hide();
	$('.circle_in5').hide();
	$('.circle_in6').hide();
	$('.circle_in7').hide();
	$('.circle_in8').hide();
	$('.minicir1').hide();
	$('.minicir1').click(function(){
		$('.circle_in1').show();
		$('.circle_in2').hide();
		$('.circle_in3').hide();
		$('.circle_in4').hide();
		$('.circle_in5').hide();
		$('.circle_in6').hide();
		$('.circle_in7').hide();
		$('.circle_in8').hide();
		$('.minicir1').hide();
		$('.minicir2').show();
		$('.minicir3').show();
		$('.minicir4').show();
		$('.minicir5').show();
		$('.minicir6').show();
		$('.minicir7').show();
		$('.minicir8').show();
	});
	$('.minicir2').click(function(){
		$('.circle_in1').hide();
		$('.circle_in2').show();
		$('.circle_in3').hide();
		$('.circle_in4').hide();
		$('.circle_in5').hide();
		$('.circle_in6').hide();
		$('.circle_in7').hide();
		$('.circle_in8').hide();
		$('.minicir1').show();
		$('.minicir2').hide();
		$('.minicir3').show();
		$('.minicir4').show();
		$('.minicir5').show();
		$('.minicir6').show();
		$('.minicir7').show();
		$('.minicir8').show();
	});
	$('.minicir3').click(function(){
		$('.circle_in1').hide();
		$('.circle_in2').hide();
		$('.circle_in3').show();
		$('.circle_in4').hide();
		$('.circle_in5').hide();
		$('.circle_in6').hide();
		$('.circle_in7').hide();
		$('.circle_in8').hide();
		$('.minicir1').show();
		$('.minicir2').show();
		$('.minicir3').hide();
		$('.minicir4').show();
		$('.minicir5').show();
		$('.minicir6').show();
		$('.minicir7').show();
		$('.minicir8').show();
	});
	$('.minicir4').click(function(){
		$('.circle_in1').hide();
		$('.circle_in2').hide();
		$('.circle_in3').hide();
		$('.circle_in4').show();
		$('.circle_in5').hide();
		$('.circle_in6').hide();
		$('.circle_in7').hide();
		$('.circle_in8').hide();
		$('.minicir1').show();
		$('.minicir2').show();
		$('.minicir3').show();
		$('.minicir4').hide();
		$('.minicir5').show();
		$('.minicir6').show();
		$('.minicir7').show();
		$('.minicir8').show();
	});
	$('.minicir5').click(function(){
		$('.circle_in1').hide();
		$('.circle_in2').hide();
		$('.circle_in3').hide();
		$('.circle_in4').hide();
		$('.circle_in5').show();
		$('.circle_in6').hide();
		$('.circle_in7').hide();
		$('.circle_in8').hide();
		$('.minicir1').show();
		$('.minicir2').show();
		$('.minicir3').show();
		$('.minicir4').show();
		$('.minicir5').hide();
		$('.minicir6').show();
		$('.minicir7').show();
		$('.minicir8').show();
	});
	$('.minicir6').click(function(){
		$('.circle_in1').hide();
		$('.circle_in2').hide();
		$('.circle_in3').hide();
		$('.circle_in4').hide();
		$('.circle_in5').hide();
		$('.circle_in6').show();
		$('.circle_in7').hide();
		$('.circle_in8').hide();
		$('.minicir1').show();
		$('.minicir2').show();
		$('.minicir3').show();
		$('.minicir4').show();
		$('.minicir5').show();
		$('.minicir6').hide();
		$('.minicir7').show();
		$('.minicir8').show();
	});
	$('.minicir7').click(function(){
		$('.circle_in1').hide();
		$('.circle_in2').hide();
		$('.circle_in3').hide();
		$('.circle_in4').hide();
		$('.circle_in5').hide();
		$('.circle_in6').hide();
		$('.circle_in7').show();
		$('.circle_in8').hide();
		$('.minicir1').show();
		$('.minicir2').show();
		$('.minicir3').show();
		$('.minicir4').show();
		$('.minicir5').show();
		$('.minicir6').show();
		$('.minicir7').hide();
		$('.minicir8').show();
	});
	$('.minicir8').click(function(){
		$('.circle_in1').hide();
		$('.circle_in2').hide();
		$('.circle_in3').hide();
		$('.circle_in4').hide();
		$('.circle_in5').hide();
		$('.circle_in6').hide();
		$('.circle_in7').hide();
		$('.circle_in8').show();
		$('.minicir1').show();
		$('.minicir2').show();
		$('.minicir3').show();
		$('.minicir4').show();
		$('.minicir5').show();
		$('.minicir6').show();
		$('.minicir7').show();
		$('.minicir8').hide();
	});
});
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
});
