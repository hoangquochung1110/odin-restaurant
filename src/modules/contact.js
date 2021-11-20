import { LeDuan01, HamNghi77} from './restaurant-stores';

var storeList = [LeDuan01, HamNghi77];

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
    confirmer.innerHTML = `<input type="submit" value="Confirm" id="order-confirm-btn-style">`;
    form.appendChild(confirmer);

}   

export {loadContact};