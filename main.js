/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _restaurant_stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-stores */ "./src/modules/restaurant-stores.js");


var storeList = [_restaurant_stores__WEBPACK_IMPORTED_MODULE_0__.LeDuan01, _restaurant_stores__WEBPACK_IMPORTED_MODULE_0__.HamNghi77];

function loadContact(main){
    const contactpage = document.createElement('div');
    contactpage.setAttribute('id', 'contactpage');
    main.appendChild(contactpage);

    const upper = document.createElement('div');
    upper.setAttribute('id', 'order-title');
    upper.textContent = 'RESERVATION';
    contactpage.appendChild(upper);

    const form = document.createElement('form');
    contactpage.appendChild(form);

    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('align-items-center');
    form.appendChild(row);

    const nameColumn = document.createElement('div');
    nameColumn.classList.add('col-sm-6');
    nameColumn.innerHTML = `<input type="text" placeholder="Full name" class="order-input-style">`;
    row.appendChild(nameColumn);

    const phoneNumberColumn = document.createElement('div');
    phoneNumberColumn.classList.add('col-sm-6');
    phoneNumberColumn.innerHTML = `<input type="text" placeholder="Phone number" class="order-input-style">`;
    row.appendChild(phoneNumberColumn);

    const storeColumn = document.createElement('div');
    storeColumn.classList.add('col-sm-8');
    row.appendChild(storeColumn);
    const storeSelector = document.createElement('select');
    storeSelector.classList.add('order-input-style');
    storeSelector.innerHTML = storeList.map(item => `<option>${item.name}</option>`).join('');
    storeColumn.appendChild(storeSelector);
    
    const quantityColumn = document.createElement('div');
    quantityColumn.classList.add('col-sm-4');
    quantityColumn.innerHTML= `<input type="number" placeholder="Quantity" class="order-input-style">`;
    row.appendChild(quantityColumn);

    const dateColumn = document.createElement('div');
    dateColumn.classList.add('col-sm-6');
    dateColumn.innerHTML = `<input type="date" placeholder="DD/MM/YYYY" class="order-input-style">`;
    row.appendChild(dateColumn);

    const timeColumn = document.createElement('div');
    timeColumn.classList.add('col-sm-6');
    timeColumn.innerHTML = `<input type="text" placeholder="Time" class="order-input-style">`;
    row.appendChild(timeColumn);

    const confirmer = document.createElement('div');
    confirmer.innerHTML = `<input type="submit" value="CONFIRM" id="order-confirm-btn-style">`;
    form.appendChild(confirmer);

}   



