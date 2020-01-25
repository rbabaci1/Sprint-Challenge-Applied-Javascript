// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let header = document.createElement('div');
    let span1 = document.createElement('span');
    let heading = document.createElement('h1');
    let span2 = document.createElement('span');

    header.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    span1.textContent = 'MARCH 28, 2019';
    heading.textContent = 'Lambda Times';
    span2.textContent = '98°';

    
}