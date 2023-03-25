var skill_container=document.querySelector("#skill-container");
var arr=document.querySelectorAll("#skill-container .skill-percentage");
var isFilled=false;

window.addEventListener('scroll',animate);

function fill(){
    // console.log("fill called");
    for(let i=0;arr.length;i++){
        let d=arr[i].getAttribute("data-percentage");
        arr[i].style.width=d;
    }
}

function empty(){
    // console.log("empty called");
    for(let i=0;arr.length;i++){
        // let d=arr[i].getAttribute("data-percentage")
        arr[i].style.width=0+"%";
    }
}

function animate(){
    let yPos=skill_container.getBoundingClientRect().top;
    if(!isFilled&&window.innerHeight>yPos){
        isFilled=true;
        fill();
    }
    else if(isFilled&&window.innerHeight<yPos){
        isFilled=false;
        empty();
    }
}