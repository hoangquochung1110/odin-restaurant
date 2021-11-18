/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/element-initializer.js":
/*!********************************************!*\
  !*** ./src/modules/element-initializer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
const content = document.querySelector('#content');

function createTab(id, href, textContent){
    const tab = document.createElement('a');
    tab.setAttribute('id', id);
    tab.setAttribute('href', href)
    tab.textContent = textContent;
    return tab;
};

function createNav(){
    const navBar = document.createElement('nav');
    content.appendChild(navBar);

    const brandname = document.createElement('div');
    brandname.setAttribute('id', 'nav-brandname');
    brandname.textContent = 'MOXU';
    navBar.appendChild(brandname);

    const home = createTab('home', '#home', 'Home');
    const contact = createTab('contact', '#contact', 'Contact');
    const menu = createTab('menu', '#menu', 'Menu');

    [home, menu, contact].forEach(e => navBar.appendChild(e));
}

function createMain(){
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    content.appendChild(main);
}

function createFooter(){
    const footer = document.createElement('footer');
    content.appendChild(footer);
}



/***/ }),

/***/ "./src/modules/element-loader.js":
/*!***************************************!*\
  !*** ./src/modules/element-loader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMain": () => (/* binding */ loadMain)
/* harmony export */ });
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ "./src/modules/menu-items.js");
/* harmony import */ var _restaurant_stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-stores */ "./src/modules/restaurant-stores.js");



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
    brandName.innerText = 'MOXU BISTRO';

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

    const subBox = document.createElement('div');
    subBox.setAttribute('id', 'restaurant-contact__sb');
    contact.appendChild(subBox);

    const mealAtMoxu = document.createElement('h2');
    mealAtMoxu.textContent = 'A meal at Moxu Bistro';
    mealAtMoxu.style.textAlign = 'center';
    subBox.appendChild(mealAtMoxu);

    const moxuOffer = document.createElement('p');
    moxuOffer.textContent = `The offers here start with the décor – retro and elegant, making you temporarily forget the urban chaos out there. 
        Our food complements that with the scents, the colors, and the presentation! 
        You would want more and more for all the right reasons!`
    moxuOffer.style.textAlign = 'center';
    subBox.appendChild(moxuOffer);

    const storeBox = document.createElement('div');
    storeBox.setAttribute('id', 'store-fl-box');
    contact.appendChild(storeBox);

    storeBox.appendChild(loadStore(_restaurant_stores__WEBPACK_IMPORTED_MODULE_1__.LeDuan01));
    storeBox.appendChild(loadStore(_restaurant_stores__WEBPACK_IMPORTED_MODULE_1__.HamNghi77));
    
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

function loadMenuItem(obj){
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

function loadStore(obj){

    const store = document.createElement('div');
    store.classList.add('store-fl-box-item');

    const storeImg = document.createElement('img');
    storeImg.src = obj.imgURL;  
    storeImg.style.height = '15em';
    storeImg.style.width = '100%';  
    store.appendChild(storeImg);
    
    const storeName = document.createElement('h2');
    storeName.textContent = `${obj.name}`;
    store.appendChild(storeName);   

    const storeDescrption = document.createElement('h4');
    storeDescrption.textContent = `${obj.description}`;
    storeDescrption.style.fontWeight = 'lighter';
    store.appendChild(storeDescrption);

    const storeAddress = document.createElement('h4');
    storeAddress.textContent = `${obj.address}`;
    store.appendChild(storeAddress);

    return store;
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
    'Chè đậu đen thạch chân trâu',
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
/* harmony import */ var _modules_element_initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/element-initializer */ "./src/modules/element-initializer.js");
/* harmony import */ var _modules_element_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/element-loader */ "./src/modules/element-loader.js");




