
import {loadHome} from './home';
import { loadContact } from './contact';
import { loadMenu } from './menu';

function loadMain(){
    const main = document.querySelector('#main');
    main.innerHTML = '';
    const fragmentID = location.hash.substr(1); // menu or contact or home
    switch (fragmentID){
        case 'home':
            loadHome(main);
            break;
        case 'menu':
            loadMenu(main);
            break;
        case 'contact':
            loadContact(main);
            break;
        default:
            console.log('ERROR !!!');
    }
}

export {loadMain};





