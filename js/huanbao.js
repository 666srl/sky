$(function(){
	car('.top-center span','active');//地点选项卡
	car('.navul li','nav-active');//nav选项卡
	car('.d-left span','d-left-active');//轮播左边

	
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
	
	
	(function($){
	$.fn.extend({
		/*
		元素根据滚动条位置自定义吸顶插件 
		@defaultTop 初始化top位置
		@startTop 开始滚动和回复原样的位置
		@demo
			var ensureTop = $('#ensure').offset().top;
			$('#columnFloat').setScroll({
				defaultTop: ensureTop,//需要设置的默认起始top位置
				startTop: ensureTop//从什么位置开始执行事件
			});
		*/
		setScroll:function(opt){
			if($(this).length<1 || !opt.startTop){return;}
			var isIE6 = !-[1,]&&!window.XMLHttpRequest,
				Timmer= null,
				$this = $(this),$win = $(window),
				startTop = opt.startTop;
			/*初始化top位置*/
			if(opt.defaultTop){$this.css('top',opt.defaultTop);}

			/*开始滚动和回复原样的位置*/
			$win.bind('scroll',function(){
				if(Timmer){clearTimeout(Timmer);}
				Timmer = setTimeout(function(){
					if($win.scrollTop()>=startTop){/*开始执行事件*/
						if(isIE6){
							$this.css({'position':'absolute','top':$win.scrollTop()});
						}else{
							$this.css({'position':'fixed','top':0});
						}
					}else{
						$this.css({'position':'absolute','top':opt.startTop});
					}
				},40);
				
			});
		}
	});
})(jQuery);

$('.d-left').setScroll({
	defaultTop:0,
	startTop:160
});
	
	
	
})