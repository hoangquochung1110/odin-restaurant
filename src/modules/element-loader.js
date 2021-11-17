import {
    sandwich, 
    soup, 
    friedChicken, 
    blackBean, 
    meatBall, 
    brokenRice, 
    beanCurd,
    snakeheadFish,
    grilledPawn,
    grilledBanana
} from './menu-items';

var mainCourseList = [], snackList = [], dessertList = [], seafoodList = []; // implement caching
[
    sandwich, 
    soup, 
    friedChicken, 
    blackBean, 
    meatBall, 
    brokenRice, 
    beanCurd,
    snakeheadFish,
    grilledPawn,
    grilledBanana,
    ].forEach(item => {
    let category = item.category;
    if(category == 'main') mainCourseList.push(item);
    else if(category == 'snack') snackList.push(item);
    else if(category == 'dessert') dessertList.push(item);
    else if(category == 'seafood') seafoodList.push(item);
})

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

function loadHome(main){
    const title = document.createElement('div');
    title.setAttribute('id', 'content__title');
    main.appendChild(title);

    const img = document.createElement('img');
    img.setAttribute('id', 'vietnam-flag');
    img.src = 'images/vietnam.png';

    const brandName = document.createElement('h5');
    brandName.innerText = 'MOXU RESTAURANT';

    title.appendChild(img);
    title.appendChild(brandName);

    const subTitle = document.createElement('div');
    subTitle.setAttribute('id', 'content__subtitle');
    subTitle.textContent = `
        Vietnamese Cuisine Aliquam varius tempus est, quis elementum magna congue vel. 
        Sed condimentum nulla metus, vitae luctus purus rutrum a. 
        Cras tincidunt ligula urna. Mauris mattis massa non enim ornare luctus. 
        Proin quis sem nisi. Nam pulvinar tortor risus, eget tempus sapien consequat mattis. 
    `
    main.appendChild(subTitle);

}

function loadContact(main){
    const contact = document.createElement('div');
    contact.setAttribute('id', 'restaurant-contact');
    main.appendChild(contact);

    const info = document.createElement('div');
    info.setAttribute('id', 'restaurant-contact__info');
    info.textContent = ` 📞 84 934 022 111\n 🏢 01 Le Duan Blvd, Ho Chi Minh city\n ✉️ moxures@example.com`;
    contact.appendChild(info);

    const map = document.createElement('div');
    map.setAttribute('id', 'restaurant-contact__map');
    map.innerHTML = `<img src="images/moxu-location.png" style="max-width:100%; border-radius: .4em";>`;
    contact.appendChild(map);
}   

function loadMenu(main){

    const menu = document.createElement('div');
    menu.setAttribute('id', 'food-menu');
    main.appendChild(menu);

    const mainCourseElement = document.createElement('div');
    mainCourseElement.setAttribute('id', 'menu__main-course');
    mainCourseElement.classList.add('food-group');
    mainCourseElement.textContent = 'Main';
    menu.appendChild(mainCourseElement);
    
    const dessertElement = document.createElement('div');
    dessertElement.setAttribute('id', 'menu__dessert');
    dessertElement.classList.add('food-group');
    dessertElement.textContent = 'Dessert   ';
    menu.appendChild(dessertElement);

    const snackElement = document.createElement('div');
    snackElement.setAttribute('id', 'menu__snack');
    snackElement.classList.add('food-group');
    snackElement.textContent = 'Snack';
    menu.appendChild(snackElement);

    const seafoodElement = document.createElement('div');
    seafoodElement.setAttribute('id', 'menu__seafood');
    seafoodElement.classList.add('food-group');
    seafoodElement.textContent = 'Seafood';
    menu.appendChild(seafoodElement);


    mainCourseList.forEach(item => {
        mainCourseElement.appendChild(loadMenuItem(item));
    });

    snackList.forEach(item => {
        snackElement.appendChild(loadMenuItem(item));
    });

    dessertList.forEach(item => {
        dessertElement.appendChild(loadMenuItem(item));
    }); 

    seafoodList.forEach(item => {
        seafoodElement.appendChild(loadMenuItem(item));
    }); 

}

function loadMenuItem(obj, container){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('div');
    foodName.classList.add('menu_item__name');
    foodName.innerHTML = `<span>${obj.name}</span><span class="underline"></span><span>$${obj.price}</span>`;

    const foodDescription = document.createElement('div');
    foodDescription.textContent = obj.description;
    foodDescription.style.fontStyle = 'oblique';

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}
export {loadMain};