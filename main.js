const btnPre = document.querySelector('.btn-pre')
const btnNext = document.querySelector('.btn-next')
const imgs = document.querySelectorAll('.img-food img')


//set for btn next and btn pre
let index = 0

const addActive = (index) => {
    imgs.forEach((img) => {
        img.classList.remove('active')
    })
    imgs[index].classList.add('active')
}

btnPre.addEventListener('click', () => {
    if(index == 0) index = imgs.length - 1
    else index--
    addActive(index)
})

btnNext.addEventListener('click', () => {
    if(index == imgs.length - 1) index = 0
    else index++
    addActive(index)
})

//set when click menu in mobile on tablet
const menu = document.querySelector('.menu')
const iconCreate = document.querySelector('.icon-creat')


iconCreate.addEventListener('click', () => {
    menu.classList.toggle('active')
    iconCreate.classList.toggle('active')
})






