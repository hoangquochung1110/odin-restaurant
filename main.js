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

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUywrQ0FBK0MsVUFBVTs7QUFFcEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0w7QUFDTTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0EsSUFBSSw2REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQVEsSUFBSTtBQUNoQiwwQ0FBMEMsMERBQVE7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tYWluLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LWl0ZW1zLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3Jlc3RhdXJhbnQtc3RvcmVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMZUR1YW4wMSwgSGFtTmdoaTc3fSBmcm9tICcuL3Jlc3RhdXJhbnQtc3RvcmVzJztcblxudmFyIHN0b3JlTGlzdCA9IFtMZUR1YW4wMSwgSGFtTmdoaTc3XTtcblxuZnVuY3Rpb24gbG9hZENvbnRhY3QobWFpbil7XG4gICAgY29uc3QgY29udGFjdHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0cGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RwYWdlJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0cGFnZSk7XG5cbiAgICBjb25zdCB1cHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JkZXItdGl0bGUnKTtcbiAgICB1cHBlci50ZXh0Q29udGVudCA9ICdSRVNFUlZBVElPTic7XG4gICAgY29udGFjdHBhZ2UuYXBwZW5kQ2hpbGQodXBwZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb250YWN0cGFnZS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgnYWxpZ24taXRlbXMtY2VudGVyJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgY29uc3QgbmFtZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sLXNtLTYnKTtcbiAgICBuYW1lQ29sdW1uLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiIGNsYXNzPVwib3JkZXItaW5wdXQtc3R5bGVcIj5gO1xuICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lQ29sdW1uKTtcblxuICAgIGNvbnN0IHBob25lTnVtYmVyQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmVOdW1iZXJDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sLXNtLTYnKTtcbiAgICBwaG9uZU51bWJlckNvbHVtbi5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBudW1iZXJcIiBjbGFzcz1cIm9yZGVyLWlucHV0LXN0eWxlXCI+YDtcbiAgICByb3cuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXJDb2x1bW4pO1xuXG4gICAgY29uc3Qgc3RvcmVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdG9yZUNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tOCcpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChzdG9yZUNvbHVtbik7XG4gICAgY29uc3Qgc3RvcmVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHN0b3JlU2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnb3JkZXItaW5wdXQtc3R5bGUnKTtcbiAgICBzdG9yZVNlbGVjdG9yLmlubmVySFRNTCA9IHN0b3JlTGlzdC5tYXAoaXRlbSA9PiBgPG9wdGlvbj4ke2l0ZW0ubmFtZX08L29wdGlvbj5gKS5qb2luKCcnKTtcbiAgICBzdG9yZUNvbHVtbi5hcHBlbmRDaGlsZChzdG9yZVNlbGVjdG9yKTtcbiAgICBcbiAgICBjb25zdCBxdWFudGl0eUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHF1YW50aXR5Q29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS00Jyk7XG4gICAgcXVhbnRpdHlDb2x1bW4uaW5uZXJIVE1MPSBgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCIgY2xhc3M9XCJvcmRlci1pbnB1dC1zdHlsZVwiPmA7XG4gICAgcm93LmFwcGVuZENoaWxkKHF1YW50aXR5Q29sdW1uKTtcblxuICAgIGNvbnN0IGRhdGVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02Jyk7XG4gICAgZGF0ZUNvbHVtbi5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJERC9NTS9ZWVlZXCIgY2xhc3M9XCJvcmRlci1pbnB1dC1zdHlsZVwiPmA7XG4gICAgcm93LmFwcGVuZENoaWxkKGRhdGVDb2x1bW4pO1xuXG4gICAgY29uc3QgdGltZUNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbWVDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sLXNtLTYnKTtcbiAgICB0aW1lQ29sdW1uLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpbWVcIiBjbGFzcz1cIm9yZGVyLWlucHV0LXN0eWxlXCI+YDtcbiAgICByb3cuYXBwZW5kQ2hpbGQodGltZUNvbHVtbik7XG5cbiAgICBjb25zdCBjb25maXJtZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25maXJtZXIuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDT05GSVJNXCIgaWQ9XCJvcmRlci1jb25maXJtLWJ0bi1zdHlsZVwiPmA7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjb25maXJtZXIpO1xuXG59ICAgXG5cbmV4cG9ydCB7bG9hZENvbnRhY3R9OyIsImZ1bmN0aW9uIGxvYWRTb2NpYWxDb250YWluZXIoKXtcbiAgICBjb25zdCBzb2NpYWxOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHNvY2lhbExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNvY2lhbExpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdzb2NpYWwtbGlzdCcpO1xuICAgIHNvY2lhbE5hdi5hcHBlbmRDaGlsZChzb2NpYWxMaXN0KTtcblxuICAgIGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZ2l0aHViLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1naXRodWJcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgPHBhdGggZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMiA4LjAxMiAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiLz5cbiAgPC9zdmc+YDtcbiAgICBzb2NpYWxMaXN0LmFwcGVuZENoaWxkKGdpdGh1Yik7XG5cbiAgICBjb25zdCB5b3V0dWJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB5b3V0dWJlLmlubmVySFRNTCA9ICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmkteW91dHViZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICA8cGF0aCBkPVwiTTguMDUxIDEuOTk5aC4wODljLjgyMi4wMDMgNC45ODcuMDMzIDYuMTEuMzM1YTIuMDEgMi4wMSAwIDAgMSAxLjQxNSAxLjQyYy4xMDEuMzguMTcyLjg4My4yMiAxLjQwMmwuMDEuMTA0LjAyMi4yNi4wMDguMTA0Yy4wNjUuOTE0LjA3MyAxLjc3LjA3NCAxLjk1N3YuMDc1Yy0uMDAxLjE5NC0uMDEgMS4xMDgtLjA4MiAyLjA2bC0uMDA4LjEwNS0uMDA5LjEwNGMtLjA1LjU3Mi0uMTI0IDEuMTQtLjIzNSAxLjU1OGEyLjAwNyAyLjAwNyAwIDAgMS0xLjQxNSAxLjQyYy0xLjE2LjMxMi01LjU2OS4zMzQtNi4xOC4zMzVoLS4xNDJjLS4zMDkgMC0xLjU4Ny0uMDA2LTIuOTI3LS4wNTJsLS4xNy0uMDA2LS4wODctLjAwNC0uMTcxLS4wMDctLjE3MS0uMDA3Yy0xLjExLS4wNDktMi4xNjctLjEyOC0yLjY1NC0uMjZhMi4wMDcgMi4wMDcgMCAwIDEtMS40MTUtMS40MTljLS4xMTEtLjQxNy0uMTg1LS45ODYtLjIzNS0xLjU1OEwuMDkgOS44MmwtLjAwOC0uMTA0QTMxLjQgMzEuNCAwIDAgMSAwIDcuNjh2LS4xMjNjLjAwMi0uMjE1LjAxLS45NTguMDY0LTEuNzc4bC4wMDctLjEwMy4wMDMtLjA1Mi4wMDgtLjEwNC4wMjItLjI2LjAxLS4xMDRjLjA0OC0uNTE5LjExOS0xLjAyMy4yMi0xLjQwMmEyLjAwNyAyLjAwNyAwIDAgMSAxLjQxNS0xLjQyYy40ODctLjEzIDEuNTQ0LS4yMSAyLjY1NC0uMjZsLjE3LS4wMDcuMTcyLS4wMDYuMDg2LS4wMDMuMTcxLS4wMDdBOTkuNzg4IDk5Ljc4OCAwIDAgMSA3Ljg1OCAyaC4xOTN6TTYuNCA1LjIwOXY0LjgxOGw0LjE1Ny0yLjQwOEw2LjQgNS4yMDl6XCIvPlxuICA8L3N2Zz5gO1xuICAgIHNvY2lhbExpc3QuYXBwZW5kQ2hpbGQoeW91dHViZSk7XG5cbiAgICBjb25zdCBpbnN0YWdyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGluc3RhZ3JhbS5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgIDxwYXRoIGQ9XCJNOCAwQzUuODI5IDAgNS41NTYuMDEgNC43MDMuMDQ4IDMuODUuMDg4IDMuMjY5LjIyMiAyLjc2LjQyYTMuOTE3IDMuOTE3IDAgMCAwLTEuNDE3LjkyM0EzLjkyNyAzLjkyNyAwIDAgMCAuNDIgMi43NkMuMjIyIDMuMjY4LjA4NyAzLjg1LjA0OCA0LjcuMDEgNS41NTUgMCA1LjgyNyAwIDguMDAxYzAgMi4xNzIuMDEgMi40NDQuMDQ4IDMuMjk3LjA0Ljg1Mi4xNzQgMS40MzMuMzcyIDEuOTQyLjIwNS41MjYuNDc4Ljk3Mi45MjMgMS40MTcuNDQ0LjQ0NS44OS43MTkgMS40MTYuOTIzLjUxLjE5OCAxLjA5LjMzMyAxLjk0Mi4zNzJDNS41NTUgMTUuOTkgNS44MjcgMTYgOCAxNnMyLjQ0NC0uMDEgMy4yOTgtLjA0OGMuODUxLS4wNCAxLjQzNC0uMTc0IDEuOTQzLS4zNzJhMy45MTYgMy45MTYgMCAwIDAgMS40MTYtLjkyM2MuNDQ1LS40NDUuNzE4LS44OTEuOTIzLTEuNDE3LjE5Ny0uNTA5LjMzMi0xLjA5LjM3Mi0xLjk0MkMxNS45OSAxMC40NDUgMTYgMTAuMTczIDE2IDhzLS4wMS0yLjQ0NS0uMDQ4LTMuMjk5Yy0uMDQtLjg1MS0uMTc1LTEuNDMzLS4zNzItMS45NDFhMy45MjYgMy45MjYgMCAwIDAtLjkyMy0xLjQxN0EzLjkxMSAzLjkxMSAwIDAgMCAxMy4yNC40MmMtLjUxLS4xOTgtMS4wOTItLjMzMy0xLjk0My0uMzcyQzEwLjQ0My4wMSAxMC4xNzIgMCA3Ljk5OCAwaC4wMDN6bS0uNzE3IDEuNDQyaC43MThjMi4xMzYgMCAyLjM4OS4wMDcgMy4yMzIuMDQ2Ljc4LjAzNSAxLjIwNC4xNjYgMS40ODYuMjc1LjM3My4xNDUuNjQuMzE5LjkyLjU5OS4yOC4yOC40NTMuNTQ2LjU5OC45Mi4xMS4yODEuMjQuNzA1LjI3NSAxLjQ4NS4wMzkuODQzLjA0NyAxLjA5Ni4wNDcgMy4yMzFzLS4wMDggMi4zODktLjA0NyAzLjIzMmMtLjAzNS43OC0uMTY2IDEuMjAzLS4yNzUgMS40ODVhMi40NyAyLjQ3IDAgMCAxLS41OTkuOTE5Yy0uMjguMjgtLjU0Ni40NTMtLjkyLjU5OC0uMjguMTEtLjcwNC4yNC0xLjQ4NS4yNzYtLjg0My4wMzgtMS4wOTYuMDQ3LTMuMjMyLjA0N3MtMi4zOS0uMDA5LTMuMjMzLS4wNDdjLS43OC0uMDM2LTEuMjAzLS4xNjYtMS40ODUtLjI3NmEyLjQ3OCAyLjQ3OCAwIDAgMS0uOTItLjU5OCAyLjQ4IDIuNDggMCAwIDEtLjYtLjkyYy0uMTA5LS4yODEtLjI0LS43MDUtLjI3NS0xLjQ4NS0uMDM4LS44NDMtLjA0Ni0xLjA5Ni0uMDQ2LTMuMjMzIDAtMi4xMzYuMDA4LTIuMzg4LjA0Ni0zLjIzMS4wMzYtLjc4LjE2Ni0xLjIwNC4yNzYtMS40ODYuMTQ1LS4zNzMuMzE5LS42NC41OTktLjkyLjI4LS4yOC41NDYtLjQ1My45Mi0uNTk4LjI4Mi0uMTEuNzA1LS4yNCAxLjQ4NS0uMjc2LjczOC0uMDM0IDEuMDI0LS4wNDQgMi41MTUtLjA0NXYuMDAyem00Ljk4OCAxLjMyOGEuOTYuOTYgMCAxIDAgMCAxLjkyLjk2Ljk2IDAgMCAwIDAtMS45MnptLTQuMjcgMS4xMjJhNC4xMDkgNC4xMDkgMCAxIDAgMCA4LjIxNyA0LjEwOSA0LjEwOSAwIDAgMCAwLTguMjE3em0wIDEuNDQxYTIuNjY3IDIuNjY3IDAgMSAxIDAgNS4zMzQgMi42NjcgMi42NjcgMCAwIDEgMC01LjMzNHpcIi8+XG4gIDwvc3ZnPmA7XG4gICAgc29jaWFsTGlzdC5hcHBlbmRDaGlsZChpbnN0YWdyYW0pO1xuXG4gICAgcmV0dXJuIHNvY2lhbE5hdjtcbn1cblxuZnVuY3Rpb24gbG9hZEZBUUNvbnRhaW5lcigpe1xuICAgIGNvbnN0IGZhcSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZhcS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlcl9fZmFxJyk7XG5cbiAgICBjb25zdCBjYXJlZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJlZXIudGV4dENvbnRlbnQgPSAnQ2FyZWVyJztcbiAgICBmYXEuYXBwZW5kQ2hpbGQoY2FyZWVyKTtcblxuICAgIGNvbnN0IHByZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJlc3MudGV4dENvbnRlbnQgPSAnUHJlc3MnO1xuICAgIGZhcS5hcHBlbmRDaGlsZChwcmVzcyk7XG5cbiAgICBjb25zdCBuZXdzbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3c2xldHRlci50ZXh0Q29udGVudCA9ICdOZXdzbGV0dGVyJztcbiAgICBmYXEuYXBwZW5kQ2hpbGQobmV3c2xldHRlcik7XG5cbiAgICByZXR1cm4gZmFxO1xufVxuXG5mdW5jdGlvbiBsb2FkQWxsUmlnaHRzUmVzZXJ2ZWQoKXtcbiAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZC5zdHlsZS5mb250U2l6ZSA9ICcuNWVtJztcbiAgICBkLmlubmVySFRNTCA9IGA8ZGl2PkAgQ29weXJpZ2h0LiBBbGwgcmlnaHRzIHJlc2VydmVkPC9kaXY+YDtcbiAgICByZXR1cm4gZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxvYWRGQVFDb250YWluZXIoKSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxvYWRBbGxSaWdodHNSZXNlcnZlZCgpKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobG9hZFNvY2lhbENvbnRhaW5lcigpKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVGb290ZXJ9OyIsImZ1bmN0aW9uIGxvYWRIb21lKG1haW4pe1xuXG4gICAgY29uc3QgaG9tZXBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lcGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwYWdlJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lcGFnZSk7XG5cbiAgICBjb25zdCBob21lcGFnZU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lcGFnZU5vdGUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lcGFnZV9fbm90ZScpO1xuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKGhvbWVwYWdlTm90ZSk7XG5cbiAgICBjb25zdCBlc3RhYmxpc2hlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVzdGFibGlzaGVkLnRleHRDb250ZW50ID0gJ0VTVC4gMjAwOSc7XG4gICAgaG9tZXBhZ2VOb3RlLmFwcGVuZENoaWxkKGVzdGFibGlzaGVkKTsgICAgIFxuXG4gICAgY29uc3QgaG9tZXBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVwYWdlVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lcGFnZV9fdGl0bGUnKTtcbiAgICBob21lcGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ01PWFUgQklTVFJPJztcbiAgICBob21lcGFnZU5vdGUuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VUaXRsZSk7XG4gICAgXG4gICAgY29uc3QgaG9tZXBhZ2VTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVwYWdlU3VidGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lcGFnZV9fc3VidGl0bGUnKTtcbiAgICBob21lcGFnZVN1YnRpdGxlLnRleHRDb250ZW50ID0gJ0FVVEhFTlRJQyBWSUVUTkFNRVNFIENVSVNJTkUnO1xuICAgIGhvbWVwYWdlTm90ZS5hcHBlbmRDaGlsZChob21lcGFnZVN1YnRpdGxlKTtcbn1cblxuZXhwb3J0IHtsb2FkSG9tZX07IiwiXG5pbXBvcnQge2xvYWRIb21lfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL21lbnUnO1xuXG5mdW5jdGlvbiBsb2FkTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZnJhZ21lbnRJRCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpOyAvLyBtZW51IG9yIGNvbnRhY3Qgb3IgaG9tZVxuICAgIHN3aXRjaCAoZnJhZ21lbnRJRCl7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgbG9hZEhvbWUobWFpbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBsb2FkTWVudShtYWluKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgIGxvYWRDb250YWN0KG1haW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgISEhJyk7XG4gICAgfVxufVxuXG5leHBvcnQge2xvYWRNYWlufTtcblxuXG5cblxuXG4iLCJjbGFzcyBmb29kSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY2F0ZWdvcnksIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuY29uc3Qgc2FuZHdpY2ggPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0LDoW5oIG3DrCBwYXRlJywgXG4gICAgJ3NuYWNrJywgXG4gICAgMSwgXG4gICAgJ0ZhbW91cyBWaWV0bmFtZXNlIHNhbmR3aWNoIHdpdGggbGl2ZXIgcGF0ZSwgY2lsYW50cm8gYW5kIGhhbSdcbiAgICApO1xuXG5jb25zdCBzb3VwID0gbmV3IGZvb2RJdGVtKFxuICAgICdQaOG7nycsXG4gICAgJ21haW4nLFxuICAgIDQsXG4gICAgJ0JlZWYgbm9vZGxlIHNvdXAsIHNsaWNlZCBiZWVmIHdpdGggaGVyYnMnXG4pO1xuXG5jb25zdCBmcmllZENoaWNrZW4gPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0PGoW0gZ8OgIHjhu5FpIG3hu6EnLFxuICAgICdtYWluJyxcbiAgICA0LFxuICAgICdDcmlzcHkgZnJpZWQgY2hpY2tlbiBvbiBhIGJlZCBvZiBjb2xvcmZ1bCBmcmllZCByaWNlJ1xuKTtcblxuY29uc3QgYmxhY2tCZWFuID0gbmV3IGZvb2RJdGVtKFxuICAgICdDaMOoIMSR4bqtdSDEkWVuIHRo4bqhY2ggdHLDom4gY2jDonUnLFxuICAgICdkZXNzZXJ0JyxcbiAgICAxLjUsXG4gICAgJ0JsYWNrIGJlYW5zIHN0ZXdlZCB3aXRoIHN1Z2FyIHdhdGVyLCB3aXRoIHBlYXJscywgYmxhY2sgamVsbHkuLi4nXG4pO1xuXG5jb25zdCBtZWF0QmFsbCA9IG5ldyBmb29kSXRlbShcbiAgICAnQsOhbmggbcOsIHjDrXUgbeG6oWknLFxuICAgICdzbmFjaycsXG4gICAgMixcbiAgICAnVmlldG5hbWVzZSBzYW5kd2ljaCB3aXRoIG1lYXQgYmFsbHMgaW4gdG9tYXRvIHNhdWNlJyxcblxuKTsgIFxuXG5jb25zdCBicm9rZW5SaWNlID0gbmV3IGZvb2RJdGVtKFxuICAgICdDxqFtIFThuqVtIFPDoGkgR8OybicsXG4gICAgJ21haW4nLFxuICAgIDMsXG4gICAgJ1RoZSBsZWdlbmRhcnkgYW5kIHRydWx5IFNhaWdvbiBicm9rZW4gcmljZSdcbik7XG5cbmNvbnN0IGJlYW5DdXJkID0gbmV3IGZvb2RJdGVtKFxuICAgICdUw6B1IGjhu6cgbnXhu5tjIMSRxrDhu51uZyBn4burbmcnLFxuICAgICdkZXNzZXJ0JyxcbiAgICAyLFxuICAgICdCZWFuIGN1cmQgaW4gZ2luZ2VyIGNhcmFtZWwgc2F1Y2UnXG4pO1xuXG5jb25zdCBzbmFrZWhlYWRGaXNoID0gbmV3IGZvb2RJdGVtKFxuICAgICdDw6EgbMOzYyBo4bqlcCBi4bqndScsXG4gICAgJ3NlYWZvb2QnLFxuICAgIDUsXG4gICAgJ1N0ZWFtZWQgc25ha2VoZWFkIGZpc2ggd2l0aCBjYWxhYmFzaCdcbik7XG5cbmNvbnN0IGdyaWxsZWRQYXduID0gbmV3IGZvb2RJdGVtKFxuICAgICdUw7RtIHPDuiBuxrDhu5tuZyBz4buRdCBuZ8OyIHhhbmgnLFxuICAgICdzZWFmb29kJyxcbiAgICA1LFxuICAgICdHcmlsbGVkIHBhd24gd2l0aCBncmVlbiBjb3JpYW5kZXIgc2F1Y2UnXG4pXG5cbmNvbnN0IGdyaWxsZWRCYW5hbmEgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0NodeG7kWkgYuG7jWMgbuG6v3Agbsaw4bubbmcnLFxuICAgICdkZXNzZXJ0JyxcbiAgICAyLFxuICAgICdHcmlsbGVkIGJhbmFuYSBpbiBzdGlja3kgcmljZSdcbilcblxuZXhwb3J0IHtcbiAgICBzYW5kd2ljaCwgXG4gICAgc291cCwgXG4gICAgZnJpZWRDaGlja2VuLCBcbiAgICBibGFja0JlYW4sIFxuICAgIG1lYXRCYWxsLCBcbiAgICBicm9rZW5SaWNlLCBcbiAgICBiZWFuQ3VyZCxcbiAgICBzbmFrZWhlYWRGaXNoLFxuICAgIGdyaWxsZWRQYXduLFxuICAgIGdyaWxsZWRCYW5hbmFcbn07IiwiaW1wb3J0IHtcbiAgICBzYW5kd2ljaCwgXG4gICAgc291cCwgXG4gICAgZnJpZWRDaGlja2VuLCBcbiAgICBibGFja0JlYW4sIFxuICAgIG1lYXRCYWxsLCBcbiAgICBicm9rZW5SaWNlLCBcbiAgICBiZWFuQ3VyZCxcbiAgICBzbmFrZWhlYWRGaXNoLFxuICAgIGdyaWxsZWRQYXduLFxuICAgIGdyaWxsZWRCYW5hbmFcbn0gZnJvbSAnLi9tZW51LWl0ZW1zJztcblxuXG52YXIgbWFpbkNvdXJzZUxpc3QgPSBbXSwgc25hY2tMaXN0ID0gW10sIGRlc3NlcnRMaXN0ID0gW10sIHNlYWZvb2RMaXN0ID0gW107IC8vIGltcGxlbWVudCBjYWNoaW5nXG5bXG4gICAgc2FuZHdpY2gsIFxuICAgIHNvdXAsIFxuICAgIGZyaWVkQ2hpY2tlbiwgXG4gICAgYmxhY2tCZWFuLCBcbiAgICBtZWF0QmFsbCwgXG4gICAgYnJva2VuUmljZSwgXG4gICAgYmVhbkN1cmQsXG4gICAgc25ha2VoZWFkRmlzaCxcbiAgICBncmlsbGVkUGF3bixcbiAgICBncmlsbGVkQmFuYW5hLFxuICAgIF0uZm9yRWFjaChpdGVtID0+IHtcbiAgICBsZXQgY2F0ZWdvcnkgPSBpdGVtLmNhdGVnb3J5O1xuICAgIGlmKGNhdGVnb3J5ID09ICdtYWluJykgbWFpbkNvdXJzZUxpc3QucHVzaChpdGVtKTtcbiAgICBlbHNlIGlmKGNhdGVnb3J5ID09ICdzbmFjaycpIHNuYWNrTGlzdC5wdXNoKGl0ZW0pO1xuICAgIGVsc2UgaWYoY2F0ZWdvcnkgPT0gJ2Rlc3NlcnQnKSBkZXNzZXJ0TGlzdC5wdXNoKGl0ZW0pO1xuICAgIGVsc2UgaWYoY2F0ZWdvcnkgPT0gJ3NlYWZvb2QnKSBzZWFmb29kTGlzdC5wdXNoKGl0ZW0pO1xufSlcbmZ1bmN0aW9uIGxvYWRNZW51KG1haW4pe1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdmb29kLW1lbnUnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgY29uc3QgbWFpbkNvdXJzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ291cnNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVfX21haW4tY291cnNlJyk7XG4gICAgbWFpbkNvdXJzZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncm91cCcpO1xuICAgIG1haW5Db3Vyc2VFbGVtZW50LnRleHRDb250ZW50ID0gJ01haW4nO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZUVsZW1lbnQpO1xuICAgIFxuICAgIGNvbnN0IGRlc3NlcnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzc2VydEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51X19kZXNzZXJ0Jyk7XG4gICAgZGVzc2VydEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncm91cCcpO1xuICAgIGRlc3NlcnRFbGVtZW50LnRleHRDb250ZW50ID0gJ0Rlc3NlcnQgICAnO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGVzc2VydEVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc25hY2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc25hY2tFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudV9fc25hY2snKTtcbiAgICBzbmFja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncm91cCcpO1xuICAgIHNuYWNrRWxlbWVudC50ZXh0Q29udGVudCA9ICdTbmFjayc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzbmFja0VsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2VhZm9vZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFmb29kRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVfX3NlYWZvb2QnKTtcbiAgICBzZWFmb29kRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWdyb3VwJyk7XG4gICAgc2VhZm9vZEVsZW1lbnQudGV4dENvbnRlbnQgPSAnU2VhZm9vZCc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzZWFmb29kRWxlbWVudCk7XG5cblxuICAgIG1haW5Db3Vyc2VMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIG1haW5Db3Vyc2VFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBzbmFja0xpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgc25hY2tFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBkZXNzZXJ0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBkZXNzZXJ0RWxlbWVudC5hcHBlbmRDaGlsZChsb2FkTWVudUl0ZW0oaXRlbSkpO1xuICAgIH0pOyBcblxuICAgIHNlYWZvb2RMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHNlYWZvb2RFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcmRlck5vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5uZXIudGV4dENvbnRlbnQgPSAnT1JERVIgTk9XICEhISc7XG4gICAgb3JkZXJOb3cuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIG9yZGVyTm93LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JkZXItbm93Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChvcmRlck5vdyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51SXRlbShvYmope1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2ROYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbV9fbmFtZScpO1xuICAgIGZvb2ROYW1lLmlubmVySFRNTCA9IGA8c3Bhbj4ke29iai5uYW1lfTwvc3Bhbj48c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj48c3Bhbj4kJHtvYmoucHJpY2V9PC9zcGFuPmA7XG5cbiAgICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtX19kZXNjcmlwdGlvbicpO1xuICAgIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5leHBvcnQge2xvYWRNZW51fTsiLCJmdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICBjb25zdCB1bm9yZGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHVub3JkZXJMaXN0KTtcblxuICAgIGNvbnN0IGJyYW5kbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYnJhbmRuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJyYW5kbmFtZScpO1xuICAgIGJyYW5kbmFtZS50ZXh0Q29udGVudCA9ICdNT1hVIEJJU1RSTyc7XG4gICAgdW5vcmRlckxpc3QuYXBwZW5kQ2hpbGQoYnJhbmRuYW1lKTtcblxuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVUYWIoJ2hvbWUnLCAnI2hvbWUnLCAnSG9tZScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVUYWIoJ2NvbnRhY3QnLCAnI2NvbnRhY3QnLCAnQ29udGFjdCcpO1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVUYWIoJ21lbnUnLCAnI21lbnUnLCAnTWVudScpO1xuXG4gICAgW2hvbWUsIG1lbnUsIGNvbnRhY3RdLmZvckVhY2goZSA9PiB1bm9yZGVyTGlzdC5hcHBlbmRDaGlsZChlKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYihpZCwgaHJlZiwgdGV4dENvbnRlbnQpe1xuICAgIGNvbnN0IGF0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYXRhZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGF0YWcuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZilcbiAgICBhdGFnLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChhdGFnKTtcbiAgICBcbiAgICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IHtjcmVhdGVOYXZ9OyIsImNsYXNzIHN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgYWRkcmVzcywgaW1nVVJMKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgdGhpcy5pbWdVUkwgPSBpbWdVUkw7XG4gICAgfVxufVxuXG5jb25zdCBMZUR1YW4wMSA9IG5ldyBzdG9yZShcbiAgICAnTW94dSBCaXN0cm8gLSBMZSBEdWFuJywgXG4gICAgJ1R3byBzZXBhcmF0ZWQgYXJlYXM6IGluZG9vciBhbmQgb3V0ZG9vci4gT2ZmZXJlZCBWaWV0bmFtZXNlIHNlYXNvbmFsIGZvb2QuIElkZWFsIGxvY2F0aW9uIGZvciBmb3JlaWduIHRvdXJpc3RzLiBPZmZpY2UgbHVuY2ggc2V0IGlzIHNlcnZlZCB3aXRoIHJpY2UsIG1haW4gZGlzaGVzLCBzb3VwIGFuZCBkZXNzZXJ0LicsXG4gICAgJzAxIExlIER1YW4gYmx2ZCwgRGlzdHJpY3QgMSwgSG8gQ2hpIE1pbmggY2l0eScsXG4gICAgJ2ltYWdlcy9jYXRlci15YW5nLmpwZydcbiAgICApXG5cbmNvbnN0IEhhbU5naGk3NyA9IG5ldyBzdG9yZShcbiAgICAnTW94dSBCaXN0cm8gLSBIYW0gTmdoaScsXG4gICAgJ1RoZSByZXN0YXVyYW50IHdpdGggbG90cyBvZiBzbWFsbCBvcGVuIHNwYWNlcyBzdXJyb3VuZGVkIGJ5IHRyb3BpY2FsIHRyZWVzLiBQZXJmZWN0IHNpdGUgZm9yIGNlcmVtb25pZXMsIG1lZXRpbmdzIGFuZCByb21hbnRpYyBldmVudHMnLFxuICAgICc3NyBIYW0gTmdoaSBzdHJlZXQsIERpc3RyaWN0IDEsIEhvIENoaSBNaW5oIGNpdHknLFxuICAgICdpbWFnZXMvbXVyYXQta2FyYWhhbi5qcGcnXG4pXG5cbmV4cG9ydCB7TGVEdWFuMDEsIEhhbU5naGk3N307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2xvYWRNYWlufSBmcm9tICcuL21vZHVsZXMvbWFpbi1sb2FkZXInO1xuaW1wb3J0IHsgY3JlYXRlTmF2IH0gZnJvbSAnLi9tb2R1bGVzL25hdic7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL21vZHVsZXMvZm9vdGVyJztcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5pbml0KCk7XG5mdW5jdGlvbiBpbml0KCl7XG4gICAgY3JlYXRlTmF2KCk7XG4gICAgY3JlYXRlTWFpbigpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xuICAgIGlmICghbG9jYXRpb24uaGFzaClcbiAgICB7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI21lbnUnO1xuICAgIH0gXG4gICAgbG9hZE1haW4oKTsgLy8gZ2V0IG1haW4gY29udGVudCBvbmNlIHRoZSBVUkkgZnJhZ21lbnQgaXMgc2V0XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBsb2FkTWFpbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=