var nav_bar=document.querySelector("#nav-logo a");
var expanded=false;
var nav_list=document.querySelectorAll("#nav-container a");
var nav_container=document.querySelector("#nav-container");

nav_bar.addEventListener('click',toggle);
for(let i=0;i<arr.length;i++){
    nav_list[i].addEventListener('click',toggle);
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


//.............logic for scroll bar auto fill.............................



var skill_container=document.querySelector("#skill-container");
var arr=document.querySelectorAll("#skill-container .skill-percentage");
var isFilled=new Array(arr.length);
for(let i=0;i<isFilled.length;i++){
    isFilled[i]=true;
}

// var isFilled=false;

window.addEventListener('scroll',animateToAll);

function animateToAll(){
    for(let i=0;i<arr.length;i++){
        animate(arr[i]);
    }
}

function fill(eleObject){
    // console.log("fill called");
    // for(let i=0;arr.length;i++){
    //     let d=arr[i].getAttribute("data-percentage");
    //     arr[i].style.width=d;
    // }
    // console.log(eleObject);
    let d=eleObject.getAttribute("data-percentage");
    eleObject.style.width=d;
}

function empty(eleObject){
    // console.log("empty called");
    // for(let i=0;arr.length;i++){
    //     arr[i].style.width=0+"%";
    // }
    // console.log(eleObject);
    eleObject.style.width=0+"%";
}

function animate(eleObject){
    let yPos=eleObject.getBoundingClientRect().top;
    let index=parseInt(eleObject.getAttribute("data-index"));
    if(!isFilled[index]&&window.innerHeight>yPos){
        isFilled[index]=true;
        fill(eleObject);
    }
    else if(isFilled[index]&&window.innerHeight<yPos){
        isFilled[index]=false;
        empty(eleObject);
    }
}