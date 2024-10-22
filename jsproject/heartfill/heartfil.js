const container1= document.querySelector('body')

container1.addEventListener('mousemove',(e)=>{
    const xpos= e.offsetX;
    const ypos= e.offsetY;
    const span=document.createElement('span')
    span.style.left=xpos+"px";
    span.style.top=ypos+"px";
 
    const size=Math.random()*100;
    span.style.width=size +"px";
    span.style.height=size+"px";
    container1.appendChild(span);

    setTimeout(()=>{
    span.remove();
        },3000)

})