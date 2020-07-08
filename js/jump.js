// var result=sessionStorage;
var result=location.search.split("=")[1];
console.log(result);
if(result==1){
    h1.innerHTML="添加成功，3s后跳转到首页";
    setTimeout(()=>{
        // location="index.html";
        history.go(-2);
    },3000);
}else if(result==0){
    h1.innerHTML="添加失败，3s后跳转到首页";
    setTimeout(()=>{
        // location="index.html";
        history.go(-2);
    },3000);
}else if(result==2){
    h1.innerHTML="修改成功，3s后跳转到首页";
    setTimeout(()=>{
        // location="index.html";
        history.go(-2);
    },3000);
}else if(result==3){
    h1.innerHTML="修改失败，3s后跳转到首页";
    setTimeout(()=>{
        // location="index.html";
        history.go(-2);
    },3000);
}else if(result==4){
    h1.innerHTML="删除成功，3s后跳转到首页";
    setTimeout(()=>{
        // location="index.html";
        history.go(-1);
    },3000);
}else if(result==5){
    h1.innerHTML="删除失败，3s后跳转到首页";
    setTimeout(()=>{
        // location="index.html";
        history.go(-1);
    },3000);
}else if(result==6){
    h1.innerHTML="注册成功，3s后跳转到首页";
    setTimeout(()=>{
        // location="index.html";
        history.go(-2);
    },3000);
}else if(result==7){
    h1.innerHTML="注册失败，3s后跳转到首页";
    setTimeout(()=>{
        // location="index.html";
        history.go(-2);
    },3000);
}



