$(function(){
	car('.top-center span','active');//地点选项卡
	car('.navul li','nav-active');//nav选项卡
	car('.lunbo-left span','lunbo-left-active');//轮播左边

	
	function car(a,b){
		
		$(a).hover(function(){
		$(this).addClass(b).css("cursor","pointer");
	},function(){
		$(this).removeClass(b)
	})
	$(a).click(function(){
		$(this).addClass(b);
	})
	}
//	轮播图
var lunbo=$('.lunbo-right'),
					ul=lunbo.find(".main"),
					lunboNav=lunbo.find(".dian li"),
					oneWidth=lunbo.find(".main li").eq(0).width();
					var timer=null;
					var num=0;
					lunboNav.eq(0).addClass("dianactive");
					timer=setInterval(function(){
						num++;
						if(num > lunboNav.length - 1){
							num=0;	
						}
						lunboNav.eq(num).trigger("click");
					},2000)
					lunboNav.click(function(){
						$(this).addClass("dianactive").siblings().removeClass("dianactive");
						var index=$(this).index();
						num=index;
						ul.animate({
							"left":-oneWidth*num
						})//也可以设置时间，必须小于3000
					})
//	lunbo.hover(function(){
//		clearInterval(timer)
//	},function(){
//		timer=setInterval(function(){
//						num++;
//						if(num > lunboNav.length - 1){
//							num=0;	
//						}
//						lunboNav.eq(num).trigger("click");
//					},2000)
//	})

	
//	$('.show').hover(function(){
//		$('.lunbo-left-two').css('transform','translateX(0)').css('opacity','1').css('z-index','3')
//	},function(){
//		$('.lunbo-left-two').css('transform','translateX(-368px)').css('opacity','0').css('z-index','3')
//	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
