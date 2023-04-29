window.onscroll = function(){

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("icon_heart");
    

    elemento1.style.bottom = posicion * 0.15 + "px";
    elemento2.style.top = posicion * 0.15 + "px";

}