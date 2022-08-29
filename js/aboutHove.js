const selectorAbout = document.querySelectorAll('.benefit-selector');

const abouthover = (e) => {    
    const wave = e.srcElement.parentElement.querySelector('.roundWave')    
    wave.classList.add('activebenefit')
    
}

selectorAbout.forEach((elem)=>{
    elem.addEventListener("mouseover",abouthover)
})

const aboutunhover = (e) => {
    const wave = e.srcElement.parentElement.querySelector('.roundWave')   
    wave.classList.remove('activebenefit')
}
selectorAbout.forEach((elem)=>{
    elem.addEventListener("mouseout",aboutunhover)
})