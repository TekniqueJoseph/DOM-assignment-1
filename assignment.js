const ol = document.querySelector('ol')
const first = document.querySelector('ol :nth-child(1)')
const firstLi = document.querySelector('li:first-of-type')
const oneLi = ol.firstElementChild

first.style.backgroundColor = "black"
firstLi.style.color = 'white'
oneLi.style.border = '5px solid red'


const title = document.querySelector('title')
// title.textContent = "Assignment - Solved!"
const tProperty = document.querySelector('title')
// tProperty.innerText = 'Assignment - Solved!'
// const docHead = document.head
const docTitle = document.head.querySelector('title')
docTitle.textContent = 'Assignment - Solved!'
// document.head.querySelector('title').textContent = 'Assignment - Solved!!!'
ol.children[1].style.border = '5px solid gold'

const assign = document.querySelector('h1')
assign.textContent = 'Assignment - Solved!'
ol.lastElementChild.style.border = '5px solid green'
