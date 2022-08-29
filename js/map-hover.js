const pointSeller = document.querySelectorAll('.pointSeller-text');


const maphover = (e) => {
    
    const picture = e.srcElement.previousSibling.previousSibling;
    const source = picture.querySelector('source')
    const img = picture.querySelector('img');
    img.src = './img/map.svg' ;
    source.srcset = './img/map.svg';
    e.srcElement.classList.add('activMap');
}

pointSeller.forEach((elem)=>{
    elem.addEventListener("mouseover",maphover)
})

const mapunhover = (e) => {
    const picture = e.srcElement.previousSibling.previousSibling;
    const source = picture.querySelector('source')
    const img = picture.querySelector('img');
    img.src = './img/mapGoust.svg' ;
    source.srcset = './img/mapGoust.svg';
    e.srcElement.classList.remove('activMap');
}
pointSeller.forEach((elem)=>{
    elem.addEventListener("mouseout",mapunhover)
})