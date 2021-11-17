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
    (0,_modules_element_initializer__WEBPACK_IMPORTED_MODULE_0__.createFooter)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksaUVBQVEsSUFBSTtBQUNoQiwwQ0FBMEMsNkRBQVE7QUFDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9lbGVtZW50LWluaXRpYWxpemVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2VsZW1lbnQtbG9hZGVyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYWIoaWQsIGhyZWYsIHRleHRDb250ZW50KXtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpXG4gICAgdGFiLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIHRhYjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpe1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuICAgIGNvbnN0IGJyYW5kbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJyYW5kbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1icmFuZG5hbWUnKTtcbiAgICBicmFuZG5hbWUudGV4dENvbnRlbnQgPSAnTU9YVSc7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGJyYW5kbmFtZSk7XG5cbiAgICBjb25zdCBob21lID0gY3JlYXRlVGFiKCdob21lJywgJyNob21lJywgJ0hvbWUnKTtcbiAgICBjb25zdCBjb250YWN0ID0gY3JlYXRlVGFiKCdjb250YWN0JywgJyNjb250YWN0JywgJ0NvbnRhY3QnKTtcbiAgICBjb25zdCBtZW51ID0gY3JlYXRlVGFiKCdtZW51JywgJyNtZW51JywgJ01lbnUnKTtcblxuICAgIFtob21lLCBtZW51LCBjb250YWN0XS5mb3JFYWNoKGUgPT4gbmF2QmFyLmFwcGVuZENoaWxkKGUpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmF2LCBjcmVhdGVNYWluLCBjcmVhdGVGb290ZXJ9OyIsImltcG9ydCB7XG4gICAgc2FuZHdpY2gsIFxuICAgIHNvdXAsIFxuICAgIGZyaWVkQ2hpY2tlbiwgXG4gICAgYmxhY2tCZWFuLCBcbiAgICBtZWF0QmFsbCwgXG4gICAgYnJva2VuUmljZSwgXG4gICAgYmVhbkN1cmQsXG4gICAgc25ha2VoZWFkRmlzaCxcbiAgICBncmlsbGVkUGF3bixcbiAgICBncmlsbGVkQmFuYW5hXG59IGZyb20gJy4vbWVudS1pdGVtcyc7XG5cbnZhciBtYWluQ291cnNlTGlzdCA9IFtdLCBzbmFja0xpc3QgPSBbXSwgZGVzc2VydExpc3QgPSBbXSwgc2VhZm9vZExpc3QgPSBbXTsgLy8gaW1wbGVtZW50IGNhY2hpbmdcbltcbiAgICBzYW5kd2ljaCwgXG4gICAgc291cCwgXG4gICAgZnJpZWRDaGlja2VuLCBcbiAgICBibGFja0JlYW4sIFxuICAgIG1lYXRCYWxsLCBcbiAgICBicm9rZW5SaWNlLCBcbiAgICBiZWFuQ3VyZCxcbiAgICBzbmFrZWhlYWRGaXNoLFxuICAgIGdyaWxsZWRQYXduLFxuICAgIGdyaWxsZWRCYW5hbmEsXG4gICAgXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGxldCBjYXRlZ29yeSA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgaWYoY2F0ZWdvcnkgPT0gJ21haW4nKSBtYWluQ291cnNlTGlzdC5wdXNoKGl0ZW0pO1xuICAgIGVsc2UgaWYoY2F0ZWdvcnkgPT0gJ3NuYWNrJykgc25hY2tMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnZGVzc2VydCcpIGRlc3NlcnRMaXN0LnB1c2goaXRlbSk7XG4gICAgZWxzZSBpZihjYXRlZ29yeSA9PSAnc2VhZm9vZCcpIHNlYWZvb2RMaXN0LnB1c2goaXRlbSk7XG59KVxuXG5mdW5jdGlvbiBsb2FkTWFpbigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZnJhZ21lbnRJRCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpOyAvLyBtZW51IG9yIGNvbnRhY3Qgb3IgaG9tZVxuICAgIHN3aXRjaCAoZnJhZ21lbnRJRCl7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgbG9hZEhvbWUobWFpbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBsb2FkTWVudShtYWluKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgIGxvYWRDb250YWN0KG1haW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgISEhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZShtYWluKXtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudF9fdGl0bGUnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZpZXRuYW0tZmxhZycpO1xuICAgIGltZy5zcmMgPSAnaW1hZ2VzL3ZpZXRuYW0ucG5nJztcblxuICAgIGNvbnN0IGJyYW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgYnJhbmROYW1lLmlubmVyVGV4dCA9ICdNT1hVIFJFU1RBVVJBTlQnO1xuXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChicmFuZE5hbWUpO1xuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnRfX3N1YnRpdGxlJyk7XG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICAgIFZpZXRuYW1lc2UgQ3Vpc2luZSBBbGlxdWFtIHZhcml1cyB0ZW1wdXMgZXN0LCBxdWlzIGVsZW1lbnR1bSBtYWduYSBjb25ndWUgdmVsLiBcbiAgICAgICAgU2VkIGNvbmRpbWVudHVtIG51bGxhIG1ldHVzLCB2aXRhZSBsdWN0dXMgcHVydXMgcnV0cnVtIGEuIFxuICAgICAgICBDcmFzIHRpbmNpZHVudCBsaWd1bGEgdXJuYS4gTWF1cmlzIG1hdHRpcyBtYXNzYSBub24gZW5pbSBvcm5hcmUgbHVjdHVzLiBcbiAgICAgICAgUHJvaW4gcXVpcyBzZW0gbmlzaS4gTmFtIHB1bHZpbmFyIHRvcnRvciByaXN1cywgZWdldCB0ZW1wdXMgc2FwaWVuIGNvbnNlcXVhdCBtYXR0aXMuIFxuICAgIGBcbiAgICBtYWluLmFwcGVuZENoaWxkKHN1YlRpdGxlKTtcblxufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdChtYWluKXtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3RhdXJhbnQtY29udGFjdCcpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3RhdXJhbnQtY29udGFjdF9faW5mbycpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBgIPCfk54gODQgOTM0IDAyMiAxMTFcXG4g8J+PoiAwMSBMZSBEdWFuIEJsdmQsIEhvIENoaSBNaW5oIGNpdHlcXG4g4pyJ77iPIG1veHVyZXNAZXhhbXBsZS5jb21gO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXAuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXVyYW50LWNvbnRhY3RfX21hcCcpO1xuICAgIG1hcC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCJpbWFnZXMvbW94dS1sb2NhdGlvbi5wbmdcIiBzdHlsZT1cIm1heC13aWR0aDoxMDAlOyBib3JkZXItcmFkaXVzOiAuNGVtXCI7PmA7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChtYXApO1xufSAgIFxuXG5mdW5jdGlvbiBsb2FkTWVudShtYWluKXtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vZC1tZW51Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGNvbnN0IG1haW5Db3Vyc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvdXJzZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51X19tYWluLWNvdXJzZScpO1xuICAgIG1haW5Db3Vyc2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JvdXAnKTtcbiAgICBtYWluQ291cnNlRWxlbWVudC50ZXh0Q29udGVudCA9ICdNYWluJztcbiAgICBtZW51LmFwcGVuZENoaWxkKG1haW5Db3Vyc2VFbGVtZW50KTtcbiAgICBcbiAgICBjb25zdCBkZXNzZXJ0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc3NlcnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudV9fZGVzc2VydCcpO1xuICAgIGRlc3NlcnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JvdXAnKTtcbiAgICBkZXNzZXJ0RWxlbWVudC50ZXh0Q29udGVudCA9ICdEZXNzZXJ0ICAgJztcbiAgICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnRFbGVtZW50KTtcblxuICAgIGNvbnN0IHNuYWNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNuYWNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVfX3NuYWNrJyk7XG4gICAgc25hY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JvdXAnKTtcbiAgICBzbmFja0VsZW1lbnQudGV4dENvbnRlbnQgPSAnU25hY2snO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc25hY2tFbGVtZW50KTtcblxuICAgIGNvbnN0IHNlYWZvb2RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhZm9vZEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51X19zZWFmb29kJyk7XG4gICAgc2VhZm9vZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncm91cCcpO1xuICAgIHNlYWZvb2RFbGVtZW50LnRleHRDb250ZW50ID0gJ1NlYWZvb2QnO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2VhZm9vZEVsZW1lbnQpO1xuXG5cbiAgICBtYWluQ291cnNlTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBtYWluQ291cnNlRWxlbWVudC5hcHBlbmRDaGlsZChsb2FkTWVudUl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuXG4gICAgc25hY2tMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHNuYWNrRWxlbWVudC5hcHBlbmRDaGlsZChsb2FkTWVudUl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuXG4gICAgZGVzc2VydExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgZGVzc2VydEVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVJdGVtKGl0ZW0pKTtcbiAgICB9KTsgXG5cbiAgICBzZWFmb29kTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBzZWFmb29kRWxlbWVudC5hcHBlbmRDaGlsZChsb2FkTWVudUl0ZW0oaXRlbSkpO1xuICAgIH0pOyBcblxufVxuXG5mdW5jdGlvbiBsb2FkTWVudUl0ZW0ob2JqLCBjb250YWluZXIpe1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2ROYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbV9fbmFtZScpO1xuICAgIGZvb2ROYW1lLmlubmVySFRNTCA9IGA8c3Bhbj4ke29iai5uYW1lfTwvc3Bhbj48c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj48c3Bhbj4kJHtvYmoucHJpY2V9PC9zcGFuPmA7XG5cbiAgICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG4gICAgZm9vZERlc2NyaXB0aW9uLnN0eWxlLmZvbnRTdHlsZSA9ICdvYmxpcXVlJztcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuZXhwb3J0IHtsb2FkTWFpbn07IiwiY2xhc3MgZm9vZEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNhdGVnb3J5LCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmNvbnN0IHNhbmR3aWNoID0gbmV3IGZvb2RJdGVtKFxuICAgICdCw6FuaCBtw6wgcGF0ZScsIFxuICAgICdzbmFjaycsIFxuICAgIDEsIFxuICAgICdGYW1vdXMgVmlldG5hbWVzZSBzYW5kd2ljaCB3aXRoIGxpdmVyIHBhdGUsIGNpbGFudHJvIGFuZCBoYW0nXG4gICAgKTtcblxuY29uc3Qgc291cCA9IG5ldyBmb29kSXRlbShcbiAgICAnUGjhu58nLFxuICAgICdtYWluJyxcbiAgICA0LFxuICAgICdCZWVmIG5vb2RsZSBzb3VwLCBzbGljZWQgYmVlZiB3aXRoIGhlcmJzJ1xuKTtcblxuY29uc3QgZnJpZWRDaGlja2VuID0gbmV3IGZvb2RJdGVtKFxuICAgICdDxqFtIGfDoCB44buRaSBt4buhJyxcbiAgICAnbWFpbicsXG4gICAgNCxcbiAgICAnQ3Jpc3B5IGZyaWVkIGNoaWNrZW4gb24gYSBiZWQgb2YgY29sb3JmdWwgZnJpZWQgcmljZSdcbik7XG5cbmNvbnN0IGJsYWNrQmVhbiA9IG5ldyBmb29kSXRlbShcbiAgICAnQ2jDqCDEkeG6rXUgxJFlbiB0aOG6oWNoIGNow6JuIHRyw6J1JyxcbiAgICAnZGVzc2VydCcsXG4gICAgMS41LFxuICAgICdCbGFjayBiZWFucyBzdGV3ZWQgd2l0aCBzdWdhciB3YXRlciwgd2l0aCBwZWFybHMsIGJsYWNrIGplbGx5Li4uJ1xuKTtcblxuY29uc3QgbWVhdEJhbGwgPSBuZXcgZm9vZEl0ZW0oXG4gICAgJ0LDoW5oIG3DrCB4w611IG3huqFpJyxcbiAgICAnc25hY2snLFxuICAgIDIsXG4gICAgJ1ZpZXRuYW1lc2Ugc2FuZHdpY2ggd2l0aCBtZWF0IGJhbGxzIGluIHRvbWF0byBzYXVjZScsXG5cbik7ICBcblxuY29uc3QgYnJva2VuUmljZSA9IG5ldyBmb29kSXRlbShcbiAgICAnQ8ahbSBU4bqlbSBTw6BpIEfDsm4nLFxuICAgICdtYWluJyxcbiAgICAzLFxuICAgICdUaGUgbGVnZW5kYXJ5IGFuZCB0cnVseSBTYWlnb24gYnJva2VuIHJpY2UnXG4pO1xuXG5jb25zdCBiZWFuQ3VyZCA9IG5ldyBmb29kSXRlbShcbiAgICAnVMOgdSBo4bunIG514bubYyDEkcaw4budbmcgZ+G7q25nJyxcbiAgICAnZGVzc2VydCcsXG4gICAgMixcbiAgICAnQmVhbiBjdXJkIGluIGdpbmdlciBjYXJhbWVsIHNhdWNlJ1xuKTtcblxuY29uc3Qgc25ha2VoZWFkRmlzaCA9IG5ldyBmb29kSXRlbShcbiAgICAnQ8OhIGzDs2MgaOG6pXAgYuG6p3UnLFxuICAgICdzZWFmb29kJyxcbiAgICA1LFxuICAgICdTdGVhbWVkIHNuYWtlaGVhZCBmaXNoIHdpdGggY2FsYWJhc2gnXG4pO1xuXG5jb25zdCBncmlsbGVkUGF3biA9IG5ldyBmb29kSXRlbShcbiAgICAnVMO0bSBzw7ogbsaw4bubbmcgc+G7kXQgbmfDsiB4YW5oJyxcbiAgICAnc2VhZm9vZCcsXG4gICAgNSxcbiAgICAnR3JpbGxlZCBwYXduIHdpdGggZ3JlZW4gY29yaWFuZGVyIHNhdWNlJ1xuKVxuXG5jb25zdCBncmlsbGVkQmFuYW5hID0gbmV3IGZvb2RJdGVtKFxuICAgICdDaHXhu5FpIGLhu41jIG7hur9wIG7GsOG7m25nJyxcbiAgICAnZGVzc2VydCcsXG4gICAgMixcbiAgICAnR3JpbGxlZCBiYW5hbmEgaW4gc3RpY2t5IHJpY2UnXG4pXG5cbmV4cG9ydCB7XG4gICAgc2FuZHdpY2gsIFxuICAgIHNvdXAsIFxuICAgIGZyaWVkQ2hpY2tlbiwgXG4gICAgYmxhY2tCZWFuLCBcbiAgICBtZWF0QmFsbCwgXG4gICAgYnJva2VuUmljZSwgXG4gICAgYmVhbkN1cmQsXG4gICAgc25ha2VoZWFkRmlzaCxcbiAgICBncmlsbGVkUGF3bixcbiAgICBncmlsbGVkQmFuYW5hXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtjcmVhdGVNYWluLCBjcmVhdGVOYXYsIGNyZWF0ZUZvb3Rlcn0gZnJvbSAnLi9tb2R1bGVzL2VsZW1lbnQtaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHtsb2FkTWFpbn0gZnJvbSAnLi9tb2R1bGVzL2VsZW1lbnQtbG9hZGVyJztcblxuXG5pbml0KCk7XG5mdW5jdGlvbiBpbml0KCl7XG4gICAgY3JlYXRlTmF2KCk7XG4gICAgY3JlYXRlTWFpbigpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xuICAgIGlmICghbG9jYXRpb24uaGFzaClcbiAgICB7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnI21lbnUnO1xuICAgIH0gXG4gICAgbG9hZE1haW4oKTsgLy8gZ2V0IG1haW4gY29udGVudCBvbmNlIHRoZSBVUkkgZnJhZ21lbnQgaXMgc2V0XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBsb2FkTWFpbik7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==