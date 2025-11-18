import nav from "../js/navigationbar.js"
import skills from  "../js/skills.js"
import experiance from "./experiance.js"


const navbar               = document.getElementById('navbar')
const URL                  = window.location.href
const skillbar             = document.getElementById('skills-container') 
const experiance_container = document.getElementById('experiance-container')

//  var swiper = new Swiper(".mySwiper", {
//       pagination: {
//         el: ".swiper-pagination",
//         type: "progressbar",
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });

experiance.forEach(e => {
    const array = e.responsablety.split('.')

    const cardex = document.createElement('div');
    cardex.className = 'experiance-card';
    cardex.innerHTML = `
        <h2 class="name-company">${e.name}</h2>
        <h3 class="position">${e.position}</h3>
        <p class="desc">${e.descreption}</p>
        <details>
            <summary>What are my responsibilities?</summary>
            <div class="resp-list"></div>
        </details>
        <div class="work-info">
            <small>${e.typeofcontract}</small>
            <small>${e.duration.start} - ${e.duration.end}</small>
        </div>
    `;
    experiance_container.appendChild(cardex);

    const respList = cardex.querySelector('.resp-list');

    array.forEach(item => {
        if(item.trim() !== '') {
            const p = document.createElement('p');
            p.className = 'list-r';
            p.textContent = item.trim() + '\n';
            respList.appendChild(p);
        }
    });
});





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