const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');

/*Função para abrir o menu*/

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)

/*Função para fexar o menu*/
const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)

//const teste = document.querySelector('.body');


//teste.addEventListener('click', closeNav)