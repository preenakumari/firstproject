let pics=document.querySelector("#pics")
let arrveiw=["../media/04a365d712183462ccad1fdb5bf63873.jpg","../media/2img.jpg","../media/3img.jpg","../media/4img.jpg","../media/5img.jpg",]
// console.log(arrveiw)
let curentindex=0
function next(){
curentindex++;
if(curentindex>=arrveiw.length){
    curentindex=0
}
pics.src=arrveiw[curentindex]
}
function previous(){
curentindex--;
if(curentindex<0){
    curentindex=arrveiw.length-1
}
pics.src=arrveiw[curentindex]
}
setInterval(() => {
    next() 
}, 3000);