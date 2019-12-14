//特定id标签倒计时
function countdown(time,id) {
    setInterval(function () {
        time--;
        var hello = document.getElementById(id);
        hello.value = time + "s";
    },1000);
}

//JS判断汉字
function IsChinese(china) {
    return /[\u4e00-\u9fa5]/.test(china);
}

//JS Unicode编码转汉字
function UnicodeChina(str) {
    if(!str){
        return;
    }
    var len = 1;
    var result = "";
    for(var i=0;i<str.length;i+=len)
    {
        len = 1;
        var temp = str.charAt(i);
        if(temp == "\\"){
            if(str.charAt(i+1) == "u"){
                var unicode = str.substr((i+2),4);
                result += String.fromCharCode(parseInt(unicode))
            }
        }
    }
}

//JS汉字转Unicode编码
function  ChangeCode(str) {
    if(!str) {return ;}
    var unicode = "";
    for(var i=0;i<str.length;i++)
    {
        var temp = str.charAt(i);
        if(IsChinese(temp)){
            unicode += '\\u' +  temp.charCodeAt(0).toString(16);
        } else {
            unicode += temp;
        }
    }
    return unicode;
}

//创建带文本的元素节点
function createElementWithText(tagName,text){
    var node = document.createElement(tagName);
    node.insertAfter
    var oText = document.createTextNode(text);
    node.appendChild(oText);
    return node;
}


//节点后前插入节点
function  insertAfter(newNode,oldNode) {
    var parent = oldNode.parentNode;
    if(oldNode == parent.lastChild)
    {
        parent.appendChild(oldNode);
    } else {
        parent.insertBefore(newNode,oldNode.nextSibling);
    }
}

//删除空白节点
function removeSpaceNode(nodes) {
    var result = [];
    for(var i=0;i<nodes.length;i++)
    {
        if(nodes[i].nodeType == 3&&/^\s+$/.test(nodes[i].nodeValue))
        {
            continue;
        } else {
            result.push(nodes[i]);
        }
    }
}
//两节点交换位置,一前一后
function changeNode(fnode,bnode) {
    var node = bnode.cloneNode();
    var parent = fnode.parentNode;
    parent.removeChild(bnode);
    parent.insertBefore(node,fnode);
}

//设置cookie值,
function setCookies(name,value,type,time) {
    var oDate = new Date();
    switch (type) {
        case "second":
            oDate.setSeconds(oDate.getSeconds()+time);
            break;
        case "minute":
            oDate.setMinutes(oDate.getMinutes()+time);
            break;
        case "hour":
            oDate.setHours(oDate.getHours()+time);
            break;
        case "day":
            oDate.setDate(oDate.getDay()+time);
            break;
        case "month":
            oDate.setMonth(oDate.getMonth()+time);
            break;
        case "year":
            oDate.setFullYear(oDate.getFullYear()+time);
            break;
    }
    var expires = "expires="+oDate.toUTCString();
    var str = name+"="+value+";";
    document.cookie += str+expires;
}
//删除cookie
function removeCookie(name) {
    document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
//获取特定cookie
function getCookie(name) {
    var myname = name+"=";
    var ca = document.cookie.split(";");
    for(var i=0;i<ca.length;i++)
    {
        var c = ca[i].trim();
        if(c.indexOf(name) == 0)  {
            return c.substring(name.length+1,c.length);
        }
    }
    return "";
}

//检查cookie是否存在
function checkCookie(name) {
    if(getCookie(name) == "")
    {
        return false;
    } else{
        return true;
    }
}
//JS网页全屏操作

//fullScreen()和exitScreen()有多种实现方式，此处只使用了其中一种
//全屏
function fullScreen() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

//退出全屏
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

//监听window是否全屏，并进行相应的操作,支持esc键退出
window.onresize = function() {
        var isFull=!!(document.webkitIsFullScreen || document.mozFullScreen ||
            document.msFullscreenElement || document.fullscreenElement
        );//!document.webkitIsFullScreen都为true。因此用!!
        if (isFull==false) {
            $("#exitFullScreen").css("display","none");
            $("#fullScreen").css("display","");
        }else{
            $("#exitFullScreen").css("display","");
            $("#fullScreen").css("display","none");
        }
    }

var i = new XMLHttpRequest();
