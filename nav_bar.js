var nav_bar=document.querySelector("#nav-logo a");
var expanded=false;
var arr=document.querySelectorAll("#nav-container a");
var nav_container=document.querySelector("#nav-container");

nav_bar.addEventListener('click',toggle);
for(let i=0;i<arr.length;i++){
    arr[i].addEventListener('click',toggle);
}

function toggle(){
    if(window.innerWidth>700){
        // console.log("inner width > 700")
        return ;
    }
    if(expanded){
        expanded=false;
        nav_container.style.height="0px";
        // console.log("shrink");
    }
    else{
        expanded=true;
        nav_container.style.height="300px";
        // console.log("Expand");
    }
}