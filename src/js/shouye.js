$(function(){
	$('.aa').click(function(){
	    $('.ul').toggle();
 })
	
var index = 0;
setInterval(function(){
	index--;
	if(index <= -4){
		setTimeout(function  () {
			index = 0;
			$('.list').css({transform:"translate("+index*20+"%)",transition:"transform 0s ease"});
		},800)
	}
	$('.list').css({transform:"translate("+index*20+"%)",transition:"transform 0.6s ease"});
	$('.ull>ul>li').css({'background':'#eee'});
	$($('.ull>ul>li')[-index]).css({'background':'black'});
},2000)


//Ajax的调用
ajax("http://127.0.0.1:3500","get","",function (data){
	var obj = JSON.parse(data);
//	console.log(data);
    var arr = obj.shop_data;
    var map1 = document.querySelector('.map1');
    var golbu = document.querySelector('.golbu');
     var colse= document.querySelector('#colse');
     map1.onclick = function(){
        golbu.style.display = 'block';
        var map = new AMap.Map('container',{
                zoom: 10,
                center: [116.397428,39.90923]//new AMap.LngLat(116.39,39.9)
               }); 
        AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
                function(){
                map.addControl(new AMap.ToolBar());
 
                map.addControl(new AMap.Scale());
 
            });
        for(var i=0;i<arr.length;i++){
        
               
               var marker = new AMap.Marker({
                position: [arr[i].map_longitude,arr[i].map_latitude],
                title:arr[i].shop_name,
                map:map
                });
               
               var infowindow = new AMap.InfoWindow({
                content: '<h3>'+arr[i].shop_name+'</h3><div>地址：'+arr[i].addr_detail+'</div><a href = "saa.html">进入店铺</a>',
                 offset: new AMap.Pixel(0, -30),
                size:new AMap.Size(230,0)
            })
            
             var clickHandle = AMap.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker.getPosition());
         })
      }
     colse.onclick = function(){
        golbu.style.display = 'none';
      }  
   }   
   for(var i=0;i<arr.length;i++){
   	 var li = document.createElement("li");
   	 var div1 = document.createElement("div");
   	 div1.className = "div1";
   	 var img = new Image();
   	 img.src = arr[i].shop_ico;
   	 div1.appendChild(img);
   	 li.appendChild(div1);
   	 
   	 var div2 = document.createElement('div');
   	 div2.className = "div2";
   	 var h2 = document.createElement("h2");
   	 h2.innerHTML = '<a href="saa.html">'+arr[i].shop_name+'<a>';
   	 div2.appendChild(h2);
   	 var span = document.createElement('span');
   	 span.innerHTML = "店铺等级："+"<img src='imgs/img/huangguan.jpg'>"
   	 h2.appendChild(span);
   	 var p1 = document.createElement('p');
   	 p1.innerHTML = "主营："+arr[i].main;
   	 div2.appendChild(p1);
   	 var p2 = document.createElement('p');
   	 p2.innerHTML = "地址："+arr[i].addr;
   	 div2.appendChild(p2);
   	 li.appendChild(div2);
   	 
   	 var div3 = document.createElement('div');
   	 div3.className = "div3";
   	 var p3 = document.createElement('p');
   	 p3.innerHTML = "<img src='imgs/img/fu.jpg'>"+"先行赔付";
   	 div3.appendChild(p3);
   	 var p4 = document.createElement('p');
   	 p4.innerHTML = "<img src='imgs/img/cds.jpg'>"+"同城帮认证";
   	 div3.appendChild(p4);
   	 var p5 = document.createElement('p');
   	 p5.innerHTML = "人气：8428次浏览";
   	 div3.appendChild(p5);
   	 li.appendChild(div3);  
   	 document.getElementsByClassName('uul')[0].appendChild(li);
   }
    
})
//
// var map = document.querySelector('.map');
// var golbu = document.querySelector('.golbu');
//高德地图
})
  

/*map.onclick = function(){
   golbu.style.display = 'block';
      

}*/



