const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

// Event listener
btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
})