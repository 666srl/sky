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
	
	
	
	
	
	
	
	
	
	
	
})