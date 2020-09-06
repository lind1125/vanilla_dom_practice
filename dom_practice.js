const myID = document.querySelector('#header')
console.log(myID)

const h2 = document.querySelector('h2')
console.log(h2) 

h2.innerText = h2.innerText + "!!!"

const inTownItems = document.querySelectorAll('.in-town')
console.log(inTownItems)

inTownItems[1].style.color = 'forestgreen'

inTownItems[3].innerText = 'Jamboree sandwich at the Jambo-ree'

const andy = document.createElement('img')

andy.setAttribute('src', './andrew-robbins.png')

document.body.appendChild(andy)

document.querySelectorAll('li').forEach(elem => { elem.style.color = "steelblue"})