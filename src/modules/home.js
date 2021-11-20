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

export {loadHome};