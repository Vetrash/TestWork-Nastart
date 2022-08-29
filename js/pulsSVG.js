const svgConteiner = document.getElementById("object");
svgConteiner.addEventListener('load' , ()=>{
    console.log('Вот теперь данные загрузились');
    const svg = svgConteiner.getSVGDocument();
    console.log(svg.querySelector('path').getAttribute('d'))
    })

//var svgDoc = svg.contentDocument;
//const path = svg;


let rotate = 0;
setInterval(function() {
    if ( rotate > 360){rotate = 0}
    rotate += 1;
    svgConteiner.style.transform = `rotate(${rotate}deg)`;
  }, 20);