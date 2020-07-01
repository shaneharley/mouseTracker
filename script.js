const section = document.querySelector('section')
const cursor = document.querySelector('div.cursor')
const innerCursor = document.querySelector('div.innerCursor')
const pageLinks = document.querySelectorAll('a')

//initializing cursor positions
let currentX = 50
let currentY = 50
let aimX = 50
let aimY = 50

//cycling through every link and make it so when I hover it changes the cursor style
pageLinks.forEach(link => {
  link.addEventListener('mouseenter', (event) => {
    innerCursor.classList.add('clicked')
  })
  link.addEventListener('mouseleave', () => {
    innerCursor.classList.remove('clicked')
  })
})


const updateMouseAim = event => {
  aimX = event.pageX
  aimY = event.pageY
}

//if the window detects a mousemove or scroll, update the aim position
window.addEventListener('mousemove', (event) => {
  updateMouseAim(event)
})
window.addEventListener('wheel', (event) => {
  updateMouseAim(event)
})



const animate = () => {
  //calculate the difference between where its aimed and where it currently is
  //this update the current position to be slightly closer each time
  const diffX = aimX - currentX
  currentX = currentX + (diffX * 0.10)

  const diffY = aimY - currentY
  currentY = currentY + (diffY * 0.10)

  //update the cursor position
  cursor.style.left = currentX + 'px'
  cursor.style.top = currentY + 'px'

  //keep running this
  requestAnimationFrame(animate)
}

animate()


