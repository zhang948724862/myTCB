function ajax(url,type,obj,fn){
	var aj = null;
	if(window.ActiveXObject){
		aj = new ActiveXObject('Microsoft.XMLHTTP');
	}else if(window.XMLHttpRequest){
		aj = new XMLHttpRequest();
	}
	var arr = [];
	if(typeof obj == 'object'){
		for(var index in obj){
			var str = index+"="+obj[index];
			arr.push(str);
		}
		var body = arr.join('&');
	}
	aj.open(type,url);
	aj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	aj.send(body);
	aj.onreadystatechange = function (){
		if(aj.readyState == 4 && aj.status == 200){
			fn(aj.responseText);
		}
	}
	 
	
}
