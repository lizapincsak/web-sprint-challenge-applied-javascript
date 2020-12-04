// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
//{date, title, temp}

function Header() {

    const newsHeader = document.createElement('div');
    newsHeader.classList.add('header');

    const newsDate = document.createElement('span');
    newsDate.classList.add('date');
    newsDate.textContent = 'MARCH 28, 2020';

    const newsTitle = document.createElement('h1');
    newsTitle.textContent = 'Lambda Times';
    
    const newsTemp = document.createElement('span');
    newsTemp.classList.add('temp');
    newsTemp.textContent = '98°';

    newsHeader.appendChild(newsDate);
    newsHeader.appendChild(newsTitle);
    newsHeader.appendChild(newsTemp);

    const headerContainer = document.querySelector('.header-container')
    headerContainer.appendChild(newsHeader);

    return newsHeader;
}
console.log(Header());
