'use strict';

let navLinks = document.querySelectorAll('.navLink');
let linkedContents = document.querySelectorAll('.linkedContent');
let services = document.querySelectorAll('.service');
let status = ['reduced', 'expanded'];
let desktopView = window.matchMedia('(min-width: 40em)');
let goTop = document.querySelector('.gotop');
let topMainPage = document.querySelector('#top-main-page');


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

if(!desktopView.matches) {
    for(let service of services) {
        service.addEventListener('click', function(){
            if(service.getAttribute('data-status') === 'reduced') {
                service.setAttribute('data-status', 'expanded');
            }
        });
    }
}

goTop.addEventListener('click', function() {
    scrollTo(
        {
            behavior: 'smooth',
            top: topMainPage.getBoundingClientRect().top
        }
    );
});
