'use strict';

let navLinks = document.querySelectorAll('.navLink');
let linkedContents = document.querySelectorAll('.linkedContent');


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
