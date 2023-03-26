const burger_btn = document.getElementById('burger_btn')
const welcome_btn = document.getElementById('welcome_btn')
const navbar__list = document.getElementById('navbar__list')
const burgerMenu1 = document.querySelector('.navbar__right-part')

const cards = document.querySelectorAll('.service__item')
const filterBtn = document.querySelectorAll('.service__btn')


burger_btn.addEventListener('click', toggleMenu)
function toggleMenu() {
    if(burger_btn.getAttribute('src') == '/sourses/images/burger.png') {
        burger_btn.setAttribute('src', '/sourses/images/Arrow-PNG-Image.png')
        burger_btn.style.marginLeft = '7px'
        burger_btn.style.marginTop = '4px'
        burger_btn.style.width = "25px"
    }
    else {
        burger_btn.setAttribute('src', '/sourses/images/burger.png')
        burger_btn.style.width = "40px"
        burger_btn.style.marginLeft = '0px'
        burger_btn.style.marginTop = '0px'
    }
    burgerMenu1.classList.toggle('open')
    navbar__list.classList.toggle('open')
}




filterBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      let type = btn.dataset.type
      console.log(type)
      cards.forEach(card => {
        card.classList.remove('blur')
        if(card.dataset.type !== type) card.classList.add('blur')
      }) 
    }) 
  })