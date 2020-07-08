//////////////////////////////////////////////////////////////////
var xhr=new XMLHttpRequest();
        xhr.open("get","../图书馆里系统/php/addbook.php");
        xhr.send(null);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4 && xhr.status==200){
                var arr=xhr.responseText;  
                arr=JSON.parse(arr);
                console.log(arr);

            }
        }
//////////////////////////////////////////////////////////////////
