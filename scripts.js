const startTheGrill = () =>{
//declare variable
const TAX_PERCENTAGE = 7
const BASE_PRICE = 700
const EXTRA = 50
let proteininCounter = 0,
    ingredients = 0
//--------DOM queries------------
// grab all the toppings
let toppings = document.querySelectorAll('#toppings img')
//grab all the protein
let protein = document.querySelectorAll('#protein img')
// grab list in between buns
let list = document.getElementById('builder-canvas')
//grab Base
let base = document.getElementById('base')

const addBasePrice = () => {
if (ingredients == 1){
  base.prepend( document.createTextNode(` ${BASE_PRICE} `))
    }
  }
//ev stands for event
toppings.forEach(img =>{
  img.addEventListener('click', ev => {
      list.innerHTML += `<li>${ev.target.outerHTML}</li>`
      addBasePrice()
    })
  })

  protein.forEach( img =>{
    img.addEventListener('click', ev => {
        list.innerHTML += `<li>${ev.target.outerHTML}</li>`
        proteininCounter ++
        ingredients ++
        addBasePrice()
      })
  })



}
document.addEventListener('DOMContentLoaded', startTheGrill )
