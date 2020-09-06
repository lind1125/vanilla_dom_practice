const myID = document.querySelector('#header')
console.log(myID)

const h2 = document.querySelector('h2')
console.log(h2) 

h2.innerText = h2.innerText + "!!!"

const inTownItems = document.querySelectorAll('.in-town')
console.log(inTownItems)

inTownItems[1].style.color = 'forestgreen'