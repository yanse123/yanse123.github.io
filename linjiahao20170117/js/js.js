window.onload=function () {
    var gundongtiao=document.querySelector(".guanggaoxiaoguo")
    var you=document.querySelector(".you")
    var zuo=document.querySelector(".zuo")
    var guanggaotiao=document.querySelector(".gundongtiao1")
    var num=0;
   var ti=setInterval(move,3000)
        function move() {
            flag=false;
            if(num==9){
                num=0
            }
            num++;
            if(num==-1){
                num=8
            }
        gundongtiao.style.transition="all 1s"


        gundongtiao.style.marginLeft=-297*num+"px"



    }
    guanggaotiao.onmouseover=function () {
        clearInterval(ti)
    }
    guanggaotiao.onmouseout=function () {
        ti=setInterval(move,3000)
    }
      gundongtiao.addEventListener("transitionend",function () {
           flag=true
        if(num==8){
            gundongtiao.style.transition="none";
            gundongtiao.style.marginLeft="0";
            num=0
        }

    })
    var flag=true
    you.onclick=function () {
        if(flag){
            move()
        }

    }
    zuo.onclick=function () {
        num-=2;
        move()
    }
 var tittle=document.querySelectorAll(".yingyeting")
    var time=document.querySelectorAll(".time")
    var content=[{tittle:"-陕西网上营业厅电子发票业务维护公告",time:"2017-01-05"},
        {tittle:"-2016年九月客户最爱机型排名",time:"2017-01-05"}
        ,{tittle:"关于2月9日至10日网站系统升级的公告",time:"2017-01-05"},
        {tittle:"陕客户个人信息收集、使用的目的、范围、方式以...",time:"2017-01-05"}]
    var num1=0;
    var num2=1;
    var t2=setInterval(gundong,2000)

            function gundong() {
                num1++;
                if(num1==content.length){
            num1=0
        }
        tittle[0].innerHTML=content[num1].tittle;
        time[0].innerHTML=content[num1].time;
        num2++;
        if(num2==content.length){
            num2=0
        }
        tittle[1].innerHTML=content[num2].tittle;
        time[1].innerHTML=content[num2].time;
    }

var guanggao=document.querySelector(".gonggao")
    guanggao.onmouseover=function () {
        clearInterval(t2)
    }
    guanggao.onmouseout=function () {
        t2=setInterval(gundong,2000)
    }
var zuojiantou=document.querySelector(".zuo123")
    var youjiantou=document.querySelector(".you123")
zuojiantou.onclick=function () {
    gundong()
}
    youjiantou.onclick=function () {
        gundong()
    }
































//    结束
}

