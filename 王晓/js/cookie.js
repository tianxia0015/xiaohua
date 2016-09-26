

//封装的cookie

//设置cookie
function setCookie(name,value,expires){
	//name = value
	//对name和alue 进行编码
	
	var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	
	//expires
	//instanceof 判断expires 是否是日期类型
	//name = value; expires = expires
	
	if(expires && expires instanceof Date){
		cookieText += ";expires =" + expires;
	}
	//保存到cookie中
	document.cookie = cookieText;
	
	//返回cookie ，对document.cookie 进行URI解码
	
	return decodeURIComponent(document.cookie);
					
}

//获取cookie
//name1=小明; name2=小猪; name3=远方


function getCookie(name){
	//获取所有的cookie信息
	var cookieText = decodeURIComponent(document.cookie);
	
	//根据 "; " 进行拆分
	var arr = cookieText.split("; ");
	//拆分之后的结果
	//["name1=小明","name2=小猪","name3=远方"]
	
	//遍历找到和name所匹配的键值对 然后再返回对应value的值
	
	for(var i=0;i<arr.length;i++){
		var str = arr[i]; //"name2 = 小明"
		
		var arr2 = str.split("="); //["name2","小明"]
		//如果找到匹配的name, 则直接返回对应的value
		if(arr2[0] == name){
			return arr2[1];
			
		}
		
	}
	//如果找不到对应的name, 则返回""
	return "";
}


//删除cookie
function removeCookie(name){
	var d = new Date(); //当前时间
	document.cookie = name + "= ;expires=" + d;
	return decodeURIComponent(document.cookie);
}
