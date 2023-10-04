const nanodegreeCard = document.querySelector('.card');
nanodegreeCard.innerHTML =
'\n              <img srcset="site-files/assets/module-dfnd%401x.png 1x, site-files/assets/module-dfnd%402x.png 2x" src="./site-files/module-dfnd@1x.png" class="card--image" alt="New!">\n              <div class="card__content">\n                <h6 class="turquoise">New!</h6>\n                <p class="card__content--h5 slate strong"><em>Everything</em> You Need to Know About Data</p>\n                <p class="x-small mb-0">Enroll Now</p>\n              </div>\n            '

const mainHeading = document.querySelector('h1');
const otherHeading = document.querySelector('h4');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);

const testimonial = document.querySelector('.testimonials');
const newHeading = document.createElement('h2');
newHeading.textContent = 'Advice for New Udacity Students';
testimonial.appendChild(newHeading);
newHeading.insertAdjacentHTML('afterend', '<p>Try your <em>best</em>!</p>');

const heroContainer = document.querySelector('.hero__module');
const firstCard= heroContainer.firstElementChild;
//heroContainer.removeChild(firstCard);
//firstCard.remove();

const testimonialHeader = document.querySelector('.text-center');
testimonialHeader.style.color = 'orange';
testimonialHeader.style.fontSize = '2em';

const startButton = document.querySelector('#start-now');
startButton.style.backgroundColor = '#2015ff';
startButton.style.borderRadius = '5rem';

const newBackground = document.querySelector('.hero--homepage');
newBackground.classList.toggle('new-hero');

const cardBackground = document.getElementsByClassName('card');
for (let cardBg of cardBackground)
{
    cardBg.classList.toggle('new-card');
}

testimonialHeader.addEventListener('click', function () {
  console.log('The heading was clicked!');
});

document.addEventListener('click', function() {
    mainHeading.style.backgroundColor = 'red';
});

//document.addEventListener('keypress', function () {
//    document.body.remove();
//});

mainHeading.addEventListener('mouseover', function() {
    mainHeading.textContent = 'Build an AR App';
});

mainHeading.addEventListener('mouseout', function() {
    mainHeading.textContent = 'Learn ARKit';
});

/*document.addEventListener('keypress', function() {
    console.log("removing first child");
    document.querySelector('#contain-all').firstElementChild.remove();
})*/

let lastCard = heroContainer.lastElementChild;

function removeLastCard() {
   //lastCard.remove(); won't work because it's stored in a variable that won't change
   heroContainer.lastElementChild.remove();
   document.removeEventListener('click', removeLastCard);
}

document.addEventListener('click', removeLastCard);

document.addEventListener('click', function () {
    console.log('The document was clicked');
 });
 
 document.body.addEventListener('click', function () {
     console.log('The document body was clicked');
 });

 const link = document.querySelector('#ga-99cff7');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Wow! We didn't navigate to a new page!");
});

// // create a new div element
// const myCustomDiv = document.createElement('div');

// for (let i = 1; i <= 200; i++) {
//     // create a new paragraph element
//     const newElement = document.createElement('p');
  
//     // add text to the paragraph 
//     newElement.textContent = 'This is paragraph number ' + i;

//     // register an event listener to the paragraph element
//     newElement.addEventListener('click', function respondToTheClick(evt) {
//         console.log('A paragraph was clicked.');
//     });

//     // append the paragraph to the new div element 
//     myCustomDiv.appendChild(newElement);
// }

// // append the new div element to the page
// document.body.appendChild(myCustomDiv);

const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);

//  Working with Browser Events Chapter 29 Exercise

const toggleFavoriteDiv = document.querySelector('#individual-nanodegree-programs');

const cardTitles = document.getElementsByClassName('card--nanodegree__title');
for (const cardTitle of cardTitles)
{
    const newButton = document.createElement('button');
    newButton.classList.add('button','button--primary');
    cardTitle.appendChild(newButton);
    newButton.textContent = 'add to favorites';
}

function toggleFavorite(event) {
    if (event.target.tagName === 'BUTTON') {
        //console.log('A favorite was clicked: ' + event.target.parentElement.previousElementSibling.classList[1]);
       // console.log(event.target.element);
        event.preventDefault();
        if (event.target.textContent === 'add to favorites') {
            event.target.textContent = 'remove from favorites';
            event.target.insertAdjacentHTML('afterend', '<div>⭐ ⭐ ⭐</div>');
            console.log('boo ' + event.target.nextElementSibling);
        } else {
            event.target.textContent = 'add to favorites';
            event.target.nextElementSibling.remove();
        }
    }
}

toggleFavoriteDiv.addEventListener('click', toggleFavorite);