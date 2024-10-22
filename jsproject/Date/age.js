const birth=document.querySelector('#birthday');
console.log(birth);
const form= document.querySelector('.form');
console.log(form);
form.addEventListener('input',()=>{
    const birthvalue=birth.value
      console.log( birthvalue)
      const currentDate=new Date()
      console.log(currentDate)
      const birthDate=new Date(birthvalue)
      console.log(birthDate)
      const age=currentDate.getFullYear()- birthDate.getFullYear()
      console.log(age)
})

