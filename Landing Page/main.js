
// window.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY || window.pageYOffset;
//     conswole.log(`Posição de rolagem atual: ${scrollPosition}px`);
// }); 


function largura() {
    let label = document.getElementById('lblLargura');
    let larguraInterna = window.innerWidth;
    /*label.innerText =*/ alert(larguraInterna + 'px');

    let corBody = document.body;
    corBody.style.backgroundColor = '';
}

// largura();

window.addEventListener('scroll', largura());
