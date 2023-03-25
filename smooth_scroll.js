var arr=document.querySelectorAll(".nav-button a");
var prevEventId=new Array();
var count=0;
var endCall=0;

function bringTo(event){
    if(prevEventId.length==1){
        clearInterval(prevEventId.pop());
    }
    event.preventDefault();
    let sectionId=this.getAttribute("href");
    let section=document.querySelector(sectionId);
    let pos=section.getBoundingClientRect();
    let yIndex=pos.top;
    var IdForSmoothScroll;
    if(yIndex==0){
        return ;
    }
    if(yIndex>0){
        IdForSmoothScroll=setInterval(goDown,10);
    }
    else{
        IdForSmoothScroll=setInterval(goUp,10);
    }
    prevEventId.push(IdForSmoothScroll);
    function goDown(){
        pos=section.getBoundingClientRect();
        yIndex=pos.top;
        if(yIndex<=0){
            clearInterval( IdForSmoothScroll);
            prevEventId.pop();
            // endCall++;
            // console.log("endCall= "+endCall);
            return ;
        }
        window.scrollBy(0,20);
        // count++;
        // console.log("Scroll call = "+count);
    }

    function goUp(){
        pos=section.getBoundingClientRect();
        yIndex=pos.top;
        if(yIndex>=0){
            clearInterval( IdForSmoothScroll);
            prevEventId.pop();
            // endCall++;
            // console.log("endCall= "+endCall);
            return ;
        }
        window.scrollBy(0,-20);
        // count++;
        // console.log("Scroll call = "+count);
    }

    
}


for(let i=0;i<arr.length;i++){
    arr[i].addEventListener('click',bringTo);
}