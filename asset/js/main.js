import nav from "../js/navigationbar.js"
import skills from  "../js/skills.js"



const navbar    = document.getElementById('navbar')
const URL       = window.location.href
const skillbar  = document.getElementById('skills-container') 

skills.forEach(e => {
    const card = document.createElement('div');
    card.className = 'skill-card';

    card.innerHTML = `
        
        <h2><i class="${e.icon}"></i> ${e.name}</h2>
        <p>${e.information}</p>
        <div class="resorses">
            <a href="${e.link}">see more <span><i class="fa-solid fa-arrow-right"></i></span></a>
        </div>
    `;

    skillbar.appendChild(card);
});

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