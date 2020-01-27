const cardsContainer = document.querySelector('.cards-container');

function getArticles(url) {
    return axios.get(url)
            .then(response => response.data.articles )
            .catch(error => console.error(error));
}

function createArticles(topicName, articles) {
    articles.forEach(article => {
        let card = createCard(article);

        card.dataset.topic = topicName;
        card.style = "display: none; background: #accaab";

        cardsContainer.append(card);
    });
}

getArticles('https://lambda-times-backend.herokuapp.com/articles')
    .then(articlesObj => {
        let articleNames = Object.keys(articlesObj);
        let articles = Object.values(articlesObj);
    
        articles.forEach((article, index) => {
            createArticles(articleNames[index], article);
        });
    })
    .catch(error => console.error(error));

// card creation for each article
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