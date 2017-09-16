/*
* @Author: lenovo
* @Date:   2017-09-15 19:23:07
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-15 19:31:44
*/
let span=document.getElementById('span');
setInterval(function(){
    if (span.innerText<=0){
    	location.replace('login.html');
    }else{
    	span.innerText-=1;
    }
}, 1000);