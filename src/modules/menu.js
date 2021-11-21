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

    const orderNow = document.createElement('div');
    const inner = document.createElement('div');
    inner.textContent = 'ORDER NOW !!!';
    orderNow.appendChild(inner);
    orderNow.setAttribute('id', 'order-now');
    main.appendChild(orderNow);
}

function loadMenuItem(obj){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('div');
    foodName.classList.add('menu_item__name');
    foodName.innerHTML = `<span>${obj.name}</span><span class="underline"></span><span>$${obj.price}</span>`;

    const foodDescription = document.createElement('div');
    foodDescription.classList.add('menu_item__description');
    foodDescription.textContent = obj.description;
    foodDescription.style.fontStyle = 'oblique';

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export {loadMenu};