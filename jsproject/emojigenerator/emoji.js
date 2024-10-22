const button=document.querySelector('.emoji')
const emojiName=document.querySelector('.emoji-name')
const emoji=[];
button.addEventListener('click',()=>{
    fetch('https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1')
    .then((res)=>res.json()).then((data)=>{
       
        const emojinum= Math.floor( Math.random()*1500)
        console.log(data[emojinum].character)
        button.innerText=data[emojinum].character
        emojiName.innerText=data[emojinum].character
    })
})