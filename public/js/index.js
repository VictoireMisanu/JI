const arrowTop = document.getElementById('arrowTop')

arrowTop.addEventListener('click', scroller = () => window.scrollTo(
    {top:0, behavior : 'smooth'}))

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    const menuOuvertir = document.getElementById('menu-ouverture')
    const deroule = document.getElementById('deroule');


    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });


    menuOuvertir.addEventListener('click', () => {
        deroule.classList.toggle('hidden');
    });