/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
function loadSocialContainer(){
    const socialNav = document.createElement('div');

    const socialList = document.createElement('ul');
    socialList.setAttribute('id', 'social-list');
    socialNav.appendChild(socialList);

    const github = document.createElement('li');
    github.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>`;
    socialList.appendChild(github);

    const youtube = document.createElement('li');
    youtube.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>`;
    socialList.appendChild(youtube);

    const instagram = document.createElement('li');
    instagram.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg>`;
    socialList.appendChild(instagram);

    return socialNav;
}

function loadFAQContainer(){
    const faq = document.createElement('div');
    faq.setAttribute('id', 'footer__faq');

    const career = document.createElement('div');
    career.textContent = 'Career';
    faq.appendChild(career);

    const press = document.createElement('div');
    press.textContent = 'Press';
    faq.appendChild(press);

    const newsletter = document.createElement('div');
    newsletter.textContent = 'Newsletter';
    faq.appendChild(newsletter);

    return faq;
}

function loadAllRightsReserved(){
    const d = document.createElement('div');
    d.style.fontSize = '.5em';
    d.innerHTML = `<div>@ Copyright. All rights reserved</div>`;
    return d;
}

function createFooter(){
    const footer = document.createElement('footer');
    content.appendChild(footer);

    footer.appendChild(loadFAQContainer());
    footer.appendChild(loadAllRightsReserved());
    footer.appendChild(loadSocialContainer());
}



/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome(main){

    const homepage = document.createElement('div');
    homepage.setAttribute('id', 'homepage');
    main.appendChild(homepage);

    const homepageNote = document.createElement('div');
    homepageNote.setAttribute('id', 'homepage__note');
    homepage.appendChild(homepageNote);

    const established = document.createElement('div');
    established.textContent = 'EST. 2009';
    homepageNote.appendChild(established);     

    const homepageTitle = document.createElement('div');
    homepageTitle.setAttribute('id', 'homepage__title');
    homepageTitle.textContent = 'MOXU BISTRO';
    homepageNote.appendChild(homepageTitle);
    
    const homepageSubtitle = document.createElement('div');
    homepageSubtitle.setAttribute('id', 'homepage__subtitle');
    homepageSubtitle.textContent = 'AUTHENTIC VIETNAMESE CUISINE';
    homepageNote.appendChild(homepageSubtitle);
}



/***/ }),

/***/ "./src/modules/main-loader.js":
/*!************************************!*\
  !*** ./src/modules/main-loader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMain": () => (/* binding */ loadMain)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");





function loadMain(){
    const main = document.querySelector('#main');
    main.innerHTML = '';
    const fragmentID = location.hash.substr(1); // menu or contact or home
    switch (fragmentID){
        case 'home':
            (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)(main);
            break;
        case 'menu':
            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)(main);
            break;
        case 'contact':
            (0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadContact)(main);
            break;
        default:
            console.log('ERROR !!!');
    }
}









/***/ }),

/***/ "./src/modules/menu-items.js":
/*!***********************************!*\
  !*** ./src/modules/menu-items.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sandwich": () => (/* binding */ sandwich),
/* harmony export */   "soup": () => (/* binding */ soup),
/* harmony export */   "friedChicken": () => (/* binding */ friedChicken),
/* harmony export */   "blackBean": () => (/* binding */ blackBean),
/* harmony export */   "meatBall": () => (/* binding */ meatBall),
/* harmony export */   "brokenRice": () => (/* binding */ brokenRice),
/* harmony export */   "beanCurd": () => (/* binding */ beanCurd),
/* harmony export */   "snakeheadFish": () => (/* binding */ snakeheadFish),
/* harmony export */   "grilledPawn": () => (/* binding */ grilledPawn),
/* harmony export */   "grilledBanana": () => (/* binding */ grilledBanana)
/* harmony export */ });
class foodItem {
    constructor(name, category, price, description) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
    }
}

const sandwich = new foodItem(
    'Bánh mì pate', 
    'snack', 
    1, 
    'Famous Vietnamese sandwich with liver pate, cilantro and ham'
    );

const soup = new foodItem(
    'Phở',
    'main',
    4,
    'Beef noodle soup, sliced beef with herbs'
);

const friedChicken = new foodItem(
    'Cơm gà xối mỡ',
    'main',
    4,
    'Crispy fried chicken on a bed of colorful fried rice'
);

const blackBean = new foodItem(
    'Chè đậu đen thạch trân châu',
    'dessert',
    1.5,
    'Black beans stewed with sugar water, with pearls, black jelly...'
);

const meatBall = new foodItem(
    'Bánh mì xíu mại',
    'snack',
    2,
    'Vietnamese sandwich with meat balls in tomato sauce',

);  

const brokenRice = new foodItem(
    'Cơm Tấm Sài Gòn',
    'main',
    3,
    'The legendary and truly Saigon broken rice'
);

const beanCurd = new foodItem(
    'Tàu hủ nuớc đường gừng',
    'dessert',
    2,
    'Bean curd in ginger caramel sauce'
);

const snakeheadFish = new foodItem(
    'Cá lóc hấp bầu',
    'seafood',
    5,
    'Steamed snakehead fish with calabash'
);

const grilledPawn = new foodItem(
    'Tôm sú nướng sốt ngò xanh',
    'seafood',
    5,
    'Grilled pawn with green coriander sauce'
)

const grilledBanana = new foodItem(
    'Chuối bọc nếp nướng',
    'dessert',
    2,
    'Grilled banana in sticky rice'
)



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ "./src/modules/menu-items.js");



var mainCourseList = [], snackList = [], dessertList = [], seafoodList = []; // implement caching
[
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.sandwich, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.soup, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.friedChicken, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.blackBean, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.meatBall, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.brokenRice, 
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.beanCurd,
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.snakeheadFish,
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.grilledPawn,
    _menu_items__WEBPACK_IMPORTED_MODULE_0__.grilledBanana,
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
    orderNow.addEventListener('mousemove', (e) =>{
        console.log('a');
        shadowEffect(e, orderNow);
    })
    
}

function loadMenuItem(obj){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('div');
    foodName.classList.add('menu_item__name');
    foodName.innerHTML = `<span>${obj.name}</span><span class="underline"></span><span>$${obj.price}</span>`;

    const foodDescription = document.createElement('div');
    foodDescription.textContent = obj.description;
    foodDescription.style.fontStyle = 'oblique';
    foodDescription.style.fontSize = '.7em';    

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function shadowEffect(e, target){
    console.log(e);
    const walk = 1; //10px
    const {offsetWidth: width, offsetHeight: height} = target;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

      const xWalk = Math.round((x / width * walk) - (walk / 2));
      const yWalk = Math.round((y / height * walk) - (walk / 2));

      target.firstChild.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
      `;
}


/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav)
/* harmony export */ });
function createNav(){
    const navBar = document.createElement('nav');
    content.appendChild(navBar);

    const unorderList = document.createElement('ul');
    navBar.appendChild(unorderList);

    const brandname = document.createElement('li');
    brandname.setAttribute('id', 'nav-brandname');
    brandname.textContent = 'MOXU BISTRO';
    unorderList.appendChild(brandname);

    const home = createTab('home', '#home', 'Home');
    const contact = createTab('contact', '#contact', 'Contact');
    const menu = createTab('menu', '#menu', 'Menu');

    [home, menu, contact].forEach(e => unorderList.appendChild(e));

    if(window.scrollY >= navBar.offsetTop){
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }
    else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

function createTab(id, href, textContent){
    const atag = document.createElement('a');
    atag.setAttribute('id', id);
    atag.setAttribute('href', href)
    atag.textContent = textContent;

    const div = document.createElement('li');
    div.appendChild(atag);
    
    return div;
};



/***/ }),

/***/ "./src/modules/restaurant-stores.js":
/*!******************************************!*\
  !*** ./src/modules/restaurant-stores.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeDuan01": () => (/* binding */ LeDuan01),
/* harmony export */   "HamNghi77": () => (/* binding */ HamNghi77)
/* harmony export */ });
class store {
    constructor(name, description, address, imgURL) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.imgURL = imgURL;
    }
}

const LeDuan01 = new store(
    'Moxu Bistro - Le Duan', 
    'Two separated areas: indoor and outdoor. Offered Vietnamese seasonal food. Ideal location for foreign tourists. Office lunch set is served with rice, main dishes, soup and dessert.',
    '01 Le Duan blvd, District 1, Ho Chi Minh city',
    'images/cater-yang.jpg'
    )

const HamNghi77 = new store(
    'Moxu Bistro - Ham Nghi',
    'The restaurant with lots of small open spaces surrounded by tropical trees. Perfect site for ceremonies, meetings and romantic events',
    '77 Ham Nghi street, District 1, Ho Chi Minh city',
    'images/murat-karahan.jpg'
)



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main-loader */ "./src/modules/main-loader.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav */ "./src/modules/nav.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ "./src/modules/footer.js");



const content = document.querySelector('#content');

