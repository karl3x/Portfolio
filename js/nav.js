const toggleButton = document.getElementsByClassName('toggle')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active-menu')
}) 