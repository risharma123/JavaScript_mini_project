const mouseEventX=document.querySelector('#mousex')
const mouseEventY=document.querySelector('#mousey')
const bodyElement= document.querySelector('body')
bodyElement.addEventListener('mousemove',(e)=>{
   
    mouseEventX.innerHTML=e.offsetX;
    mouseEventY.innerHTML=e.offsetY;
    // mouseEventX.innerText='2';
    

})