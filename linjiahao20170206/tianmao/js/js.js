window.onload=function () {

    var dian=document.querySelectorAll(".dian")
    var tupian=document.querySelectorAll(".tupiankuang")
    var banner=document.querySelector(".banner")
    for(let i=0;i<dian.length;i++){
        dian[i].onmouseover=function () {
            for(var j=0;j<dian.length;j++){
                dian[j].style.background="rgba(0,0,0,0.3)";
                tupian[j].style.zIndex="0";
                tupian[j].style.opacity="0";

            }
            dian[i].style.background="rgba(255,255,255,0.3)";
            dian[i].style.border="2px solid rgba(0,0,0,0.2)";
            tupian[i].style.zIndex="1";
            tupian[i].style.opacity="1";
        }
    }
    var num=0;
    var t1=setInterval(move,5000)
    function move() {
        num++;
        if(num==dian.length){
            num=0
        }
        for(let j=0;j<dian.length;j++){
            dian[j].style.backgroundColor="rgba(0,0,0,0.3)";
            tupian[j].style.opacity="0";
            tupian[j].style.zIndex="0"
        }
        dian[num].style.background="rgba(255,255,255,0.3)";
        dian[num].style.border="2px solid rgba(0,0,0,0.2)";
        tupian[num].style.zIndex="1";
        tupian[num].style.opacity="1";
    }
banner.onmouseover=function () {
    clearInterval(t1)
}
banner.onmouseout=function () {
    t1=setInterval(move,3000)
}
var dingbu=document.querySelector(".dingbufixed")
    var huidingbubufen=document.querySelectorAll(".huidingbubufen")
    var yindao=document.querySelectorAll(".yindao1")
    var xihuan=document.querySelector(".xihuan")
    var newarr=["rgb(234,98,141)","rgb(10,166,232)","rgb (100,195,51)","rgb(241,84,83)","rgb(25,200,169) ","rgb (247,169,69) ","rgb (221,39,39)"]
    var huidingbu=document.querySelector(".huidingbu")

    window.onscroll=function () {
        var  obj=document.body.scrollTop==0?document.documentElement:document.body;
        var juli=obj.scrollTop;
        if(juli>800){
            dingbu.style.top="0";
            huidingbu.style.width="36px";
            huidingbu.style.height="332px"
        }else{
            dingbu.style.top="-50px" ;
            huidingbu.style.width="0";
            huidingbu.style.height="0"
        }
        var yindao=document.querySelectorAll(".yindao1")
        var huidingbubufen=document.querySelectorAll(".huidingbubufen")
        for(let i=0;i<yindao.length;i++){
            var  obj1=document.body.scrollTop==0?document.documentElement:document.body;
            var ot1=yindao[i].offsetTop-100;
        var juli1=obj1.scrollTop;
        console.log(ot1)
        console.log(juli1)
        if(juli1==ot1){
            huidingbubufen[i].style.backgroundColor="#fff"
        }
        if(juli1==ot1+600){
            huidingbubufen[i].style.backgroundColor="rgb(98,98,98)"
        }
    }
}






            for(let i=0;i<huidingbubufen.length-1;i++){
                huidingbubufen[i].onclick=function () {
                    var  obj=document.body.scrollTop==0?document.documentElement:document.body;
                    var ot=yindao[i].offsetTop-48;
                    animate(obj,{scrollTop:ot},500)}

    }
    huidingbubufen[6].onclick=function () {
        var  obj=document.body.scrollTop==0?document.documentElement:document.body;
        var ot1=xihuan.offsetTop-50;
        animate(obj,{scrollTop:ot1},500)}


        var huidingbubufen2=document.querySelector(".huidingbubufen2")
    huidingbubufen2.onclick=function () {
        var obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        animate(obj,{scrollTop:0},500)
    }
   var shoujiban=document.querySelector(".shoujiban")
    var shoujierweima=document.querySelector(".shoujierweima")
    shoujiban.onmouseover=function () {
        shoujierweima.style.display="block"
    }
    shoujiban.onmouseout=function () {
        shoujierweima.style.display="none"
    }
    shoujierweima.onmouseover=function () {
        shoujierweima.style.display="block"
    }
    shoujierweima.onmouseout=function () {
        shoujierweima.style.display="none"
    }

  var tianmaoicon=document.querySelector(".tianmaoicon")
    var tequan=document.querySelector(".tequan3")
    tianmaoicon.onmouseover=function () {
        tequan.style.left=-90+"px"
        tequan.style.opacity="1"
        tequan.style.display="block"
       
    }
    tianmaoicon.onmouseout=function () {
        tequan.style.display="none"
    }
     var chaoshi=document.querySelectorAll(".chaoshi")
    var huosetianmao=document.querySelectorAll(".chaoshi img")
    for(let i=0;i<chaoshi.length;i++){
        chaoshi[i].onmouseover=function () {
            huosetianmao[i].style.top=-13+"px"
            huosetianmao[i].style.display="block"
        }
        chaoshi[i].onmouseout=function () {
            huosetianmao[i].style.display="none"
        }
    }












//     结束
}