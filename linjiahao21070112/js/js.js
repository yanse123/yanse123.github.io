window.onload=function () {
    var dian=document.getElementsByClassName("dian1")
    var banner=document.getElementsByClassName("bannerlianjie")
    var weixin=document.getElementsByClassName("weixin")[0]
    var weixindatu=document.getElementsByClassName("weixindatu")[0]
    weixin.onmouseover=function () {
        weixindatu.style.display="block"
        weixin.onmouseout=function () {
            weixindatu.style.display="none"
        }
    }
    for(let i=0;i<dian.length;i++){
        dian[i].onmouseover=function () {
            for (let j=0;j<dian.length;j++){
                dian[j].style.backgroundColor="#fff"
                banner[j].style.zIndex="0";
                banner[j].style.opacity="0"
            }
            dian[i].style.backgroundColor="#c4000e";
            banner[i].style.zIndex="1";
            banner[i].style.opacity="1";
            num=i
        }

    }
    var num=0;
    var ti=setInterval(move,3000)
    function move(){
        num++;
        if(num==dian.length){
            num=0}
        if(num=="-1"){
            num=dian.length-1
        }
        for(let j=0;j<dian.length;j++){
            dian[j].style.backgroundColor="#fff";
            banner[j].style.opacity="0";
            banner[j].style.zIndex="0"
        }
        dian[num].style.backgroundColor="#c4000e"
        banner[num].style.opacity="1";
        banner[num].style.zIndex="1";

    }
    var bannerkuang=document.getElementsByClassName("banner")[0]
    bannerkuang.onmouseover=function () {
        clearInterval(ti)
    }
    bannerkuang.onmouseout=function () {
        ti=setInterval(move,3000)
    }
    var jiantouLefy=document.getElementsByClassName("jiantou-left")[0]
    var jiantouRight=document.getElementsByClassName("jiantou-right")[0]
    jiantouRight.onclick=function () {
        move();
    }
    jiantouLefy.onclick=function () {
        num-=2;
        move()
    }

    var navList=document.querySelectorAll(".nav-list")
    navList=Array.from(navList).slice(1,-1);
    console.log(navList)
    var navList1=document.querySelectorAll(".nav-list1")
    var height=Array.from(navList1).map(function(i){
        var navList1bufen=i.querySelectorAll("a")
        return navList1bufen.length*30+5+"px";
    })
    navList.forEach(function (ele,i) {
        ele.onmouseover=function () {
            navList1[i].style.height=height[i]

        }
        ele.onmouseout=function () {
            navList1[i].style.height="0";

        }
    })









































//    结束
}