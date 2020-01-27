// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

function getArticles(url) {
    return axios.get(url)
            .then(response => response.data.articles )
            .catch(error => console.error(error));
}

function createArticles(dataValue, articles) {
    articles.forEach(article => {
        let card = createCard(article);
        card.dataset.language = dataValue;
        card.style.display = 'none';
        cardsContainer.append(card);
    });
}

getArticles('https://lambda-times-backend.herokuapp.com/articles')
    .then(articlesObj => {
        let objKeys = Object.keys(articlesObj);

        let i = 0;
        for (let key in articlesObj) {
            createArticles(objKeys[i], articlesObj[key]);
            i++;
        }
        
    })
    .catch(error => console.error(error));

function createCard(articleObj) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let authorImg = document.createElement('img');
    let authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = articleObj.headline;
    authorImg.src = articleObj.authorPhoto;
    authorName.textContent = articleObj.authorName;

    imgContainer.append(authorImg);
    author.append(imgContainer, authorName);
    card.append(headline, author);

    return card;
}