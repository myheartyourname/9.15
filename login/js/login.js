/*
* @Author: lenovo
* @Date:   2017-09-15 17:09:32
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-15 21:49:58
*/
let user=document.getElementById('user');
let pass=document.getElementById('pass');
let button=document.getElementById('button');

button.onclick = function(){
	if(user.value.trim()=='zhangsan' && pass.value.trim()=='12345'){
		alert('success');
	}else{
       location.replace('error.html');
	}
}
