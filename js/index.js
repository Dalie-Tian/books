
//登录
        /////////////////////////////////////////////////////////////
        var denglu = document.querySelector(".denglu");

        denglu.onclick = () => {
            location = "denglu.html";
        }
        /////////////////////////////////////////////////////////////

        //注册
        /////////////////////////////////////////////////////////////
        var zhuce = document.querySelector(".zhuce");

        zhuce.onclick = () => {
            location = "zhuce.html";
        }
        /////////////////////////////////////////////////////////////


//VIP判断
var sp = document.querySelector(".sp");
var sp2 = document.querySelector(".sp2");
var img = document.querySelector(".sp img");

denglu.style.display = "block";
zhuce.style.display = "block";
sp.style.display = "none";
sp2.style.display = "none";

if (location.search == "" || location.search == "?x=0") {
    sp2.style.display = "block";
    sp2.innerHTML = "你可能未登录，或登录失败！";
    // alert("登录失败，请重新登录！");
} else {
    var name = decodeURI(location.search.split("&")[0].split("=")[1]);
    var vip = location.search.split("&")[1].split("=")[1];

    console.log(name);
    console.log(vip);

    if (vip == "0") { //普通用户**************************************************************
        
        sp.style.display = "block";
        img.src = "./img/vip02.jpg";
        sp.innerHTML = "尊敬的普通用户:" + name + "你好!"
        denglu.style.display = "none";
        zhuce.style.display = "none";
        var btn = document.createElement("button");
        btn.innerHTML = "退出登录";
        btn.onclick = () => {
            location = "./index.html";
        }
        sp.appendChild(btn);
        sp.appendChild(img);
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        var xhr = new XMLHttpRequest();
        xhr.open("get", "../图书馆里系统/php/books.php");
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var arr = xhr.responseText;
                arr = JSON.parse(arr);

                var table = document.createElement("table");
                var tr = document.createElement("tr");
                for (var j in arr[0]) {
                    var td = document.createElement("td");
                    td.innerHTML = j;
                    tr.appendChild(td);
                }
                table.appendChild(tr);
                var td1 = document.createElement("td");
                td1.innerHTML = "修改/删除";
                tr.appendChild(td1);
                table.appendChild(tr);


                for (var i = 0; i < arr.length; i++) {
                    var tr = document.createElement("tr");
                    for (var j in arr[i]) {
                        var td = document.createElement("td");
                        td.innerHTML = arr[i][j];
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                    var td1 = document.createElement("td");
                    var x = arr[i].id;
                    td1.innerHTML = `<button onclick="gai(${x})">修改</button><button onclick="shan(${x})">删除</button>`;
                    tr.appendChild(td1);
                    table.appendChild(tr);

                }
                bd.appendChild(table);
            }
        }

        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
    } else if (vip == "1") { //大VIP用户**************************************************************
        
        sp.style.display = "block";
        img.src = "./img/vip03.jpg";
        sp.innerHTML = "尊敬的大VIP用户:" + name + "你好!"
        denglu.style.display = "none";
        zhuce.style.display = "none";
        var btn = document.createElement("button");
        btn.innerHTML = "退出登录";
        btn.onclick = () => {
            location = "./index.html";
        }
        sp.appendChild(btn);
        sp.appendChild(img);
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        var xhr = new XMLHttpRequest();
        xhr.open("get", "../图书馆里系统/php/books.php");
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var arr = xhr.responseText;
                arr = JSON.parse(arr);

                var table = document.createElement("table");
                var tr = document.createElement("tr");
                for (var j in arr[0]) {
                    var td = document.createElement("td");
                    td.innerHTML = j;
                    tr.appendChild(td);
                }
                table.appendChild(tr);
                var td1 = document.createElement("td");
                td1.innerHTML = "修改/删除";
                tr.appendChild(td1);
                table.appendChild(tr);


                for (var i = 0; i < arr.length; i++) {
                    var tr = document.createElement("tr");
                    for (var j in arr[i]) {
                        var td = document.createElement("td");
                        td.innerHTML = arr[i][j];
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                    var td1 = document.createElement("td");
                    var x = arr[i].id;
                    td1.innerHTML = `<button onclick="gai(${x})">修改</button><button onclick="shan(${x})">删除</button>`;
                    tr.appendChild(td1);
                    table.appendChild(tr);

                }
                bd.appendChild(table);
            }
        }

        //修改
        function gai(e) {
            location = "gai.html?id=" + e;
        }

        //删除
        function shan(e) {
            location = "./php/shan.php?id=" + e;
        }

        /////////////////////////////////////////////////////////////

        // 添加图书
        /////////////////////////////////////////////////////////////
        var addbook = document.querySelector(".addbook");

        addbook.onclick = () => {
            location = "addbook.html";
        }
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
    }

}