const selector = document.querySelectorAll('.selector');

const cataloghover = (e) => {
    const border = e.srcElement.nextSibling.nextSibling;    
    border.classList.add('catalog-border-active')
    
}

selector.forEach((elem)=>{
    elem.addEventListener("mouseover",cataloghover)
})

const catalogunhover = (e) => {
    const border = e.srcElement.nextSibling.nextSibling;    
    border.classList.remove('catalog-border-active')
}
selector.forEach((elem)=>{
    elem.addEventListener("mouseout",catalogunhover)
})