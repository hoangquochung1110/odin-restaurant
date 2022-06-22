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

export {createNav};