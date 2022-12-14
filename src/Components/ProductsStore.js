import ccs from '../imgs/chocolate-covered-strawberry.jpg'
import cc from '../imgs/chocolate-cup.jpg'
import csc from '../imgs/chocolate-sprinkle-chocolate.jpg'
import ct from '../imgs/chocolate-turtle.jpg'
import gdt from '../imgs/golden-drop-truffle.jpg'
import odt from '../imgs/orange-dreamsicle-truffle.jpg'
import pbb from '../imgs/peanut-butter-ball.jpg'
import rb from '../imgs/rum-ball.jpg'
import tct from '../imgs/toffee-cream-truffle.jpg'
import vsc from '../imgs/vanilla-stripe-chocolate.jpg'
import wcpc from '../imgs/white-chocolate-praline-cup.jpg'
import wct from '../imgs/white-chocolate-truffle.jpg'

const productsArray = [
  { id: "1", title: "Chocolate Strawberry", price: 2.49, image: ccs },
  { id: "2", title: "Chocolate Cup", price: 3.49 , image: cc},
  { id: "3", title: "Chocolate Sprinkle Truffle", price: 2.99, image: csc },
  { id: "4", title: "Chocolate Turtle", price: 3.49 , image: ct},
  { id: "5", title: "Golden Drop Truffle", price: 3.99, image: gdt },
  { id: "6", title: "Orange Dreamsicle Truffle", price: 3.49, image: odt },
  { id: "7", title: "Peanut Butter Ball", price: 2.49 , image: pbb},
  { id: "8", title: "Rum Ball", price: 3.49 , image: rb},
  { id: "9", title: "Toffee Cream Truffle", price: 2.99 , image: tct},
  { id: "10", title: "Vanilla Stripe Chocolate", price: 2.49 , image: vsc},
  { id: "11", title: "White Chocolate Praline Cup", price: 4.99 , image: wcpc},
  { id: "12", title: "White Chocolate Truffle", price: 2.99 , image: wct},
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    return productData
}

function getProductName(id) {
  let productName = productsArray.find(product => product.id === id).title
  return productName
}

export {productsArray, getProductData, getProductName}