const currencyFirst=document.querySelector('#first-currency-select')
const currencySecond=document.querySelector('#second-currency-select')
const firstWorth=document.querySelector('#worth-currency1')
const secondWorth=document.querySelector('#worth-currency2')
const exchangeRate=document.querySelector('.exchange-rate')
const currencyContainer=document.querySelector('.Currency')

 function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/5ac231f3e8a1a8de8152fa0f/latest/${currencyFirst.value}`).then((res)=>res.json()).then((data)=>{
       
        const rate = data.conversion_rates[currencySecond.value];
        
        exchangeRate.innerText = `1 ${currencyFirst.value} = ${
            rate + " " + currencySecond.value
          }`;
          secondWorth.value=(firstWorth.value*rate).toFixed(2);
    })
}
updateRate()
currencyFirst.addEventListener('change',updateRate);
currencySecond.addEventListener('change',updateRate);
firstWorth.addEventListener('input',updateRate);