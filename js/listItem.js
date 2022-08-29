const listItems = document.querySelectorAll('.listItem a')

const ListItemhover = (e) =>{
    const Item = e.srcElement; 
    const border = Item.previousSibling;
    Item.classList.add('listItem-activ') 
    border.classList.add('border-activ')
}
listItems.forEach((elem)=>{
    elem.addEventListener("mouseover",ListItemhover)
})

const ListItemUnhover = (e) =>{
    const Item = e.srcElement; 
    const border = Item.previousSibling;
    Item.classList.remove('listItem-activ')  
    border.classList.remove('border-activ')
}
listItems.forEach((elem)=>{
    elem.addEventListener("mouseout",ListItemUnhover)
})