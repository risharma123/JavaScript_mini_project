const container=document.querySelector('.container')
let text=['student', 'professor','doctor','engineer'];
let textindex=0;
let characterindex=0;


function updatetext(){
    characterindex++;
container.innerHTML=`<h1>I am ${text[textindex].slice(0,1)==='e'?"an":"a"} ${text[textindex].slice(0,characterindex)}</h1>`
if(characterindex===text[textindex].length){
    textindex++;
    characterindex=0;

}
if(textindex===text.length){
    textindex=0;
}
setTimeout(updatetext,300)
}
updatetext();
