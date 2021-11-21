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
    foodDescription.style.fontStyle = 'oblique';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUywrQ0FBK0MsVUFBVTs7QUFFcEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNMO0FBQ007QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBLElBQUksNkRBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFRLElBQUk7QUFDaEIsMENBQTBDLDBEQUFRO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWFpbi1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS1pdGVtcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9yZXN0YXVyYW50LXN0b3Jlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGVEdWFuMDEsIEhhbU5naGk3N30gZnJvbSAnLi9yZXN0YXVyYW50LXN0b3Jlcyc7XG5cbnZhciBzdG9yZUxpc3QgPSBbTGVEdWFuMDEsIEhhbU5naGk3N107XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KG1haW4pe1xuICAgIGNvbnN0IGNvbnRhY3RwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0cGFnZScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdHBhZ2UpO1xuXG4gICAgY29uc3QgdXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1cHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yZGVyLXRpdGxlJyk7XG4gICAgdXBwZXIudGV4dENvbnRlbnQgPSAnUkVTRVJWQVRJT04nO1xuICAgIGNvbnRhY3RwYWdlLmFwcGVuZENoaWxkKHVwcGVyKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29udGFjdHBhZ2UuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ2FsaWduLWl0ZW1zLWNlbnRlcicpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocm93KTtcblxuICAgIGNvbnN0IG5hbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02Jyk7XG4gICAgbmFtZUNvbHVtbi5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIiBjbGFzcz1cIm9yZGVyLWlucHV0LXN0eWxlXCI+YDtcbiAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbHVtbik7XG5cbiAgICBjb25zdCBwaG9uZU51bWJlckNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lTnVtYmVyQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02Jyk7XG4gICAgcGhvbmVOdW1iZXJDb2x1bW4uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgbnVtYmVyXCIgY2xhc3M9XCJvcmRlci1pbnB1dC1zdHlsZVwiPmA7XG4gICAgcm93LmFwcGVuZENoaWxkKHBob25lTnVtYmVyQ29sdW1uKTtcblxuICAgIGNvbnN0IHN0b3JlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RvcmVDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sLXNtLTgnKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoc3RvcmVDb2x1bW4pO1xuICAgIGNvbnN0IHN0b3JlU2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzdG9yZVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWlucHV0LXN0eWxlJyk7XG4gICAgc3RvcmVTZWxlY3Rvci5pbm5lckhUTUwgPSBzdG9yZUxpc3QubWFwKGl0ZW0gPT4gYDxvcHRpb24+JHtpdGVtLm5hbWV9PC9vcHRpb24+YCkuam9pbignJyk7XG4gICAgc3RvcmVDb2x1bW4uYXBwZW5kQ2hpbGQoc3RvcmVTZWxlY3Rvcik7XG4gICAgXG4gICAgY29uc3QgcXVhbnRpdHlDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBxdWFudGl0eUNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNCcpO1xuICAgIHF1YW50aXR5Q29sdW1uLmlubmVySFRNTD0gYDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiIGNsYXNzPVwib3JkZXItaW5wdXQtc3R5bGVcIj5gO1xuICAgIHJvdy5hcHBlbmRDaGlsZChxdWFudGl0eUNvbHVtbik7XG5cbiAgICBjb25zdCBkYXRlQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZUNvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpO1xuICAgIGRhdGVDb2x1bW4uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiREQvTU0vWVlZWVwiIGNsYXNzPVwib3JkZXItaW5wdXQtc3R5bGVcIj5gO1xuICAgIHJvdy5hcHBlbmRDaGlsZChkYXRlQ29sdW1uKTtcblxuICAgIGNvbnN0IHRpbWVDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lQ29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02Jyk7XG4gICAgdGltZUNvbHVtbi5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaW1lXCIgY2xhc3M9XCJvcmRlci1pbnB1dC1zdHlsZVwiPmA7XG4gICAgcm93LmFwcGVuZENoaWxkKHRpbWVDb2x1bW4pO1xuXG4gICAgY29uc3QgY29uZmlybWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybWVyLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ09ORklSTVwiIGlkPVwib3JkZXItY29uZmlybS1idG4tc3R5bGVcIj5gO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY29uZmlybWVyKTtcblxufSAgIFxuXG5leHBvcnQge2xvYWRDb250YWN0fTsiLCJmdW5jdGlvbiBsb2FkU29jaWFsQ29udGFpbmVyKCl7XG4gICAgY29uc3Qgc29jaWFsTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzb2NpYWxMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzb2NpYWxMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc29jaWFsLWxpc3QnKTtcbiAgICBzb2NpYWxOYXYuYXBwZW5kQ2hpbGQoc29jaWFsTGlzdCk7XG5cbiAgICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGdpdGh1Yi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktZ2l0aHViXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgIDxwYXRoIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTIgOC4wMTIgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIi8+XG4gIDwvc3ZnPmA7XG4gICAgc29jaWFsTGlzdC5hcHBlbmRDaGlsZChnaXRodWIpO1xuXG4gICAgY29uc3QgeW91dHViZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgeW91dHViZS5pbm5lckhUTUwgPSAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLXlvdXR1YmVcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgPHBhdGggZD1cIk04LjA1MSAxLjk5OWguMDg5Yy44MjIuMDAzIDQuOTg3LjAzMyA2LjExLjMzNWEyLjAxIDIuMDEgMCAwIDEgMS40MTUgMS40MmMuMTAxLjM4LjE3Mi44ODMuMjIgMS40MDJsLjAxLjEwNC4wMjIuMjYuMDA4LjEwNGMuMDY1LjkxNC4wNzMgMS43Ny4wNzQgMS45NTd2LjA3NWMtLjAwMS4xOTQtLjAxIDEuMTA4LS4wODIgMi4wNmwtLjAwOC4xMDUtLjAwOS4xMDRjLS4wNS41NzItLjEyNCAxLjE0LS4yMzUgMS41NThhMi4wMDcgMi4wMDcgMCAwIDEtMS40MTUgMS40MmMtMS4xNi4zMTItNS41NjkuMzM0LTYuMTguMzM1aC0uMTQyYy0uMzA5IDAtMS41ODctLjAwNi0yLjkyNy0uMDUybC0uMTctLjAwNi0uMDg3LS4wMDQtLjE3MS0uMDA3LS4xNzEtLjAwN2MtMS4xMS0uMDQ5LTIuMTY3LS4xMjgtMi42NTQtLjI2YTIuMDA3IDIuMDA3IDAgMCAxLTEuNDE1LTEuNDE5Yy0uMTExLS40MTctLjE4NS0uOTg2LS4yMzUtMS41NThMLjA5IDkuODJsLS4wMDgtLjEwNEEzMS40IDMxLjQgMCAwIDEgMCA3LjY4di0uMTIzYy4wMDItLjIxNS4wMS0uOTU4LjA2NC0xLjc3OGwuMDA3LS4xMDMuMDAzLS4wNTIuMDA4LS4xMDQuMDIyLS4yNi4wMS0uMTA0Yy4wNDgtLjUxOS4xMTktMS4wMjMuMjItMS40MDJhMi4wMDcgMi4wMDcgMCAwIDEgMS40MTUtMS40MmMuNDg3LS4xMyAxLjU0NC0uMjEgMi42NTQtLjI2bC4xNy0uMDA3LjE3Mi0uMDA2LjA4Ni0uMDAzLjE3MS0uMDA3QTk5Ljc4OCA5OS43ODggMCAwIDEgNy44NTggMmguMTkzek02LjQgNS4yMDl2NC44MThsNC4xNTctMi40MDhMNi40IDUuMjA5elwiLz5cbiAgPC9zdmc+YDtcbiAgICBzb2NpYWxMaXN0LmFwcGVuZENoaWxkKHlvdXR1YmUpO1xuXG4gICAgY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpbnN0YWdyYW0uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWluc3RhZ3JhbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICA8cGF0aCBkPVwiTTggMEM1LjgyOSAwIDUuNTU2LjAxIDQuNzAzLjA0OCAzLjg1LjA4OCAzLjI2OS4yMjIgMi43Ni40MmEzLjkxNyAzLjkxNyAwIDAgMC0xLjQxNy45MjNBMy45MjcgMy45MjcgMCAwIDAgLjQyIDIuNzZDLjIyMiAzLjI2OC4wODcgMy44NS4wNDggNC43LjAxIDUuNTU1IDAgNS44MjcgMCA4LjAwMWMwIDIuMTcyLjAxIDIuNDQ0LjA0OCAzLjI5Ny4wNC44NTIuMTc0IDEuNDMzLjM3MiAxLjk0Mi4yMDUuNTI2LjQ3OC45NzIuOTIzIDEuNDE3LjQ0NC40NDUuODkuNzE5IDEuNDE2LjkyMy41MS4xOTggMS4wOS4zMzMgMS45NDIuMzcyQzUuNTU1IDE1Ljk5IDUuODI3IDE2IDggMTZzMi40NDQtLjAxIDMuMjk4LS4wNDhjLjg1MS0uMDQgMS40MzQtLjE3NCAxLjk0My0uMzcyYTMuOTE2IDMuOTE2IDAgMCAwIDEuNDE2LS45MjNjLjQ0NS0uNDQ1LjcxOC0uODkxLjkyMy0xLjQxNy4xOTctLjUwOS4zMzItMS4wOS4zNzItMS45NDJDMTUuOTkgMTAuNDQ1IDE2IDEwLjE3MyAxNiA4cy0uMDEtMi40NDUtLjA0OC0zLjI5OWMtLjA0LS44NTEtLjE3NS0xLjQzMy0uMzcyLTEuOTQxYTMuOTI2IDMuOTI2IDAgMCAwLS45MjMtMS40MTdBMy45MTEgMy45MTEgMCAwIDAgMTMuMjQuNDJjLS41MS0uMTk4LTEuMDkyLS4zMzMtMS45NDMtLjM3MkMxMC40NDMuMDEgMTAuMTcyIDAgNy45OTggMGguMDAzem0tLjcxNyAxLjQ0MmguNzE4YzIuMTM2IDAgMi4zODkuMDA3IDMuMjMyLjA0Ni43OC4wMzUgMS4yMDQuMTY2IDEuNDg2LjI3NS4zNzMuMTQ1LjY0LjMxOS45Mi41OTkuMjguMjguNDUzLjU0Ni41OTguOTIuMTEuMjgxLjI0LjcwNS4yNzUgMS40ODUuMDM5Ljg0My4wNDcgMS4wOTYuMDQ3IDMuMjMxcy0uMDA4IDIuMzg5LS4wNDcgMy4yMzJjLS4wMzUuNzgtLjE2NiAxLjIwMy0uMjc1IDEuNDg1YTIuNDcgMi40NyAwIDAgMS0uNTk5LjkxOWMtLjI4LjI4LS41NDYuNDUzLS45Mi41OTgtLjI4LjExLS43MDQuMjQtMS40ODUuMjc2LS44NDMuMDM4LTEuMDk2LjA0Ny0zLjIzMi4wNDdzLTIuMzktLjAwOS0zLjIzMy0uMDQ3Yy0uNzgtLjAzNi0xLjIwMy0uMTY2LTEuNDg1LS4yNzZhMi40NzggMi40NzggMCAwIDEtLjkyLS41OTggMi40OCAyLjQ4IDAgMCAxLS42LS45MmMtLjEwOS0uMjgxLS4yNC0uNzA1LS4yNzUtMS40ODUtLjAzOC0uODQzLS4wNDYtMS4wOTYtLjA0Ni0zLjIzMyAwLTIuMTM2LjAwOC0yLjM4OC4wNDYtMy4yMzEuMDM2LS43OC4xNjYtMS4yMDQuMjc2LTEuNDg2LjE0NS0uMzczLjMxOS0uNjQuNTk5LS45Mi4yOC0uMjguNTQ2LS40NTMuOTItLjU5OC4yODItLjExLjcwNS0uMjQgMS40ODUtLjI3Ni43MzgtLjAzNCAxLjAyNC0uMDQ0IDIuNTE1LS4wNDV2LjAwMnptNC45ODggMS4zMjhhLjk2Ljk2IDAgMSAwIDAgMS45Mi45Ni45NiAwIDAgMCAwLTEuOTJ6bS00LjI3IDEuMTIyYTQuMTA5IDQuMTA5IDAgMSAwIDAgOC4yMTcgNC4xMDkgNC4xMDkgMCAwIDAgMC04LjIxN3ptMCAxLjQ0MWEyLjY2NyAyLjY2NyAwIDEgMSAwIDUuMzM0IDIuNjY3IDIuNjY3IDAgMCAxIDAtNS4zMzR6XCIvPlxuICA8L3N2Zz5gO1xuICAgIHNvY2lhbExpc3QuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKTtcblxuICAgIHJldHVybiBzb2NpYWxOYXY7XG59XG5cbmZ1bmN0aW9uIGxvYWRGQVFDb250YWluZXIoKXtcbiAgICBjb25zdCBmYXEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmYXEuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXJfX2ZhcScpO1xuXG4gICAgY29uc3QgY2FyZWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZWVyLnRleHRDb250ZW50ID0gJ0NhcmVlcic7XG4gICAgZmFxLmFwcGVuZENoaWxkKGNhcmVlcik7XG5cbiAgICBjb25zdCBwcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXNzLnRleHRDb250ZW50ID0gJ1ByZXNzJztcbiAgICBmYXEuYXBwZW5kQ2hpbGQocHJlc3MpO1xuXG4gICAgY29uc3QgbmV3c2xldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld3NsZXR0ZXIudGV4dENvbnRlbnQgPSAnTmV3c2xldHRlcic7XG4gICAgZmFxLmFwcGVuZENoaWxkKG5ld3NsZXR0ZXIpO1xuXG4gICAgcmV0dXJuIGZhcTtcbn1cblxuZnVuY3Rpb24gbG9hZEFsbFJpZ2h0c1Jlc2VydmVkKCl7XG4gICAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGQuc3R5bGUuZm9udFNpemUgPSAnLjVlbSc7XG4gICAgZC5pbm5lckhUTUwgPSBgPGRpdj5AIENvcHlyaWdodC4gQWxsIHJpZ2h0cyByZXNlcnZlZDwvZGl2PmA7XG4gICAgcmV0dXJuIGQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsb2FkRkFRQ29udGFpbmVyKCkpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsb2FkQWxsUmlnaHRzUmVzZXJ2ZWQoKSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxvYWRTb2NpYWxDb250YWluZXIoKSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlRm9vdGVyfTsiLCJmdW5jdGlvbiBsb2FkSG9tZShtYWluKXtcblxuICAgIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZXBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdob21lcGFnZScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpO1xuXG4gICAgY29uc3QgaG9tZXBhZ2VOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZXBhZ2VOb3RlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXBhZ2VfX25vdGUnKTtcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChob21lcGFnZU5vdGUpO1xuXG4gICAgY29uc3QgZXN0YWJsaXNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlc3RhYmxpc2hlZC50ZXh0Q29udGVudCA9ICdFU1QuIDIwMDknO1xuICAgIGhvbWVwYWdlTm90ZS5hcHBlbmRDaGlsZChlc3RhYmxpc2hlZCk7ICAgICBcblxuICAgIGNvbnN0IGhvbWVwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lcGFnZVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXBhZ2VfX3RpdGxlJyk7XG4gICAgaG9tZXBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdNT1hVIEJJU1RSTyc7XG4gICAgaG9tZXBhZ2VOb3RlLmFwcGVuZENoaWxkKGhvbWVwYWdlVGl0bGUpO1xuICAgIFxuICAgIGNvbnN0IGhvbWVwYWdlU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lcGFnZVN1YnRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXBhZ2VfX3N1YnRpdGxlJyk7XG4gICAgaG9tZXBhZ2VTdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdBVVRIRU5USUMgVklFVE5BTUVTRSBDVUlTSU5FJztcbiAgICBob21lcGFnZU5vdGUuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VTdWJ0aXRsZSk7XG59XG5cbmV4cG9ydCB7bG9hZEhvbWV9OyIsIlxuaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi9tZW51JztcblxuZnVuY3Rpb24gbG9hZE1haW4oKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGZyYWdtZW50SUQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cigxKTsgLy8gbWVudSBvciBjb250YWN0IG9yIGhvbWVcbiAgICBzd2l0Y2ggKGZyYWdtZW50SUQpe1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGxvYWRIb21lKG1haW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgbG9hZE1lbnUobWFpbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBsb2FkQ29udGFjdChtYWluKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SICEhIScpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtsb2FkTWFpbn07XG5cblxuXG5cblxuIiwiY2xhc3MgZm9vZEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNhdGVnb3J5LCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmNvbnN0IHNhbmR3aWNoID0gbmV3IGZvb2RJdGVtKFxuICAgICdCw6FuaCBtw6wgcGF0ZScsIFxuICAgICdzbmFjaycsIFxuICAgIDEsIFxuICAgICdGYW1vdXMgVmlldG5hbWVzZSBzYW5kd2ljaCB3aXRoIGxpdmVyIHBhdGUsIGNpbGFudHJvIGFuZCBoYW0nXG4gICAgKTtcblxuY29uc3Qgc291cCA9IG5ldyBmb29kSXRlbShcbiAgICAnUGjhu58nLFxuICAgICdtYWluJyxcbiAgICA0LFxuICAgICdCZWVmIG5vb2RsZSBzb3VwLCBzbGljZWQgYmVlZiB3aXRoIGhlcmJzJ1xuKTtcblxuY29uc3QgZnJpZWRDaGlja2VuID0gbmV3IGZvb2RJdGVtKFxuICAgICdDxqFtIGfDoCB44buRaSBt4buhJyxcbiAgICAnbWFpbicsXG4gICAgNCxcbiAgICAnQ3Jpc3B5IGZyaWVkIGNoaWNrZW4gb24gYSBiZWQgb2YgY29sb3JmdWwgZnJpZWQgcmljZSdcbik7XG5cbmNvbnN0IGJsYWNrQmVhbiA9IG5ldyBmb29kSXRlbShcbiAgICAnQ2jDqCDEkeG6rXUgxJFlbiB0aOG6oWNoIHRyw6JuIGNow6J1JyxcbiAgICAnZGVzc2VydCcsXG4gICAgMS41LFxuICAgICdCbGFjayBiZWFucyBzdGV3ZWQgd2l0aCBzdWdhciB3YXRlciwgd2l0aCBwZWFybHMsIGJsYWNrIGplbGx5Li4uJ1xuKTtcblxuY29uc3QgbWVhdEJhbGwgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0LDoW5oIG3DrCB4w611IG3huqFpJyxcbiAgICAnc25hY2snLFxuICAgIDIsXG4gICAgJ1ZpZXRuYW1lc2Ugc2FuZHdpY2ggd2l0aCBtZWF0IGJhbGxzIGluIHRvbWF0byBzYXVjZScsXG5cbik7ICBcblxuY29uc3QgYnJva2VuUmljZSA9IG5ldyBmb29kSXRlbShcbiAgICAnQ8ahbSBU4bqlbSBTw6BpIEfDsm4nLFxuICAgICdtYWluJyxcbiAgICAzLFxuICAgICdUaGUgbGVnZW5kYXJ5IGFuZCB0cnVseSBTYWlnb24gYnJva2VuIHJpY2UnXG4pO1xuXG5jb25zdCBiZWFuQ3VyZCA9IG5ldyBmb29kSXRlbShcbiAgICAnVMOgdSBo4bunIG514bubYyDEkcaw4budbmcgZ+G7q25nJyxcbiAgICAnZGVzc2VydCcsXG4gICAgMixcbiAgICAnQmVhbiBjdXJkIGluIGdpbmdlciBjYXJhbWVsIHNhdWNlJ1xuKTtcblxuY29uc3Qgc25ha2VoZWFkRmlzaCA9IG5ldyBmb29kSXRlbShcbiAgICAnQ8OhIGzDs2MgaOG6pXAgYuG6p3UnLFxuICAgICdzZWFmb29kJyxcbiAgICA1LFxuICAgICdTdGVhbWVkIHNuYWtlaGVhZCBmaXNoIHdpdGggY2FsYWJhc2gnXG4pO1xuXG5jb25zdCBncmlsbGVkUGF3biA9IG5ldyBmb29kSXRlbShcbiAgICAnVMO0bSBzw7ogbsaw4bubbmcgc+G7kXQgbmfDsiB4YW5oJyxcbiAgICAnc2VhZm9vZCcsXG4gICAgNSxcbiAgICAnR3JpbGxlZCBwYXduIHdpdGggZ3JlZW4gY29yaWFuZGVyIHNhdWNlJ1xuKVxuXG5jb25zdCBncmlsbGVkQmFuYW5hID0gbmV3IGZvb2RJdGVtKFxuICAgICdDaHXhu5FpIGLhu41jIG7hur9wIG7GsOG7m25nJyxcbiAgICAnZGVzc2VydCcsXG4gICAgMixcbiAgICAnR3JpbGxlZCBiYW5hbmEgaW4gc3RpY2t5IHJpY2UnXG4pXG5cbmV4cG9ydCB7XG4gICAgc2FuZHdpY2gsIFxuICAgIHNvdXAsIFxuICAgIGZyaWVkQ2hpY2tlbiwgXG4gICAgYmxhY2tCZWFuLCBcbiAgICBtZWF0QmFsbCwgXG4gICAgYnJva2VuUmljZSwgXG4gICAgYmVhbkN1cmQsXG4gICAgc25ha2VoZWFkRmlzaCxcbiAgICBncmlsbGVkUGF3bixcbiAgICBncmlsbGVkQmFuYW5hXG59OyIsImltcG9ydCB7XG4gICAgc2FuZHdpY2gsIFxuICAgIHNvdXAsIFxuICAgIGZyaWVkQ2hpY2tlbiwgXG4gICAgYmxhY2tCZWFuLCBcbiAgICBtZWF0QmFsbCwgXG4gICAgYnJva2VuUmljZSwgXG4gICAgYmVhbkN1cmQsXG4gICAgc25ha2VoZWFkRmlzaCxcbiAgICBncmlsbGVkUGF3bixcbiAgICBncmlsbGVkQmFuYW5hXG59IGZyb20gJy4vbWVudS1pdGVtcyc7XG5cblxudmFyIG1haW5Db3Vyc2VMaXN0ID0gW10sIHNuYWNrTGlzdCA9IFtdLCBkZXNzZXJ0TGlzdCA9IFtdLCBzZWFmb29kTGlzdCA9IFtdOyAvLyBpbXBsZW1lbnQgY2FjaGluZ1xuW1xuICAgIHNhbmR3aWNoLCBcbiAgICBzb3VwLCBcbiAgICBmcmllZENoaWNrZW4sIFxuICAgIGJsYWNrQmVhbiwgXG4gICAgbWVhdEJhbGwsIFxuICAgIGJyb2tlblJpY2UsIFxuICAgIGJlYW5DdXJkLFxuICAgIHNuYWtlaGVhZEZpc2gsXG4gICAgZ3JpbGxlZFBhd24sXG4gICAgZ3JpbGxlZEJhbmFuYSxcbiAgICBdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5ID0gaXRlbS5jYXRlZ29yeTtcbiAgICBpZihjYXRlZ29yeSA9PSAnbWFpbicpIG1haW5Db3Vyc2VMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnc25hY2snKSBzbmFja0xpc3QucHVzaChpdGVtKTtcbiAgICBlbHNlIGlmKGNhdGVnb3J5ID09ICdkZXNzZXJ0JykgZGVzc2VydExpc3QucHVzaChpdGVtKTtcbiAgICBlbHNlIGlmKGNhdGVnb3J5ID09ICdzZWFmb29kJykgc2VhZm9vZExpc3QucHVzaChpdGVtKTtcbn0pXG5mdW5jdGlvbiBsb2FkTWVudShtYWluKXtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vZC1tZW51Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGNvbnN0IG1haW5Db3Vyc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvdXJzZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51X19tYWluLWNvdXJzZScpO1xuICAgIG1haW5Db3Vyc2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JvdXAnKTtcbiAgICBtYWluQ291cnNlRWxlbWVudC50ZXh0Q29udGVudCA9ICdNYWluJztcbiAgICBtZW51LmFwcGVuZENoaWxkKG1haW5Db3Vyc2VFbGVtZW50KTtcbiAgICBcbiAgICBjb25zdCBkZXNzZXJ0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc3NlcnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudV9fZGVzc2VydCcpO1xuICAgIGRlc3NlcnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JvdXAnKTtcbiAgICBkZXNzZXJ0RWxlbWVudC50ZXh0Q29udGVudCA9ICdEZXNzZXJ0ICAgJztcbiAgICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnRFbGVtZW50KTtcblxuICAgIGNvbnN0IHNuYWNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNuYWNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVfX3NuYWNrJyk7XG4gICAgc25hY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JvdXAnKTtcbiAgICBzbmFja0VsZW1lbnQudGV4dENvbnRlbnQgPSAnU25hY2snO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc25hY2tFbGVtZW50KTtcblxuICAgIGNvbnN0IHNlYWZvb2RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhZm9vZEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51X19zZWFmb29kJyk7XG4gICAgc2VhZm9vZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncm91cCcpO1xuICAgIHNlYWZvb2RFbGVtZW50LnRleHRDb250ZW50ID0gJ1NlYWZvb2QnO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2VhZm9vZEVsZW1lbnQpO1xuXG5cbiAgICBtYWluQ291cnNlTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBtYWluQ291cnNlRWxlbWVudC5hcHBlbmRDaGlsZChsb2FkTWVudUl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuXG4gICAgc25hY2tMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHNuYWNrRWxlbWVudC5hcHBlbmRDaGlsZChsb2FkTWVudUl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuXG4gICAgZGVzc2VydExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgZGVzc2VydEVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTsgXG5cbiAgICBzZWFmb29kTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBzZWFmb29kRWxlbWVudC5hcHBlbmRDaGlsZChsb2FkTWVudUl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3JkZXJOb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyLnRleHRDb250ZW50ID0gJ09SREVSIE5PVyAhISEnO1xuICAgIG9yZGVyTm93LmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICBvcmRlck5vdy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yZGVyLW5vdycpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQob3JkZXJOb3cpO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudUl0ZW0ob2JqKXtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kTmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW1fX25hbWUnKTtcbiAgICBmb29kTmFtZS5pbm5lckhUTUwgPSBgPHNwYW4+JHtvYmoubmFtZX08L3NwYW4+PHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj48L3NwYW4+PHNwYW4+JCR7b2JqLnByaWNlfTwvc3Bhbj5gO1xuXG4gICAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbV9fZGVzY3JpcHRpb24nKTtcbiAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG4gICAgZm9vZERlc2NyaXB0aW9uLnN0eWxlLmZvbnRTdHlsZSA9ICdvYmxpcXVlJztcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5leHBvcnQge2xvYWRNZW51fTsiLCJmdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICBjb25zdCB1bm9yZGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHVub3JkZXJMaXN0KTtcblxuICAgIGNvbnN0IGJyYW5kbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYnJhbmRuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJyYW5kbmFtZScpO1xuICAgIGJyYW5kbmFtZS50ZXh0Q29udGVudCA9ICdNT1hVIEJJU1RSTyc7XG4gICAgdW5vcmRlckxpc3QuYXBwZW5kQ2hpbGQoYnJhbmRuYW1lKTtcblxuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVUYWIoJ2hvbWUnLCAnI2hvbWUnLCAnSG9tZScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVUYWIoJ2NvbnRhY3QnLCAnI2NvbnRhY3QnLCAnQ29udGFjdCcpO1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVUYWIoJ21lbnUnLCAnI21lbnUnLCAnTWVudScpO1xuXG4gICAgW2hvbWUsIG1lbnUsIGNvbnRhY3RdLmZvckVhY2goZSA9PiB1bm9yZGVyTGlzdC5hcHBlbmRDaGlsZChlKSk7XG5cbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSBuYXZCYXIub2Zmc2V0VG9wKXtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gbmF2QmFyLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZml4ZWQtbmF2Jyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQtbmF2Jyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWIoaWQsIGhyZWYsIHRleHRDb250ZW50KXtcbiAgICBjb25zdCBhdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGF0YWcuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBhdGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpXG4gICAgYXRhZy50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYXRhZyk7XG4gICAgXG4gICAgcmV0dXJuIGRpdjtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlTmF2fTsiLCJjbGFzcyBzdG9yZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGFkZHJlc3MsIGltZ1VSTCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIHRoaXMuaW1nVVJMID0gaW1nVVJMO1xuICAgIH1cbn1cblxuY29uc3QgTGVEdWFuMDEgPSBuZXcgc3RvcmUoXG4gICAgJ01veHUgQmlzdHJvIC0gTGUgRHVhbicsIFxuICAgICdUd28gc2VwYXJhdGVkIGFyZWFzOiBpbmRvb3IgYW5kIG91dGRvb3IuIE9mZmVyZWQgVmlldG5hbWVzZSBzZWFzb25hbCBmb29kLiBJZGVhbCBsb2NhdGlvbiBmb3IgZm9yZWlnbiB0b3VyaXN0cy4gT2ZmaWNlIGx1bmNoIHNldCBpcyBzZXJ2ZWQgd2l0aCByaWNlLCBtYWluIGRpc2hlcywgc291cCBhbmQgZGVzc2VydC4nLFxuICAgICcwMSBMZSBEdWFuIGJsdmQsIERpc3RyaWN0IDEsIEhvIENoaSBNaW5oIGNpdHknLFxuICAgICdpbWFnZXMvY2F0ZXIteWFuZy5qcGcnXG4gICAgKVxuXG5jb25zdCBIYW1OZ2hpNzcgPSBuZXcgc3RvcmUoXG4gICAgJ01veHUgQmlzdHJvIC0gSGFtIE5naGknLFxuICAgICdUaGUgcmVzdGF1cmFudCB3aXRoIGxvdHMgb2Ygc21hbGwgb3BlbiBzcGFjZXMgc3Vycm91bmRlZCBieSB0cm9waWNhbCB0cmVlcy4gUGVyZmVjdCBzaXRlIGZvciBjZXJlbW9uaWVzLCBtZWV0aW5ncyBhbmQgcm9tYW50aWMgZXZlbnRzJyxcbiAgICAnNzcgSGFtIE5naGkgc3RyZWV0LCBEaXN0cmljdCAxLCBIbyBDaGkgTWluaCBjaXR5JyxcbiAgICAnaW1hZ2VzL211cmF0LWthcmFoYW4uanBnJ1xuKVxuXG5leHBvcnQge0xlRHVhbjAxLCBIYW1OZ2hpNzd9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtsb2FkTWFpbn0gZnJvbSAnLi9tb2R1bGVzL21haW4tbG9hZGVyJztcbmltcG9ydCB7IGNyZWF0ZU5hdiB9IGZyb20gJy4vbW9kdWxlcy9uYXYnO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuaW5pdCgpO1xuZnVuY3Rpb24gaW5pdCgpe1xuICAgIGNyZWF0ZU5hdigpO1xuICAgIGNyZWF0ZU1haW4oKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbiAgICBpZiAoIWxvY2F0aW9uLmhhc2gpXG4gICAge1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNtZW51JztcbiAgICB9IFxuICAgIGxvYWRNYWluKCk7IC8vIGdldCBtYWluIGNvbnRlbnQgb25jZSB0aGUgVVJJIGZyYWdtZW50IGlzIHNldFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgbG9hZE1haW4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9