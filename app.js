"strict"

let advice =document.getElementById('advice');
let AdNo = document.getElementById('Ad');

let newAdvice = ()=>{
   fetch('https://api.adviceslip.com/advice')
 .then((responce)=> responce.json())
 .then((data) => {
  
  AdNo.innerText = `#${data.slip.id}`
  advice.innerHTML =  ` <q> ${data.slip.advice} </q>`;
 })
  }
  document.getElementById('next').addEventListener('click',()=>{
    newAdvice()
    
  })

  
