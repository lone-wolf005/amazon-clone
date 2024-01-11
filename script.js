var cur=document.querySelector("#cursor1");
var bur=document.querySelector("#cursor-blur")
// var cur=document.getElementById('#cursur1');
document.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x+"px";
    cur.style.top=dets.y+"px";
    bur.style.left=dets.x-150+"px";
    bur.style.top=dets.y-150+"px";
})