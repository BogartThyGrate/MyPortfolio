
window.onscroll = function(){
       
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("navbar").style.backgroundColor = "#F5FFFA";    
    document.getElementById("navbar").style.transition = "420ms";
}
else{
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition = "720ms";
}
}