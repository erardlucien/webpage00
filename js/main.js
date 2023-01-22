'use strict';

let topNav = document.querySelector('.top-nav');
let hamburgerChecker = document.querySelector('.hamburgerChecker');
let hamburgerButton = document.querySelector('.hamburger-button');
let navLinks = document.querySelectorAll('.navLink');
let linkedContents = document.querySelectorAll('.linkedContent');
let services = document.querySelectorAll('.service');
let state = ['false', 'true'];
let dataStatus = ['reduced', 'expanded'];
let etcs = document.querySelectorAll('.etc');
let goTop = document.querySelector('.gotop');
let topMainPage = document.querySelector('#top-main-page');
let desktopView = matchMedia('(min-width: 80em)');
let className = 'opened';

hamburgerButton.addEventListener('click', () => {
    
    if(topNav.getAttribute('data-opened') === state[0])
    {
        topNav.setAttribute('data-opened', state[1]);
        hamburgerButton.classList.add(className);
        return;
    }

    if(topNav.getAttribute('data-opened') === state[1])
    {
        topNav.setAttribute('data-opened', state[0]);
        hamburgerButton.classList.remove(className);
    }
});

for(let index = 0; index < navLinks.length; ++index)
{
    navLinks[index].addEventListener('click', (event) => {
        event.preventDefault();

        scrollTo(
            {
                behavior: 'smooth',
                top: linkedContents[index].getBoundingClientRect().top
            }
        );
    });
}

for(let index = 0; index < etcs.length; ++index) {
    etcs[index].addEventListener('click', function() {
    if(services[index].getAttribute('data-status') === dataStatus[0]) {
        services[index].setAttribute('data-status', dataStatus[1]);
    } else {
        services[index].setAttribute('data-status', dataStatus[0]);
        scrollBy({
            behavior: 'smooth',
            top: services[index].getBoundingClientRect().top
            });
        }
    });
}


goTop.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(
        {
            behavior: 'smooth',
            top: topMainPage.getBoundingClientRect().top
        }
    );
});

function onResize()  {
    if(!desktopView.matches) {
        navLinks.forEach((navLink) => {
            navLink.setAttribute('tabindex', '-1');
        });
        hamburgerButton.setAttribute('tabindex', '0');
    } else {
        navLinks.forEach((navLink) => {
            navLink.setAttribute('tabindex', '0');
        });
        hamburgerButton.setAttribute('tabindex', '-1');
    }
}

window.addEventListener('resize', onResize);
