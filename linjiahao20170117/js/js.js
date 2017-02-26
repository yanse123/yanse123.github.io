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
   var denglu=document.querySelector(".denglu")
   var dengluwangshang=document.querySelector(".dengluwangshang")
    denglu.onmouseover=function () {
        dengluwangshang.style.display="block"
    }
    denglu.onmouseout=function () {
        dengluwangshang.style.display="none"
    }
   var shouji=document.querySelector(".shouji")
    var dengluwangshang1=document.querySelector(".dengluwangshang1")
    shouji.onmouseover=function () {
        dengluwangshang1.style.display="block"
    }
    shouji.onmouseout=function () {
        dengluwangshang1.style.display="none"
    }
  var xian=document.querySelector(".xian")
    var suoyoushengshi=document.querySelector(".suoyoushengshi")
 xian.onclick=function () {
     suoyoushengshi.style.display="block"
 }
    var xiaokuang=document.querySelectorAll(".xiaokuang")
    console.log(xiaokuang)
    var baikuang=document.querySelectorAll(".baikuang")
    for(let i=0;i<xiaokuang.length;i++){
        xiaokuang[i].onmouseover=function () {

            baikuang[i].style.height=40+"px"
        }
        xiaokuang[i].onmouseout=function () {
            baikuang[i].style.height="0"
        }
        baikuang[i].onmouseover=function () {

            baikuang[i].style.height=40+"px"
        }
        baikuang[i].onmouseout=function () {
            baikuang[i].style.height="0"
        }
    }
    var diandian=document.querySelectorAll(".diandian")
    var tupiantiao=document.querySelector(".middle-tupian")
    var abc=1;
    var numtu1=0;
    var t2=setInterval(bannermove,3000)
     function bannermove () {
         flag=false;
         tupiantiao.style.transition="all 1s"
        abc++;
        if(abc==11){
            abc=1
        };
         if(abc==-1){
             abc=10
         }
        numtu1++;
        if(numtu1==9){
            numtu1=0
        }
        for(let j=0;j<diandian.length;j++){
            diandian[j].style.backgroundColor="#caaeb5";
        }
        diandian[numtu1].style.backgroundColor="#de006c"
        tupiantiao.style.marginLeft=-740*abc+"px";
    }
    tupiantiao.addEventListener("transitionend",function () {
                  flag=true;
                if(abc==10){
                    tupiantiao.style.transition="none";
                    tupiantiao.style.marginLeft=-740+"px";
                    abc=1}
        if(abc==0){
            tupiantiao.style.transition="none";
            tupiantiao.style.marginLeft=-6660+"px";
            abc=9}

    })
    var bannerzuo=document.querySelector(".zuojiantou")
    var banneryou=document.querySelector(".youjiantou")
    var bigbanner=document.querySelector(".b-middle")
    bigbanner.onmouseover=function () {
        clearInterval(t2)
    }
    bigbanner.onmouseout=function () {
        t2=setInterval(bannermove,3000)
    }
    banneryou.onclick=function () {
      if(flag=true){
        bannermove()}}

    bannerzuo.onclick=function   () {
      if(flag=true){
         abc-=2;
        bannermove()}
    }


        for(let i=0;i<diandian.length;i++){
            diandian[i].onclick=function () {
                for(let j=0;j<diandian.length;j++){
                    diandian[j].style.backgroundColor="#caaeb5";
                }
                diandian[i].style.backgroundColor="#de006c"
i
        }
    }
    var jine=document.querySelectorAll(".jine")
    for(let i=0;i<jine.length;i++){
        jine[i].onclick=function () {
            for(let j=0;j<jine.length;j++){
                jine[j].style.background="#fff"
                jine[j].style.color="#666666"

            }
            jine[i].style.background="#e40077"
            jine[i].style.color="#fff"

        }
    }






















//    结束
}

