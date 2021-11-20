import {loadMain} from './modules/main-loader';
import { createNav } from './modules/nav';
import { createFooter } from './modules/footer';
const content = document.querySelector('#content');

init();
function init(){
    createNav();
    createMain();
    createFooter();
    if (!location.hash)
    {
        location.hash = '#menu';
    } 
    loadMain(); // get main content once the URI fragment is set
    window.addEventListener('hashchange', loadMain);
}

function createMain(){
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);
}