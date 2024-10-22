const form= document.querySelector('form')
const amountElement=document.querySelector('.amount')
const rateElement=document.querySelector('.interest')
const monthElement=document.querySelector('.month')
const outputElement=document.querySelector('.output')

form.addEventListener('input',(e)=>{
    const loanamount= amountElement.value
    const rate=rateElement.value
    const monthpay=monthElement.value
    const interest=(loanamount*(rate*0.01))/monthpay
    const monthalypay=( loanamount/monthpay+interest).toFixed(2)    
    outputElement.innerHTML=monthalypay
})
// function calculate(){
//     const loanamount= amountElement.value
//     const rate=rateElement.value
//     const monthpay=monthElement.value
//     const interest=(loanamount*(rate*0.01))/monthpay
//     const monthalypay=( loanamount/monthpay+interest).toFixed(2)    
    
// }