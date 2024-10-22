const numberValue=document.querySelector('.inputnumber')
const status1=document.querySelector('.para')
const guessValue=document.querySelector('.guessnumber')
const submitBtn=document.querySelector('.submit1')
const startGame=document.querySelector('.start-game')
const Form=document.querySelector('form')
function e(){
let guessv=[]
let randomValue=Math.round(Math.random()*100);

Form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputValue=parseInt(numberValue.value)
    if(inputValue>randomValue){
      status1.innerText= 'too high'
    }
    else if(inputValue<randomValue){
        status1.innerText= 'too low'  
    }
    else{
        status1.innerText= 'congrats! your guess number is correct' 
        submitBtn.disabled=true
        startGame.disabled=false   
    }
    guessv.push(inputValue)
    guessValue.innerText=guessv.join(', ')
  Form.reset()    
})
startGame.addEventListener('click',(e)=>{
    submitBtn.disabled=false
    startGame.disabled=true 
    guessValue.innerText=''
    status1.innerText=''
    guessv=[]
 randomValue=Math.round(Math.random()*100)
})
}
e()