init();
function init(){
    (0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__.createNav)();
    createMain();
    (0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)();
    if (!location.hash)
    {
        location.hash = '#menu';
    } 
    (0,_modules_main_loader__WEBPACK_IMPORTED_MODULE_0__.loadMain)(); // get main content once the URI fragment is set
    window.addEventListener('hashchange', _modules_main_loader__WEBPACK_IMPORTED_MODULE_0__.loadMain);
}

function createMain(){
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNOK0M7QUFDTDtBQUNNO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQSxJQUFJLDZEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBUSxJQUFJO0FBQ2hCLDBDQUEwQywwREFBUTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21haW4tbG9hZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9uYXYuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcmVzdGF1cmFudC1zdG9yZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExlRHVhbjAxLCBIYW1OZ2hpNzd9IGZyb20gJy4vcmVzdGF1cmFudC1zdG9yZXMnO1xuXG52YXIgc3RvcmVMaXN0ID0gW0xlRHVhbjAxLCBIYW1OZ2hpNzddO1xuXG5mdW5jdGlvbiBsb2FkQ29udGFjdChtYWluKXtcbiAgICBjb25zdCBjb250YWN0cGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdHBhZ2UnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RwYWdlKTtcblxuICAgIGNvbnN0IHVwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci10aXRsZScpO1xuICAgIHVwcGVyLnRleHRDb250ZW50ID0gJ1JFU0VSVkFUSU9OJztcbiAgICBjb250YWN0cGFnZS5hcHBlbmRDaGlsZCh1cHBlcik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnRhY3RwYWdlLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdhbGlnbi1pdGVtcy1jZW50ZXInKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICBjb25zdCBuYW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpO1xuICAgIG5hbWVDb2x1bW4uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCIgY2xhc3M9XCJvcmRlci1pbnB1dC1zdHlsZVwiPmA7XG4gICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2x1bW4pO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXJDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaG9uZU51bWJlckNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpO1xuICAgIHBob25lTnVtYmVyQ29sdW1uLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBob25lIG51bWJlclwiIGNsYXNzPVwib3JkZXItaW5wdXQtc3R5bGVcIj5gO1xuICAgIHJvdy5hcHBlbmRDaGlsZChwaG9uZU51bWJlckNvbHVtbik7XG5cbiAgICBjb25zdCBzdG9yZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3JlQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS04Jyk7XG4gICAgcm93LmFwcGVuZENoaWxkKHN0b3JlQ29sdW1uKTtcbiAgICBjb25zdCBzdG9yZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc3RvcmVTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdvcmRlci1pbnB1dC1zdHlsZScpO1xuICAgIHN0b3JlU2VsZWN0b3IuaW5uZXJIVE1MID0gc3RvcmVMaXN0Lm1hcChpdGVtID0+IGA8b3B0aW9uPiR7aXRlbS5uYW1lfTwvb3B0aW9uPmApLmpvaW4oJycpO1xuICAgIHN0b3JlQ29sdW1uLmFwcGVuZENoaWxkKHN0b3JlU2VsZWN0b3IpO1xuICAgIFxuICAgIGNvbnN0IHF1YW50aXR5Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcXVhbnRpdHlDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sLXNtLTQnKTtcbiAgICBxdWFudGl0eUNvbHVtbi5pbm5lckhUTUw9IGA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUXVhbnRpdHlcIiBjbGFzcz1cIm9yZGVyLWlucHV0LXN0eWxlXCI+YDtcbiAgICByb3cuYXBwZW5kQ2hpbGQocXVhbnRpdHlDb2x1bW4pO1xuXG4gICAgY29uc3QgZGF0ZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sLXNtLTYnKTtcbiAgICBkYXRlQ29sdW1uLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkREL01NL1lZWVlcIiBjbGFzcz1cIm9yZGVyLWlucHV0LXN0eWxlXCI+YDtcbiAgICByb3cuYXBwZW5kQ2hpbGQoZGF0ZUNvbHVtbik7XG5cbiAgICBjb25zdCB0aW1lQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGltZUNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpO1xuICAgIHRpbWVDb2x1bW4uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGltZVwiIGNsYXNzPVwib3JkZXItaW5wdXQtc3R5bGVcIj5gO1xuICAgIHJvdy5hcHBlbmRDaGlsZCh0aW1lQ29sdW1uKTtcblxuICAgIGNvbnN0IGNvbmZpcm1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1lci5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNPTkZJUk1cIiBpZD1cIm9yZGVyLWNvbmZpcm0tYnRuLXN0eWxlXCI+YDtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1lcik7XG5cbn0gICBcblxuZXhwb3J0IHtsb2FkQ29udGFjdH07IiwiZnVuY3Rpb24gbG9hZFNvY2lhbENvbnRhaW5lcigpe1xuICAgIGNvbnN0IHNvY2lhbE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3Qgc29jaWFsTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc29jaWFsTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NvY2lhbC1saXN0Jyk7XG4gICAgc29jaWFsTmF2LmFwcGVuZENoaWxkKHNvY2lhbExpc3QpO1xuXG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBnaXRodWIuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWdpdGh1YlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICA8cGF0aCBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEyIDguMDEyIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCIvPlxuICA8L3N2Zz5gO1xuICAgIHNvY2lhbExpc3QuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcblxuICAgIGNvbnN0IHlvdXR1YmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHlvdXR1YmUuaW5uZXJIVE1MID0gIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS15b3V0dWJlXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgIDxwYXRoIGQ9XCJNOC4wNTEgMS45OTloLjA4OWMuODIyLjAwMyA0Ljk4Ny4wMzMgNi4xMS4zMzVhMi4wMSAyLjAxIDAgMCAxIDEuNDE1IDEuNDJjLjEwMS4zOC4xNzIuODgzLjIyIDEuNDAybC4wMS4xMDQuMDIyLjI2LjAwOC4xMDRjLjA2NS45MTQuMDczIDEuNzcuMDc0IDEuOTU3di4wNzVjLS4wMDEuMTk0LS4wMSAxLjEwOC0uMDgyIDIuMDZsLS4wMDguMTA1LS4wMDkuMTA0Yy0uMDUuNTcyLS4xMjQgMS4xNC0uMjM1IDEuNTU4YTIuMDA3IDIuMDA3IDAgMCAxLTEuNDE1IDEuNDJjLTEuMTYuMzEyLTUuNTY5LjMzNC02LjE4LjMzNWgtLjE0MmMtLjMwOSAwLTEuNTg3LS4wMDYtMi45MjctLjA1MmwtLjE3LS4wMDYtLjA4Ny0uMDA0LS4xNzEtLjAwNy0uMTcxLS4wMDdjLTEuMTEtLjA0OS0yLjE2Ny0uMTI4LTIuNjU0LS4yNmEyLjAwNyAyLjAwNyAwIDAgMS0xLjQxNS0xLjQxOWMtLjExMS0uNDE3LS4xODUtLjk4Ni0uMjM1LTEuNTU4TC4wOSA5LjgybC0uMDA4LS4xMDRBMzEuNCAzMS40IDAgMCAxIDAgNy42OHYtLjEyM2MuMDAyLS4yMTUuMDEtLjk1OC4wNjQtMS43NzhsLjAwNy0uMTAzLjAwMy0uMDUyLjAwOC0uMTA0LjAyMi0uMjYuMDEtLjEwNGMuMDQ4LS41MTkuMTE5LTEuMDIzLjIyLTEuNDAyYTIuMDA3IDIuMDA3IDAgMCAxIDEuNDE1LTEuNDJjLjQ4Ny0uMTMgMS41NDQtLjIxIDIuNjU0LS4yNmwuMTctLjAwNy4xNzItLjAwNi4wODYtLjAwMy4xNzEtLjAwN0E5OS43ODggOTkuNzg4IDAgMCAxIDcuODU4IDJoLjE5M3pNNi40IDUuMjA5djQuODE4bDQuMTU3LTIuNDA4TDYuNCA1LjIwOXpcIi8+XG4gIDwvc3ZnPmA7XG4gICAgc29jaWFsTGlzdC5hcHBlbmRDaGlsZCh5b3V0dWJlKTtcblxuICAgIGNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaW5zdGFncmFtLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1pbnN0YWdyYW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgPHBhdGggZD1cIk04IDBDNS44MjkgMCA1LjU1Ni4wMSA0LjcwMy4wNDggMy44NS4wODggMy4yNjkuMjIyIDIuNzYuNDJhMy45MTcgMy45MTcgMCAwIDAtMS40MTcuOTIzQTMuOTI3IDMuOTI3IDAgMCAwIC40MiAyLjc2Qy4yMjIgMy4yNjguMDg3IDMuODUuMDQ4IDQuNy4wMSA1LjU1NSAwIDUuODI3IDAgOC4wMDFjMCAyLjE3Mi4wMSAyLjQ0NC4wNDggMy4yOTcuMDQuODUyLjE3NCAxLjQzMy4zNzIgMS45NDIuMjA1LjUyNi40NzguOTcyLjkyMyAxLjQxNy40NDQuNDQ1Ljg5LjcxOSAxLjQxNi45MjMuNTEuMTk4IDEuMDkuMzMzIDEuOTQyLjM3MkM1LjU1NSAxNS45OSA1LjgyNyAxNiA4IDE2czIuNDQ0LS4wMSAzLjI5OC0uMDQ4Yy44NTEtLjA0IDEuNDM0LS4xNzQgMS45NDMtLjM3MmEzLjkxNiAzLjkxNiAwIDAgMCAxLjQxNi0uOTIzYy40NDUtLjQ0NS43MTgtLjg5MS45MjMtMS40MTcuMTk3LS41MDkuMzMyLTEuMDkuMzcyLTEuOTQyQzE1Ljk5IDEwLjQ0NSAxNiAxMC4xNzMgMTYgOHMtLjAxLTIuNDQ1LS4wNDgtMy4yOTljLS4wNC0uODUxLS4xNzUtMS40MzMtLjM3Mi0xLjk0MWEzLjkyNiAzLjkyNiAwIDAgMC0uOTIzLTEuNDE3QTMuOTExIDMuOTExIDAgMCAwIDEzLjI0LjQyYy0uNTEtLjE5OC0xLjA5Mi0uMzMzLTEuOTQzLS4zNzJDMTAuNDQzLjAxIDEwLjE3MiAwIDcuOTk4IDBoLjAwM3ptLS43MTcgMS40NDJoLjcxOGMyLjEzNiAwIDIuMzg5LjAwNyAzLjIzMi4wNDYuNzguMDM1IDEuMjA0LjE2NiAxLjQ4Ni4yNzUuMzczLjE0NS42NC4zMTkuOTIuNTk5LjI4LjI4LjQ1My41NDYuNTk4LjkyLjExLjI4MS4yNC43MDUuMjc1IDEuNDg1LjAzOS44NDMuMDQ3IDEuMDk2LjA0NyAzLjIzMXMtLjAwOCAyLjM4OS0uMDQ3IDMuMjMyYy0uMDM1Ljc4LS4xNjYgMS4yMDMtLjI3NSAxLjQ4NWEyLjQ3IDIuNDcgMCAwIDEtLjU5OS45MTljLS4yOC4yOC0uNTQ2LjQ1My0uOTIuNTk4LS4yOC4xMS0uNzA0LjI0LTEuNDg1LjI3Ni0uODQzLjAzOC0xLjA5Ni4wNDctMy4yMzIuMDQ3cy0yLjM5LS4wMDktMy4yMzMtLjA0N2MtLjc4LS4wMzYtMS4yMDMtLjE2Ni0xLjQ4NS0uMjc2YTIuNDc4IDIuNDc4IDAgMCAxLS45Mi0uNTk4IDIuNDggMi40OCAwIDAgMS0uNi0uOTJjLS4xMDktLjI4MS0uMjQtLjcwNS0uMjc1LTEuNDg1LS4wMzgtLjg0My0uMDQ2LTEuMDk2LS4wNDYtMy4yMzMgMC0yLjEzNi4wMDgtMi4zODguMDQ2LTMuMjMxLjAzNi0uNzguMTY2LTEuMjA0LjI3Ni0xLjQ4Ni4xNDUtLjM3My4zMTktLjY0LjU5OS0uOTIuMjgtLjI4LjU0Ni0uNDUzLjkyLS41OTguMjgyLS4xMS43MDUtLjI0IDEuNDg1LS4yNzYuNzM4LS4wMzQgMS4wMjQtLjA0NCAyLjUxNS0uMDQ1di4wMDJ6bTQuOTg4IDEuMzI4YS45Ni45NiAwIDEgMCAwIDEuOTIuOTYuOTYgMCAwIDAgMC0xLjkyem0tNC4yNyAxLjEyMmE0LjEwOSA0LjEwOSAwIDEgMCAwIDguMjE3IDQuMTA5IDQuMTA5IDAgMCAwIDAtOC4yMTd6bTAgMS40NDFhMi42NjcgMi42NjcgMCAxIDEgMCA1LjMzNCAyLjY2NyAyLjY2NyAwIDAgMSAwLTUuMzM0elwiLz5cbiAgPC9zdmc+YDtcbiAgICBzb2NpYWxMaXN0LmFwcGVuZENoaWxkKGluc3RhZ3JhbSk7XG5cbiAgICByZXR1cm4gc29jaWFsTmF2O1xufVxuXG5mdW5jdGlvbiBsb2FkRkFRQ29udGFpbmVyKCl7XG4gICAgY29uc3QgZmFxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmFxLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyX19mYXEnKTtcblxuICAgIGNvbnN0IGNhcmVlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmVlci50ZXh0Q29udGVudCA9ICdDYXJlZXInO1xuICAgIGZhcS5hcHBlbmRDaGlsZChjYXJlZXIpO1xuXG4gICAgY29uc3QgcHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmVzcy50ZXh0Q29udGVudCA9ICdQcmVzcyc7XG4gICAgZmFxLmFwcGVuZENoaWxkKHByZXNzKTtcblxuICAgIGNvbnN0IG5ld3NsZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdzbGV0dGVyLnRleHRDb250ZW50ID0gJ05ld3NsZXR0ZXInO1xuICAgIGZhcS5hcHBlbmRDaGlsZChuZXdzbGV0dGVyKTtcblxuICAgIHJldHVybiBmYXE7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxSaWdodHNSZXNlcnZlZCgpe1xuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkLnN0eWxlLmZvbnRTaXplID0gJy41ZW0nO1xuICAgIGQuaW5uZXJIVE1MID0gYDxkaXY+QCBDb3B5cmlnaHQuIEFsbCByaWdodHMgcmVzZXJ2ZWQ8L2Rpdj5gO1xuICAgIHJldHVybiBkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobG9hZEZBUUNvbnRhaW5lcigpKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobG9hZEFsbFJpZ2h0c1Jlc2VydmVkKCkpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsb2FkU29jaWFsQ29udGFpbmVyKCkpO1xufVxuXG5leHBvcnQge2NyZWF0ZUZvb3Rlcn07IiwiZnVuY3Rpb24gbG9hZEhvbWUobWFpbil7XG5cbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXBhZ2UnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVwYWdlKTtcblxuICAgIGNvbnN0IGhvbWVwYWdlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVwYWdlTm90ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwYWdlX19ub3RlJyk7XG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VOb3RlKTtcblxuICAgIGNvbnN0IGVzdGFibGlzaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXN0YWJsaXNoZWQudGV4dENvbnRlbnQgPSAnRVNULiAyMDA5JztcbiAgICBob21lcGFnZU5vdGUuYXBwZW5kQ2hpbGQoZXN0YWJsaXNoZWQpOyAgICAgXG5cbiAgICBjb25zdCBob21lcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZXBhZ2VUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwYWdlX190aXRsZScpO1xuICAgIGhvbWVwYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnTU9YVSBCSVNUUk8nO1xuICAgIGhvbWVwYWdlTm90ZS5hcHBlbmRDaGlsZChob21lcGFnZVRpdGxlKTtcbiAgICBcbiAgICBjb25zdCBob21lcGFnZVN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZXBhZ2VTdWJ0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwYWdlX19zdWJ0aXRsZScpO1xuICAgIGhvbWVwYWdlU3VidGl0bGUudGV4dENvbnRlbnQgPSAnQVVUSEVOVElDIFZJRVROQU1FU0UgQ1VJU0lORSc7XG4gICAgaG9tZXBhZ2VOb3RlLmFwcGVuZENoaWxkKGhvbWVwYWdlU3VidGl0bGUpO1xufVxuXG5leHBvcnQge2xvYWRIb21lfTsiLCJcbmltcG9ydCB7bG9hZEhvbWV9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4vbWVudSc7XG5cbmZ1bmN0aW9uIGxvYWRNYWluKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBmcmFnbWVudElEID0gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSk7IC8vIG1lbnUgb3IgY29udGFjdCBvciBob21lXG4gICAgc3dpdGNoIChmcmFnbWVudElEKXtcbiAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICBsb2FkSG9tZShtYWluKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIGxvYWRNZW51KG1haW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgbG9hZENvbnRhY3QobWFpbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiAhISEnKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7bG9hZE1haW59O1xuXG5cblxuXG5cbiIsImNsYXNzIGZvb2RJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjYXRlZ29yeSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5jb25zdCBzYW5kd2ljaCA9IG5ldyBmb29kSXRlbShcbiAgICAnQsOhbmggbcOsIHBhdGUnLCBcbiAgICAnc25hY2snLCBcbiAgICAxLCBcbiAgICAnRmFtb3VzIFZpZXRuYW1lc2Ugc2FuZHdpY2ggd2l0aCBsaXZlciBwYXRlLCBjaWxhbnRybyBhbmQgaGFtJ1xuICAgICk7XG5cbmNvbnN0IHNvdXAgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ1Bo4bufJyxcbiAgICAnbWFpbicsXG4gICAgNCxcbiAgICAnQmVlZiBub29kbGUgc291cCwgc2xpY2VkIGJlZWYgd2l0aCBoZXJicydcbik7XG5cbmNvbnN0IGZyaWVkQ2hpY2tlbiA9IG5ldyBmb29kSXRlbShcbiAgICAnQ8ahbSBnw6AgeOG7kWkgbeG7oScsXG4gICAgJ21haW4nLFxuICAgIDQsXG4gICAgJ0NyaXNweSBmcmllZCBjaGlja2VuIG9uIGEgYmVkIG9mIGNvbG9yZnVsIGZyaWVkIHJpY2UnXG4pO1xuXG5jb25zdCBibGFja0JlYW4gPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0Now6ggxJHhuq11IMSRZW4gdGjhuqFjaCB0csOibiBjaMOidScsXG4gICAgJ2Rlc3NlcnQnLFxuICAgIDEuNSxcbiAgICAnQmxhY2sgYmVhbnMgc3Rld2VkIHdpdGggc3VnYXIgd2F0ZXIsIHdpdGggcGVhcmxzLCBibGFjayBqZWxseS4uLidcbik7XG5cbmNvbnN0IG1lYXRCYWxsID0gbmV3IGZvb2RJdGVtKFxuICAgICdCw6FuaCBtw6wgeMOtdSBt4bqhaScsXG4gICAgJ3NuYWNrJyxcbiAgICAyLFxuICAgICdWaWV0bmFtZXNlIHNhbmR3aWNoIHdpdGggbWVhdCBiYWxscyBpbiB0b21hdG8gc2F1Y2UnLFxuXG4pOyAgXG5cbmNvbnN0IGJyb2tlblJpY2UgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0PGoW0gVOG6pW0gU8OgaSBHw7JuJyxcbiAgICAnbWFpbicsXG4gICAgMyxcbiAgICAnVGhlIGxlZ2VuZGFyeSBhbmQgdHJ1bHkgU2FpZ29uIGJyb2tlbiByaWNlJ1xuKTtcblxuY29uc3QgYmVhbkN1cmQgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ1TDoHUgaOG7pyBudeG7m2MgxJHGsOG7nW5nIGfhu6tuZycsXG4gICAgJ2Rlc3NlcnQnLFxuICAgIDIsXG4gICAgJ0JlYW4gY3VyZCBpbiBnaW5nZXIgY2FyYW1lbCBzYXVjZSdcbik7XG5cbmNvbnN0IHNuYWtlaGVhZEZpc2ggPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0PDoSBsw7NjIGjhuqVwIGLhuqd1JyxcbiAgICAnc2VhZm9vZCcsXG4gICAgNSxcbiAgICAnU3RlYW1lZCBzbmFrZWhlYWQgZmlzaCB3aXRoIGNhbGFiYXNoJ1xuKTtcblxuY29uc3QgZ3JpbGxlZFBhd24gPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ1TDtG0gc8O6IG7GsOG7m25nIHPhu5F0IG5nw7IgeGFuaCcsXG4gICAgJ3NlYWZvb2QnLFxuICAgIDUsXG4gICAgJ0dyaWxsZWQgcGF3biB3aXRoIGdyZWVuIGNvcmlhbmRlciBzYXVjZSdcbilcblxuY29uc3QgZ3JpbGxlZEJhbmFuYSA9IG5ldyBmb29kSXRlbShcbiAgICAnQ2h14buRaSBi4buNYyBu4bq/cCBuxrDhu5tuZycsXG4gICAgJ2Rlc3NlcnQnLFxuICAgIDIsXG4gICAgJ0dyaWxsZWQgYmFuYW5hIGluIHN0aWNreSByaWNlJ1xuKVxuXG5leHBvcnQge1xuICAgIHNhbmR3aWNoLCBcbiAgICBzb3VwLCBcbiAgICBmcmllZENoaWNrZW4sIFxuICAgIGJsYWNrQmVhbiwgXG4gICAgbWVhdEJhbGwsIFxuICAgIGJyb2tlblJpY2UsIFxuICAgIGJlYW5DdXJkLFxuICAgIHNuYWtlaGVhZEZpc2gsXG4gICAgZ3JpbGxlZFBhd24sXG4gICAgZ3JpbGxlZEJhbmFuYVxufTsiLCJpbXBvcnQge1xuICAgIHNhbmR3aWNoLCBcbiAgICBzb3VwLCBcbiAgICBmcmllZENoaWNrZW4sIFxuICAgIGJsYWNrQmVhbiwgXG4gICAgbWVhdEJhbGwsIFxuICAgIGJyb2tlblJpY2UsIFxuICAgIGJlYW5DdXJkLFxuICAgIHNuYWtlaGVhZEZpc2gsXG4gICAgZ3JpbGxlZFBhd24sXG4gICAgZ3JpbGxlZEJhbmFuYVxufSBmcm9tICcuL21lbnUtaXRlbXMnO1xuXG5cbnZhciBtYWluQ291cnNlTGlzdCA9IFtdLCBzbmFja0xpc3QgPSBbXSwgZGVzc2VydExpc3QgPSBbXSwgc2VhZm9vZExpc3QgPSBbXTsgLy8gaW1wbGVtZW50IGNhY2hpbmdcbltcbiAgICBzYW5kd2ljaCwgXG4gICAgc291cCwgXG4gICAgZnJpZWRDaGlja2VuLCBcbiAgICBibGFja0JlYW4sIFxuICAgIG1lYXRCYWxsLCBcbiAgICBicm9rZW5SaWNlLCBcbiAgICBiZWFuQ3VyZCxcbiAgICBzbmFrZWhlYWRGaXNoLFxuICAgIGdyaWxsZWRQYXduLFxuICAgIGdyaWxsZWRCYW5hbmEsXG4gICAgXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGxldCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgaWYoY2F0ZWdvcnkgPT0gJ21haW4nKSBtYWluQ291cnNlTGlzdC5wdXNoKGl0ZW0pO1xuICAgIGVsc2UgaWYoY2F0ZWdvcnkgPT0gJ3NuYWNrJykgc25hY2tMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnZGVzc2VydCcpIGRlc3NlcnRMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnc2VhZm9vZCcpIHNlYWZvb2RMaXN0LnB1c2goaXRlbSk7XG59KVxuZnVuY3Rpb24gbG9hZE1lbnUobWFpbil7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb2QtbWVudScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBjb25zdCBtYWluQ291cnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db3Vyc2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudV9fbWFpbi1jb3Vyc2UnKTtcbiAgICBtYWluQ291cnNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWdyb3VwJyk7XG4gICAgbWFpbkNvdXJzZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnTWFpbic7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtYWluQ291cnNlRWxlbWVudCk7XG4gICAgXG4gICAgY29uc3QgZGVzc2VydEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNzZXJ0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVfX2Rlc3NlcnQnKTtcbiAgICBkZXNzZXJ0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWdyb3VwJyk7XG4gICAgZGVzc2VydEVsZW1lbnQudGV4dENvbnRlbnQgPSAnRGVzc2VydCAgICc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChkZXNzZXJ0RWxlbWVudCk7XG5cbiAgICBjb25zdCBzbmFja0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzbmFja0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51X19zbmFjaycpO1xuICAgIHNuYWNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWdyb3VwJyk7XG4gICAgc25hY2tFbGVtZW50LnRleHRDb250ZW50ID0gJ1NuYWNrJztcbiAgICBtZW51LmFwcGVuZENoaWxkKHNuYWNrRWxlbWVudCk7XG5cbiAgICBjb25zdCBzZWFmb29kRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlYWZvb2RFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudV9fc2VhZm9vZCcpO1xuICAgIHNlYWZvb2RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JvdXAnKTtcbiAgICBzZWFmb29kRWxlbWVudC50ZXh0Q29udGVudCA9ICdTZWFmb29kJztcbiAgICBtZW51LmFwcGVuZENoaWxkKHNlYWZvb2RFbGVtZW50KTtcblxuXG4gICAgbWFpbkNvdXJzZUxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbWFpbkNvdXJzZUVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIHNuYWNrTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBzbmFja0VsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIGRlc3NlcnRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGRlc3NlcnRFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7IFxuXG4gICAgc2VhZm9vZExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgc2VhZm9vZEVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9yZGVyTm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbm5lci50ZXh0Q29udGVudCA9ICdPUkRFUiBOT1cgISEhJztcbiAgICBvcmRlck5vdy5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgb3JkZXJOb3cuc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci1ub3cnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG9yZGVyTm93KTtcbiAgICBvcmRlck5vdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdhJyk7XG4gICAgICAgIHNoYWRvd0VmZmVjdChlLCBvcmRlck5vdyk7XG4gICAgfSlcbiAgICBcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnVJdGVtKG9iail7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZE5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtX19uYW1lJyk7XG4gICAgZm9vZE5hbWUuaW5uZXJIVE1MID0gYDxzcGFuPiR7b2JqLm5hbWV9PC9zcGFuPjxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPjxzcGFuPiQke29iai5wcmljZX08L3NwYW4+YDtcblxuICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcbiAgICBmb29kRGVzY3JpcHRpb24uc3R5bGUuZm9udFN0eWxlID0gJ29ibGlxdWUnO1xuICAgIGZvb2REZXNjcmlwdGlvbi5zdHlsZS5mb250U2l6ZSA9ICcuN2VtJzsgICAgXG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kTmFtZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gc2hhZG93RWZmZWN0KGUsIHRhcmdldCl7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgY29uc3Qgd2FsayA9IDE7IC8vMTBweFxuICAgIGNvbnN0IHtvZmZzZXRXaWR0aDogd2lkdGgsIG9mZnNldEhlaWdodDogaGVpZ2h0fSA9IHRhcmdldDtcbiAgICBsZXQge29mZnNldFg6IHgsIG9mZnNldFk6IHl9ID0gZTtcblxuICAgIGlmICh0aGlzICE9PSBlLnRhcmdldCkge1xuICAgICAgICB4ID0geCArIGUudGFyZ2V0Lm9mZnNldExlZnQ7XG4gICAgICAgIHkgPSB5ICsgZS50YXJnZXQub2Zmc2V0VG9wO1xuICAgIH1cblxuICAgICAgY29uc3QgeFdhbGsgPSBNYXRoLnJvdW5kKCh4IC8gd2lkdGggKiB3YWxrKSAtICh3YWxrIC8gMikpO1xuICAgICAgY29uc3QgeVdhbGsgPSBNYXRoLnJvdW5kKCh5IC8gaGVpZ2h0ICogd2FsaykgLSAod2FsayAvIDIpKTtcblxuICAgICAgdGFyZ2V0LmZpcnN0Q2hpbGQuc3R5bGUudGV4dFNoYWRvdyA9IGBcbiAgICAgICAgJHt4V2Fsa31weCAke3lXYWxrfXB4IDAgcmdiYSgyNTUsMCwyNTUsMC43KSxcbiAgICAgICAgJHt4V2FsayAqIC0xfXB4ICR7eVdhbGt9cHggMCByZ2JhKDAsMjU1LDI1NSwwLjcpLFxuICAgICAgICAke3lXYWxrfXB4ICR7eFdhbGsgKiAtMX1weCAwIHJnYmEoMCwyNTUsMCwwLjcpLFxuICAgICAgICAke3lXYWxrICogLTF9cHggJHt4V2Fsa31weCAwIHJnYmEoMCwwLDI1NSwwLjcpXG4gICAgICBgO1xufVxuZXhwb3J0IHtsb2FkTWVudX07IiwiZnVuY3Rpb24gY3JlYXRlTmF2KCl7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgY29uc3QgdW5vcmRlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZCh1bm9yZGVyTGlzdCk7XG5cbiAgICBjb25zdCBicmFuZG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGJyYW5kbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1icmFuZG5hbWUnKTtcbiAgICBicmFuZG5hbWUudGV4dENvbnRlbnQgPSAnTU9YVSBCSVNUUk8nO1xuICAgIHVub3JkZXJMaXN0LmFwcGVuZENoaWxkKGJyYW5kbmFtZSk7XG5cbiAgICBjb25zdCBob21lID0gY3JlYXRlVGFiKCdob21lJywgJyNob21lJywgJ0hvbWUnKTtcbiAgICBjb25zdCBjb250YWN0ID0gY3JlYXRlVGFiKCdjb250YWN0JywgJyNjb250YWN0JywgJ0NvbnRhY3QnKTtcbiAgICBjb25zdCBtZW51ID0gY3JlYXRlVGFiKCdtZW51JywgJyNtZW51JywgJ01lbnUnKTtcblxuICAgIFtob21lLCBtZW51LCBjb250YWN0XS5mb3JFYWNoKGUgPT4gdW5vcmRlckxpc3QuYXBwZW5kQ2hpbGQoZSkpO1xuXG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gbmF2QmFyLm9mZnNldFRvcCl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IG5hdkJhci5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkLW5hdicpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkLW5hdicpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFiKGlkLCBocmVmLCB0ZXh0Q29udGVudCl7XG4gICAgY29uc3QgYXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhdGFnLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgYXRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKVxuICAgIGF0YWcudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGF0YWcpO1xuICAgIFxuICAgIHJldHVybiBkaXY7XG59O1xuXG5leHBvcnQge2NyZWF0ZU5hdn07IiwiY2xhc3Mgc3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBhZGRyZXNzLCBpbWdVUkwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICB0aGlzLmltZ1VSTCA9IGltZ1VSTDtcbiAgICB9XG59XG5cbmNvbnN0IExlRHVhbjAxID0gbmV3IHN0b3JlKFxuICAgICdNb3h1IEJpc3RybyAtIExlIER1YW4nLCBcbiAgICAnVHdvIHNlcGFyYXRlZCBhcmVhczogaW5kb29yIGFuZCBvdXRkb29yLiBPZmZlcmVkIFZpZXRuYW1lc2Ugc2Vhc29uYWwgZm9vZC4gSWRlYWwgbG9jYXRpb24gZm9yIGZvcmVpZ24gdG91cmlzdHMuIE9mZmljZSBsdW5jaCBzZXQgaXMgc2VydmVkIHdpdGggcmljZSwgbWFpbiBkaXNoZXMsIHNvdXAgYW5kIGRlc3NlcnQuJyxcbiAgICAnMDEgTGUgRHVhbiBibHZkLCBEaXN0cmljdCAxLCBIbyBDaGkgTWluaCBjaXR5JyxcbiAgICAnaW1hZ2VzL2NhdGVyLXlhbmcuanBnJ1xuICAgIClcblxuY29uc3QgSGFtTmdoaTc3ID0gbmV3IHN0b3JlKFxuICAgICdNb3h1IEJpc3RybyAtIEhhbSBOZ2hpJyxcbiAgICAnVGhlIHJlc3RhdXJhbnQgd2l0aCBsb3RzIG9mIHNtYWxsIG9wZW4gc3BhY2VzIHN1cnJvdW5kZWQgYnkgdHJvcGljYWwgdHJlZXMuIFBlcmZlY3Qgc2l0ZSBmb3IgY2VyZW1vbmllcywgbWVldGluZ3MgYW5kIHJvbWFudGljIGV2ZW50cycsXG4gICAgJzc3IEhhbSBOZ2hpIHN0cmVldCwgRGlzdHJpY3QgMSwgSG8gQ2hpIE1pbmggY2l0eScsXG4gICAgJ2ltYWdlcy9tdXJhdC1rYXJhaGFuLmpwZydcbilcblxuZXhwb3J0IHtMZUR1YW4wMSwgSGFtTmdoaTc3fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bG9hZE1haW59IGZyb20gJy4vbW9kdWxlcy9tYWluLWxvYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVOYXYgfSBmcm9tICcuL21vZHVsZXMvbmF2JztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vbW9kdWxlcy9mb290ZXInO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmluaXQoKTtcbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBjcmVhdGVOYXYoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG4gICAgaWYgKCFsb2NhdGlvbi5oYXNoKVxuICAgIHtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjbWVudSc7XG4gICAgfSBcbiAgICBsb2FkTWFpbigpOyAvLyBnZXQgbWFpbiBjb250ZW50IG9uY2UgdGhlIFVSSSBmcmFnbWVudCBpcyBzZXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGxvYWRNYWluKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==