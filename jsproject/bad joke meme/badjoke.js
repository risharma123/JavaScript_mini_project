const jokeSetup=document.querySelector('.joke-setup')
const jokePunchline=document.querySelector('.joke-punchline')
const refreshButton1=document.querySelector('.btn-submit')
refreshButton1.addEventListener('click',()=>{
    fetch('https://official-joke-api.appspot.com/jokes/random').then((res)=>res.json()).then((data)=>{
       
       jokeSetup.innerHTML= `${data.setup}`
       jokePunchline.innerHTML= `${data.punchline}`
    }).catch((err)=>{
        jokeSetup.innerHTML = "An error happened, try again later";
     
        console.log("An error happened, try again later");
    })
})
