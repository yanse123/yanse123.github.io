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
    var t1=setInterval(move,3000)
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


























//     结束
}