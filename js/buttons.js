const buttons = document.querySelectorAll('button');

const prevdef = (e) => {
e.preventDefault();
}

buttons.forEach((elem) => {
    elem.addEventListener('click', prevdef)
})