init();
function init(){
    (0,_modules_element_initializer__WEBPACK_IMPORTED_MODULE_0__.createNav)();
    (0,_modules_element_initializer__WEBPACK_IMPORTED_MODULE_0__.createMain)();
    //createFooter();
    if (!location.hash)
    {
        location.hash = '#menu';
    } 
    (0,_modules_element_loader__WEBPACK_IMPORTED_MODULE_1__.loadMain)(); // get main content once the URI fragment is set
    window.addEventListener('hashchange', _modules_element_loader__WEBPACK_IMPORTED_MODULE_1__.loadMain);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCc0I7QUFDbUM7O0FBRXpELDZFQUE2RTtBQUM3RTtBQUNBLElBQUksaURBQVE7QUFDWixJQUFJLDZDQUFJO0FBQ1IsSUFBSSxxREFBWTtBQUNoQixJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBUTtBQUNaLElBQUksbURBQVU7QUFDZCxJQUFJLGlEQUFRO0FBQ1osSUFBSSxzREFBYTtBQUNqQixJQUFJLG9EQUFXO0FBQ2YsSUFBSSxzREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyx3REFBUTtBQUMzQyxtQ0FBbUMseURBQVM7QUFDNUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsK0NBQStDLFVBQVU7O0FBRXBHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDOztBQUVBO0FBQ0EscUNBQXFDLGdCQUFnQjtBQUNyRDtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFlBQVk7QUFDOUM7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rRjtBQUNoQzs7O0FBR2xEO0FBQ0E7QUFDQSxJQUFJLHVFQUFTO0FBQ2IsSUFBSSx3RUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFRLElBQUk7QUFDaEIsMENBQTBDLDZEQUFRO0FBQ2xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZWxlbWVudC1pbml0aWFsaXplci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9lbGVtZW50LWxvYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LWl0ZW1zLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3Jlc3RhdXJhbnQtc3RvcmVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFiKGlkLCBocmVmLCB0ZXh0Q29udGVudCl7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKVxuICAgIHRhYi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHJldHVybiB0YWI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICBjb25zdCBicmFuZG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBicmFuZG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICduYXYtYnJhbmRuYW1lJyk7XG4gICAgYnJhbmRuYW1lLnRleHRDb250ZW50ID0gJ01PWFUnO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChicmFuZG5hbWUpO1xuXG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZVRhYignaG9tZScsICcjaG9tZScsICdIb21lJyk7XG4gICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZVRhYignY29udGFjdCcsICcjY29udGFjdCcsICdDb250YWN0Jyk7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZVRhYignbWVudScsICcjbWVudScsICdNZW51Jyk7XG5cbiAgICBbaG9tZSwgbWVudSwgY29udGFjdF0uZm9yRWFjaChlID0+IG5hdkJhci5hcHBlbmRDaGlsZChlKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQge2NyZWF0ZU5hdiwgY3JlYXRlTWFpbiwgY3JlYXRlRm9vdGVyfTsiLCJpbXBvcnQge1xuICAgIHNhbmR3aWNoLCBcbiAgICBzb3VwLCBcbiAgICBmcmllZENoaWNrZW4sIFxuICAgIGJsYWNrQmVhbiwgXG4gICAgbWVhdEJhbGwsIFxuICAgIGJyb2tlblJpY2UsIFxuICAgIGJlYW5DdXJkLFxuICAgIHNuYWtlaGVhZEZpc2gsXG4gICAgZ3JpbGxlZFBhd24sXG4gICAgZ3JpbGxlZEJhbmFuYVxufSBmcm9tICcuL21lbnUtaXRlbXMnO1xuaW1wb3J0IHsgTGVEdWFuMDEsIEhhbU5naGk3N30gZnJvbSAnLi9yZXN0YXVyYW50LXN0b3Jlcyc7XG5cbnZhciBtYWluQ291cnNlTGlzdCA9IFtdLCBzbmFja0xpc3QgPSBbXSwgZGVzc2VydExpc3QgPSBbXSwgc2VhZm9vZExpc3QgPSBbXTsgLy8gaW1wbGVtZW50IGNhY2hpbmdcbltcbiAgICBzYW5kd2ljaCwgXG4gICAgc291cCwgXG4gICAgZnJpZWRDaGlja2VuLCBcbiAgICBibGFja0JlYW4sIFxuICAgIG1lYXRCYWxsLCBcbiAgICBicm9rZW5SaWNlLCBcbiAgICBiZWFuQ3VyZCxcbiAgICBzbmFrZWhlYWRGaXNoLFxuICAgIGdyaWxsZWRQYXduLFxuICAgIGdyaWxsZWRCYW5hbmEsXG4gICAgXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGxldCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgaWYoY2F0ZWdvcnkgPT0gJ21haW4nKSBtYWluQ291cnNlTGlzdC5wdXNoKGl0ZW0pO1xuICAgIGVsc2UgaWYoY2F0ZWdvcnkgPT0gJ3NuYWNrJykgc25hY2tMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnZGVzc2VydCcpIGRlc3NlcnRMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnc2VhZm9vZCcpIHNlYWZvb2RMaXN0LnB1c2goaXRlbSk7XG59KVxuXG5mdW5jdGlvbiBsb2FkTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZnJhZ21lbnRJRCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpOyAvLyBtZW51IG9yIGNvbnRhY3Qgb3IgaG9tZVxuICAgIHN3aXRjaCAoZnJhZ21lbnRJRCl7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgbG9hZEhvbWUobWFpbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBsb2FkTWVudShtYWluKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgIGxvYWRDb250YWN0KG1haW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgISEhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZShtYWluKXtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudF9fdGl0bGUnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZpZXRuYW0tZmxhZycpO1xuICAgIGltZy5zcmMgPSAnaW1hZ2VzL3ZpZXRuYW0ucG5nJztcblxuICAgIGNvbnN0IGJyYW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgYnJhbmROYW1lLmlubmVyVGV4dCA9ICdNT1hVIEJJU1RSTyc7XG5cbiAgICB0aXRsZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKGJyYW5kTmFtZSk7XG5cbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YlRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudF9fc3VidGl0bGUnKTtcbiAgICBzdWJUaXRsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgVmlldG5hbWVzZSBDdWlzaW5lIEFsaXF1YW0gdmFyaXVzIHRlbXB1cyBlc3QsIHF1aXMgZWxlbWVudHVtIG1hZ25hIGNvbmd1ZSB2ZWwuIFxuICAgICAgICBTZWQgY29uZGltZW50dW0gbnVsbGEgbWV0dXMsIHZpdGFlIGx1Y3R1cyBwdXJ1cyBydXRydW0gYS4gXG4gICAgICAgIENyYXMgdGluY2lkdW50IGxpZ3VsYSB1cm5hLiBNYXVyaXMgbWF0dGlzIG1hc3NhIG5vbiBlbmltIG9ybmFyZSBsdWN0dXMuIFxuICAgICAgICBQcm9pbiBxdWlzIHNlbSBuaXNpLiBOYW0gcHVsdmluYXIgdG9ydG9yIHJpc3VzLCBlZ2V0IHRlbXB1cyBzYXBpZW4gY29uc2VxdWF0IG1hdHRpcy4gXG4gICAgYFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KG1haW4pe1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1jb250YWN0Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGNvbnN0IHN1YkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YkJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3RhdXJhbnQtY29udGFjdF9fc2InKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHN1YkJveCk7XG5cbiAgICBjb25zdCBtZWFsQXRNb3h1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZWFsQXRNb3h1LnRleHRDb250ZW50ID0gJ0EgbWVhbCBhdCBNb3h1IEJpc3Rybyc7XG4gICAgbWVhbEF0TW94dS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBzdWJCb3guYXBwZW5kQ2hpbGQobWVhbEF0TW94dSk7XG5cbiAgICBjb25zdCBtb3h1T2ZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbW94dU9mZmVyLnRleHRDb250ZW50ID0gYFRoZSBvZmZlcnMgaGVyZSBzdGFydCB3aXRoIHRoZSBkw6ljb3Ig4oCTIHJldHJvIGFuZCBlbGVnYW50LCBtYWtpbmcgeW91IHRlbXBvcmFyaWx5IGZvcmdldCB0aGUgdXJiYW4gY2hhb3Mgb3V0IHRoZXJlLiBcbiAgICAgICAgT3VyIGZvb2QgY29tcGxlbWVudHMgdGhhdCB3aXRoIHRoZSBzY2VudHMsIHRoZSBjb2xvcnMsIGFuZCB0aGUgcHJlc2VudGF0aW9uISBcbiAgICAgICAgWW91IHdvdWxkIHdhbnQgbW9yZSBhbmQgbW9yZSBmb3IgYWxsIHRoZSByaWdodCByZWFzb25zIWBcbiAgICBtb3h1T2ZmZXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgc3ViQm94LmFwcGVuZENoaWxkKG1veHVPZmZlcik7XG5cbiAgICBjb25zdCBzdG9yZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3JlQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RvcmUtZmwtYm94Jyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChzdG9yZUJveCk7XG5cbiAgICBzdG9yZUJveC5hcHBlbmRDaGlsZChsb2FkU3RvcmUoTGVEdWFuMDEpKTtcbiAgICBzdG9yZUJveC5hcHBlbmRDaGlsZChsb2FkU3RvcmUoSGFtTmdoaTc3KSk7XG4gICAgXG59ICAgXG5cbmZ1bmN0aW9uIGxvYWRNZW51KG1haW4pe1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdmb29kLW1lbnUnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgY29uc3QgbWFpbkNvdXJzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ291cnNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVfX21haW4tY291cnNlJyk7XG4gICAgbWFpbkNvdXJzZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncm91cCcpO1xuICAgIG1haW5Db3Vyc2VFbGVtZW50LnRleHRDb250ZW50ID0gJ01haW4nO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZUVsZW1lbnQpO1xuICAgIFxuICAgIGNvbnN0IGRlc3NlcnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzc2VydEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51X19kZXNzZXJ0Jyk7XG4gICAgZGVzc2VydEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncm91cCcpO1xuICAgIGRlc3NlcnRFbGVtZW50LnRleHRDb250ZW50ID0gJ0Rlc3NlcnQgICAnO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGVzc2VydEVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc25hY2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc25hY2tFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudV9fc25hY2snKTtcbiAgICBzbmFja0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncm91cCcpO1xuICAgIHNuYWNrRWxlbWVudC50ZXh0Q29udGVudCA9ICdTbmFjayc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzbmFja0VsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2VhZm9vZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFmb29kRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVfX3NlYWZvb2QnKTtcbiAgICBzZWFmb29kRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWdyb3VwJyk7XG4gICAgc2VhZm9vZEVsZW1lbnQudGV4dENvbnRlbnQgPSAnU2VhZm9vZCc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzZWFmb29kRWxlbWVudCk7XG5cblxuICAgIG1haW5Db3Vyc2VMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIG1haW5Db3Vyc2VFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBzbmFja0xpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgc25hY2tFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBkZXNzZXJ0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBkZXNzZXJ0RWxlbWVudC5hcHBlbmRDaGlsZChsb2FkTWVudUl0ZW0oaXRlbSkpO1xuICAgIH0pOyBcblxuICAgIHNlYWZvb2RMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHNlYWZvb2RFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRNZW51SXRlbShpdGVtKSk7XG4gICAgfSk7IFxuXG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51SXRlbShvYmope1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2ROYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbV9fbmFtZScpO1xuICAgIGZvb2ROYW1lLmlubmVySFRNTCA9IGA8c3Bhbj4ke29iai5uYW1lfTwvc3Bhbj48c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj48c3Bhbj4kJHtvYmoucHJpY2V9PC9zcGFuPmA7XG5cbiAgICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG4gICAgZm9vZERlc2NyaXB0aW9uLnN0eWxlLmZvbnRTdHlsZSA9ICdvYmxpcXVlJztcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBsb2FkU3RvcmUob2JqKXtcblxuICAgIGNvbnN0IHN0b3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RvcmUuY2xhc3NMaXN0LmFkZCgnc3RvcmUtZmwtYm94LWl0ZW0nKTtcblxuICAgIGNvbnN0IHN0b3JlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3RvcmVJbWcuc3JjID0gb2JqLmltZ1VSTDsgIFxuICAgIHN0b3JlSW1nLnN0eWxlLmhlaWdodCA9ICcxNWVtJztcbiAgICBzdG9yZUltZy5zdHlsZS53aWR0aCA9ICcxMDAlJzsgIFxuICAgIHN0b3JlLmFwcGVuZENoaWxkKHN0b3JlSW1nKTtcbiAgICBcbiAgICBjb25zdCBzdG9yZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN0b3JlTmFtZS50ZXh0Q29udGVudCA9IGAke29iai5uYW1lfWA7XG4gICAgc3RvcmUuYXBwZW5kQ2hpbGQoc3RvcmVOYW1lKTsgICBcblxuICAgIGNvbnN0IHN0b3JlRGVzY3JwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgc3RvcmVEZXNjcnB0aW9uLnRleHRDb250ZW50ID0gYCR7b2JqLmRlc2NyaXB0aW9ufWA7XG4gICAgc3RvcmVEZXNjcnB0aW9uLnN0eWxlLmZvbnRXZWlnaHQgPSAnbGlnaHRlcic7XG4gICAgc3RvcmUuYXBwZW5kQ2hpbGQoc3RvcmVEZXNjcnB0aW9uKTtcblxuICAgIGNvbnN0IHN0b3JlQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgc3RvcmVBZGRyZXNzLnRleHRDb250ZW50ID0gYCR7b2JqLmFkZHJlc3N9YDtcbiAgICBzdG9yZS5hcHBlbmRDaGlsZChzdG9yZUFkZHJlc3MpO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xufVxuZXhwb3J0IHtsb2FkTWFpbn07IiwiY2xhc3MgZm9vZEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNhdGVnb3J5LCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmNvbnN0IHNhbmR3aWNoID0gbmV3IGZvb2RJdGVtKFxuICAgICdCw6FuaCBtw6wgcGF0ZScsIFxuICAgICdzbmFjaycsIFxuICAgIDEsIFxuICAgICdGYW1vdXMgVmlldG5hbWVzZSBzYW5kd2ljaCB3aXRoIGxpdmVyIHBhdGUsIGNpbGFudHJvIGFuZCBoYW0nXG4gICAgKTtcblxuY29uc3Qgc291cCA9IG5ldyBmb29kSXRlbShcbiAgICAnUGjhu58nLFxuICAgICdtYWluJyxcbiAgICA0LFxuICAgICdCZWVmIG5vb2RsZSBzb3VwLCBzbGljZWQgYmVlZiB3aXRoIGhlcmJzJ1xuKTtcblxuY29uc3QgZnJpZWRDaGlja2VuID0gbmV3IGZvb2RJdGVtKFxuICAgICdDxqFtIGfDoCB44buRaSBt4buhJyxcbiAgICAnbWFpbicsXG4gICAgNCxcbiAgICAnQ3Jpc3B5IGZyaWVkIGNoaWNrZW4gb24gYSBiZWQgb2YgY29sb3JmdWwgZnJpZWQgcmljZSdcbik7XG5cbmNvbnN0IGJsYWNrQmVhbiA9IG5ldyBmb29kSXRlbShcbiAgICAnQ2jDqCDEkeG6rXUgxJFlbiB0aOG6oWNoIGNow6JuIHRyw6J1JyxcbiAgICAnZGVzc2VydCcsXG4gICAgMS41LFxuICAgICdCbGFjayBiZWFucyBzdGV3ZWQgd2l0aCBzdWdhciB3YXRlciwgd2l0aCBwZWFybHMsIGJsYWNrIGplbGx5Li4uJ1xuKTtcblxuY29uc3QgbWVhdEJhbGwgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0LDoW5oIG3DrCB4w611IG3huqFpJyxcbiAgICAnc25hY2snLFxuICAgIDIsXG4gICAgJ1ZpZXRuYW1lc2Ugc2FuZHdpY2ggd2l0aCBtZWF0IGJhbGxzIGluIHRvbWF0byBzYXVjZScsXG5cbik7ICBcblxuY29uc3QgYnJva2VuUmljZSA9IG5ldyBmb29kSXRlbShcbiAgICAnQ8ahbSBU4bqlbSBTw6BpIEfDsm4nLFxuICAgICdtYWluJyxcbiAgICAzLFxuICAgICdUaGUgbGVnZW5kYXJ5IGFuZCB0cnVseSBTYWlnb24gYnJva2VuIHJpY2UnXG4pO1xuXG5jb25zdCBiZWFuQ3VyZCA9IG5ldyBmb29kSXRlbShcbiAgICAnVMOgdSBo4bunIG514bubYyDEkcaw4budbmcgZ+G7q25nJyxcbiAgICAnZGVzc2VydCcsXG4gICAgMixcbiAgICAnQmVhbiBjdXJkIGluIGdpbmdlciBjYXJhbWVsIHNhdWNlJ1xuKTtcblxuY29uc3Qgc25ha2VoZWFkRmlzaCA9IG5ldyBmb29kSXRlbShcbiAgICAnQ8OhIGzDs2MgaOG6pXAgYuG6p3UnLFxuICAgICdzZWFmb29kJyxcbiAgICA1LFxuICAgICdTdGVhbWVkIHNuYWtlaGVhZCBmaXNoIHdpdGggY2FsYWJhc2gnXG4pO1xuXG5jb25zdCBncmlsbGVkUGF3biA9IG5ldyBmb29kSXRlbShcbiAgICAnVMO0bSBzw7ogbsaw4bubbmcgc+G7kXQgbmfDsiB4YW5oJyxcbiAgICAnc2VhZm9vZCcsXG4gICAgNSxcbiAgICAnR3JpbGxlZCBwYXduIHdpdGggZ3JlZW4gY29yaWFuZGVyIHNhdWNlJ1xuKVxuXG5jb25zdCBncmlsbGVkQmFuYW5hID0gbmV3IGZvb2RJdGVtKFxuICAgICdDaHXhu5FpIGLhu41jIG7hur9wIG7GsOG7m25nJyxcbiAgICAnZGVzc2VydCcsXG4gICAgMixcbiAgICAnR3JpbGxlZCBiYW5hbmEgaW4gc3RpY2t5IHJpY2UnXG4pXG5cbmV4cG9ydCB7XG4gICAgc2FuZHdpY2gsIFxuICAgIHNvdXAsIFxuICAgIGZyaWVkQ2hpY2tlbiwgXG4gICAgYmxhY2tCZWFuLCBcbiAgICBtZWF0QmFsbCwgXG4gICAgYnJva2VuUmljZSwgXG4gICAgYmVhbkN1cmQsXG4gICAgc25ha2VoZWFkRmlzaCxcbiAgICBncmlsbGVkUGF3bixcbiAgICBncmlsbGVkQmFuYW5hXG59OyIsImNsYXNzIHN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgYWRkcmVzcywgaW1nVVJMKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgdGhpcy5pbWdVUkwgPSBpbWdVUkw7XG4gICAgfVxufVxuXG5jb25zdCBMZUR1YW4wMSA9IG5ldyBzdG9yZShcbiAgICAnTW94dSBCaXN0cm8gLSBMZSBEdWFuJywgXG4gICAgJ1R3byBzZXBhcmF0ZWQgYXJlYXM6IGluZG9vciBhbmQgb3V0ZG9vci4gT2ZmZXJlZCBWaWV0bmFtZXNlIHNlYXNvbmFsIGZvb2QuIElkZWFsIGxvY2F0aW9uIGZvciBmb3JlaWduIHRvdXJpc3RzLiBPZmZpY2UgbHVuY2ggc2V0IGlzIHNlcnZlZCB3aXRoIHJpY2UsIG1haW4gZGlzaGVzLCBzb3VwIGFuZCBkZXNzZXJ0LicsXG4gICAgJzAxIExlIER1YW4gYmx2ZCwgRGlzdHJpY3QgMSwgSG8gQ2hpIE1pbmggY2l0eScsXG4gICAgJ2ltYWdlcy9jYXRlci15YW5nLmpwZydcbiAgICApXG5cbmNvbnN0IEhhbU5naGk3NyA9IG5ldyBzdG9yZShcbiAgICAnTW94dSBCaXN0cm8gLSBIYW0gTmdoaScsXG4gICAgJ1RoZSByZXN0YXVyYW50IHdpdGggbG90cyBvZiBzbWFsbCBvcGVuIHNwYWNlcyBzdXJyb3VuZGVkIGJ5IHRyb3BpY2FsIHRyZWVzLiBQZXJmZWN0IHNpdGUgZm9yIGNlcmVtb25pZXMsIG1lZXRpbmdzIGFuZCByb21hbnRpYyBldmVudHMnLFxuICAgICc3NyBIYW0gTmdoaSBzdHJlZXQsIERpc3RyaWN0IDEsIEhvIENoaSBNaW5oIGNpdHknLFxuICAgICdpbWFnZXMvbXVyYXQta2FyYWhhbi5qcGcnXG4pXG5cbmV4cG9ydCB7TGVEdWFuMDEsIEhhbU5naGk3N307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZU1haW4sIGNyZWF0ZU5hdiwgY3JlYXRlRm9vdGVyfSBmcm9tICcuL21vZHVsZXMvZWxlbWVudC1pbml0aWFsaXplcic7XG5pbXBvcnQge2xvYWRNYWlufSBmcm9tICcuL21vZHVsZXMvZWxlbWVudC1sb2FkZXInO1xuXG5cbmluaXQoKTtcbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBjcmVhdGVOYXYoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgLy9jcmVhdGVGb290ZXIoKTtcbiAgICBpZiAoIWxvY2F0aW9uLmhhc2gpXG4gICAge1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyNtZW51JztcbiAgICB9IFxuICAgIGxvYWRNYWluKCk7IC8vIGdldCBtYWluIGNvbnRlbnQgb25jZSB0aGUgVVJJIGZyYWdtZW50IGlzIHNldFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgbG9hZE1haW4pO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=