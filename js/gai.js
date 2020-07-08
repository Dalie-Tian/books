var id=location.search.split("=")[1];


/////////////////////////////////////////////////////////////
var xhr=new XMLHttpRequest();
        xhr.open("get","../图书馆里系统/php/gai.php?id="+id);
        xhr.send(null);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4 && xhr.status==200){
                var arr=xhr.responseText;  
                arr=JSON.parse(arr)[0];
                console.log(arr);

                var inps=document.querySelectorAll("input");
                inps[0].value=arr.name;
                inps[1].value=arr.zuozhe;
                inps[2].value=arr.price;
                inps[3].value=arr.count;
                if(arr.vip==1){
                    inps[4].value=arr.vip;
                }else{
                    inps[5].value=arr.vip;
                }

                var texs=document.querySelectorAll("textarea");
                texs[0].value=arr.jianjie;
                texs[1].value=arr.content;

            }
        }
/////////////////////////////////////////////////////////////

var form=document.querySelector("form");
form.action="./php/gai_tijiao.php?id="+id;


