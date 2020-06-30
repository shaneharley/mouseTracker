const section = document.querySelector('section')
const cursor = document.querySelector('div.cursor')
const innerCursor = document.querySelector('div.innerCursor')
let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0

console.log(innerCursor)

const smooth = (event) => {
  let aimX = event.pageX
  let aimY = event.pageY
  console.log(aimX)
}




window.addEventListener('mousemove', (event) => {
  aimX = event.pageX
  aimY = event.pageY
})
window.addEventListener('wheel', (event) => {
  aimX = event.pageX
  aimY = event.pageY
})

const animate = () => {
  const diffX = aimX - currentX
  currentX = currentX + (diffX * 0.10)

  const diffY = aimY - currentY
  currentY = currentY + (diffY * 0.10)

  cursor.style.left = currentX + 'px'
  cursor.style.top = currentY + 'px'


  requestAnimationFrame(animate)
}

animate()

document.addEventListener('mousedown', () => {
  innerCursor.classList.add('clicked')
})
document.addEventListener('mouseup', () => {
  innerCursor.classList.remove('clicked')
})

