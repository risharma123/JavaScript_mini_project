const inputString=document.querySelector('.string')
const lowerCaseout=document.querySelector('.lowercase')
const upperCaseout=document.querySelector('.uppercase')
const camelCaseout=document.querySelector('.camelcase')
const pascleCaseout=document.querySelector('.pasclecase')
const snakeCaseout=document.querySelector('.snakecase')
const kebabCaseout=document.querySelector('.kebabcase')
const trimCaseout=document.querySelector('.trimcase')

function capitalizationString(str){
    return str[0].toUpperCase() + str.slice(1,str.length)
}
function camelCase(string1){
    const lowerCase=string1.toLocaleLowerCase()
    const wordArray=lowerCase.split(' ')
    const finalArray=wordArray.map((word,i)=>{
        if(i==0)return word
        return capitalizationString(word)
    })
    return finalArray.join('')

}
function pascleCase(string1){
    const UpperCase=string1.toLowerCase()
    const wordArray=UpperCase.split(' ')
    const finalArray=wordArray.map((word,i)=>{
        return capitalizationString(word)
    })
    return finalArray.join('')

}
function snakeCase(string1){
    const arrayword=string1.split(' ')
    const finalArray=arrayword.join('_')
    return finalArray

}
function kebabCase(string1){
    const arrayword=string1.split(' ')
    const finalArray=arrayword.join('-')
    return finalArray

}
function trimCase(string1){
   
    const finalArray=string1.replaceAll(' ','')
    return finalArray

}

// lowerCaseout.innerText=inputString.value.toLocaleLowerCase()
//     upperCaseout.innerText=inputString.value.toUpperCase()
//     camelCaseout.innerText=camelCase(inputString.value)
//     pascleCaseout.innerText=pascleCase(inputString.value)
inputString.addEventListener('input',(e)=>{
    lowerCaseout.innerText=inputString.value.toLocaleLowerCase()
    upperCaseout.innerText=inputString.value.toUpperCase()
    camelCaseout.innerText=camelCase(inputString.value)
    pascleCaseout.innerText=pascleCase(inputString.value)
    snakeCaseout.innerText=snakeCase(inputString.value)
    kebabCaseout.innerText=kebabCase(inputString.value)
    trimCaseout.innerText=trimCase(inputString.value)
})