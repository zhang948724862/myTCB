define(function(){
	var arr= data.shop_data;
	// console.log(arr)
	function init(){
		// var container = document.querySelector('#container')
		// console.log(container);
	    var map = new AMap.Map('container', {
	        center: [116.397428, 39.90923],//地图坐标       
	        zoom: 11//地图放大倍数
	    });
	    map.plugin(["AMap.ToolBar"], function() {
	        map.addControl(new AMap.ToolBar());//地图标识
	       // map.setMapStyle("dark");//地图主题颜色
	    });
	    for(var i = 0;i<arr.length;i++){
    	var arr1 = arr[i].map_longitude;
		var arr2 = arr[i].map_latitude;
		var content = document.createElement('div');
		content.style.position ='relative'
		var img = document.createElement('img')
		img.src = 'img/qi.png';
		img.setAttribute('class','img1');
		content.appendChild(img);
		var div = document.createElement('div');
		div.setAttribute('class','div0');
		var h3 = document.createElement('h3');
		h3.innerHTML = arr[i].shop_name;
		div.appendChild(h3);
		var p1 = document.createElement('p');
		p1.innerHTML = "主营："+arr[i].main;
		div.appendChild(p1);
		var p2 = document.createElement('p');
		p2.innerHTML = "地址："+arr[i].addr_detail;
		div.appendChild(p2);
		var a1 = document.createElement('a');
		a1.setAttribute('href','store.html');
		a1.innerHTML = "进入店铺";
		div.appendChild(a1);
		content.appendChild(div);
		img.onclick = function(){			
			var div1 = document.querySelectorAll('.div0')
			for(var j = 0;j<div1.length;j++){
				div1[j].style.display = 'none'
			}
			this.parentNode.querySelector('div').style.display = 'block';
			console.log(this.parentNode.querySelector('div'))
		}
	    var marker = new AMap.Marker({
//	    icon : 'img/qi.png',//36px*36px
	    position : [arr1,arr2],
	    content: content,
	    map : map,
		});
    }
}
return init;
})