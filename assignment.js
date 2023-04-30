const first = document.querySelector('ol :nth-child(1)')
const firstLi = document.querySelector('li:first-of-type')
first.style.backgroundColor = "black"
firstLi.style.color = 'white'


const title = document.querySelector('title')
// title.textContent = "Assignment - Solved!"
const tProperty = document.querySelector('title')
// tProperty.innerText = 'Assignment - Solved!'
// const docHead = document.head
const docTitle = document.head.querySelector('title')
docTitle.textContent = 'Assignment - Solved!'

const assign = document.querySelector('h1')
assign.textContent = 'Assignment - Solved!'
