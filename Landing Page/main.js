
// window.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY || window.pageYOffset;
//     console.log(`Posição de rolagem atual: ${scrollPosition}px`);
// }); 


function largura() {
    let label = document.getElementById('lblLargura');
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    
    label.innerText = largura + ' x ' + altura;
}

// largura();

window.addEventListener('DOMContentLoaded', largura());
window.addEventListener('resize', largura());
