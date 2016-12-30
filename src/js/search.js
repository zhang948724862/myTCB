$(function(){
ajax("http://127.0.0.1:3500/sree","get","",function (data){
	var obj = JSON.parse(data);
	var arr = obj.product;
	for(var i=0;i<arr.length;i++){
		var li = document.createElement('li');
		var div1 = document.createElement('div');
		div1.className = "div1";
		var img = new Image();
		img.src = "imgs/img1/t01e6d080313f812c24.jpg";
		div1.appendChild(img);
		li.appendChild(div1);
		
		var div2 = document.createElement('div');
		div2.className = "div2";
		var h4 = document.createElement('h4');
		h4.innerHTML = arr[i].product_name;
//		console.log(div2);
		div2.appendChild(h4);
		var p1 = document.createElement('p');
		p1.innerHTML = "服务内容："+arr[i].service_desc1;
		div2.appendChild(p1);
		li.appendChild(div2);
		
		var div3 = document.createElement('div');
		div3.className = "div3";
		var p2 = document.createElement('p');
		p2.innerHTML = "￥"+arr[i].product_price;
		var img1 = new Image();
		img1.src="imgs/img/huy.jpg";
		div3.appendChild(img1);
		div3.appendChild(p2);
		li.appendChild(div3);
	document.getElementsByClassName('huoqu')[0].appendChild(li);
}
});	

})
