import {createMain, createNav, createFooter} from './modules/element-initializer';
import {loadMain} from './modules/element-loader';


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

