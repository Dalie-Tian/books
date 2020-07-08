var inp=document.querySelector("input");
var span1=document.querySelector(".spanzc");

console.log(inp);
console.log(span1);

inp.onblur=(e)=>{
    e=e||window.event;
    var target=e.target||e.scrElement;
    if(target.value==""){
        span1.innerHTML="用户名不能为空";
        span1.style.color="red";
    }else if(target.value!=""){
        /////////////////////////////////////////////////////////////
        var xhr=new XMLHttpRequest();
        xhr.open("GET","./php/zhuce_panduan.php?name="+target.value);
        xhr.send(null);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4 && xhr.status==200){
                if(xhr.responseText==1){
                    span1.innerHTML="用户名太受欢迎了，换个名字吧！";
                    span1.style.color="red";
                }else{
                    span1.innerHTML="用户名可用";
                    span1.style.color="green";
                }

            }
        }
        /////////////////////////////////////////////////////////////
    }
}

var inp_sub=document.querySelectorAll("input")[5];
console.log(inp_sub);
inp_sub.onclick=function(){
    if( (inp.value=="") || (span1.style.color=="red") ){
        return false;
    }
}
