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

export {createNav, createMain, createFooter};