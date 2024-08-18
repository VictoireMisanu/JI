const arrowTop = document.getElementById('arrowTop')

arrowTop.addEventListener('click', scroller = () => window.scrollTo(
    {top:0, behavior : 'smooth'}))
