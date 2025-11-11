import nav from "../js/navigationbar.js";

const navbar    = document.getElementById('navbar')
const URL       = window.location.href


nav.forEach(e => {

    const key        = Object.keys(e)[0]
    const value      = e[key]
    const link       = document.createElement('a')

    
    link.href        = `#${value.id}`;
    link.className   = 'link'
    link.textContent = key.charAt(0).toUpperCase() + key.slice(1);
 
    navbar.appendChild(link); 
});

function setActive() {

    const currentURL = window.location.hash || '#home'
    const links      = document.querySelectorAll('.link')

    links.forEach((link) =>{
        if (link.getAttribute('href') == currentURL) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    })
}

window.addEventListener('hashchange', setActive)

setActive();