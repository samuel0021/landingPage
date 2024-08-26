
// window.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY || window.pageYOffset;
//     console.log(`Posição de rolagem atual: ${scrollPosition}px`);
// }); 


function largura() {
    let label = document.getElementById('lblLargura');
    let larguraInterna = window.innerWidth;
    label.innerText = larguraInterna + 'px';
}

// largura();

window.addEventListener('DOMContentLoaded', largura());
window.addEventListener('resize', largura());
