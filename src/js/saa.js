$(function(){
//ajax的效果
ajax("http://127.0.0.1:3500/fift","get","",function (data){
	var obj = JSON.parse(data);
	var arr = obj.product;
	for(var i=0;i<arr.length;i++){
		var li = document.createElement('li');
		var div1 = document.createElement('div');
		div1.className = "div1";
		var img = new Image();
		img.src = arr[i].product_img;
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
	document.getElementsByClassName('llu')[0].appendChild(li);
}
});	


ajax("http://127.0.0.1:3500/junt","get","",function (data){	
   	var obj = JSON.parse(data);
	var rab = obj.shop_data;
	for(var i=0;i<rab.length;i++){
		var li = document.createElement('li');
		var div1 = document.createElement('div');
		div1.className = "xia-div1";
		var img = new Image();
		img.src = "imgs/img1/t00df551a583a87f4e9.jpg";
		div1.appendChild(img);
		var p1 = document.createElement('p');
		p1.innerHTML = "360U374454624";
		div1.appendChild(p1);
		
		li.appendChild(div1);
		
		var div2 = document.createElement('div');
		div2.className = "xia-div2";
		var img1 = new Image();
		img1.src = "imgs/img/hun.jpg";
		div2.appendChild(img1);
		var h6 = document.createElement('h6');
		h6.innerHTML = "师傅人品不错；讲解的很耐心!";
		div2.appendChild(h6);
		var p2 = document.createElement('p');
		p2.innerHTML = "2015-11-10 13:16:32"+"&nbsp;|"+"&nbsp;上门维修电脑";
		div2.appendChild(p2);
		li.appendChild(div2);
		
		var div3 = document.createElement('div');
		div3.className = "xia-div3";
		var p3 = document.createElement('p');
		p3.innerHTML = "订单号：151110132********4624";
		div3.appendChild(p3);
		li.appendChild(div3);
	document.getElementsByClassName('xingxing')[0].appendChild(li);
	
}
});
	




})
