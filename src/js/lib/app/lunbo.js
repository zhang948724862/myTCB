define(function(){
	function lun(){
		var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,//实现控制点击小点控制图片切换
		    autoplay : 1000,//可选选项  自动轮播auto 
		    speed:1000,//平滑速度
		    autoplayDisableOnInteraction: false,//实现点击切换后还会自动轮播(重启autoplay属性)
		    loop:true  
		});
	}
	return lun;
})