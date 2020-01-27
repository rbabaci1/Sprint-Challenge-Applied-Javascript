// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicsDiv = document.querySelector('.topics');

function getTopics(url) {
    return axios.get(url)
            .then(response => response.data.topics)
            .catch(error => console.error(error));
}

getTopics('https://lambda-times-backend.herokuapp.com/topics')
    .then(topics => {
        topics.forEach((topic, index) => {
            let tab = createTab(topic);
            if (index === topics.length - 1) {
                tab.dataset.language = 'node';
            } else {
                tab.dataset.language = topic;
            }
            topicsDiv.append(tab);
        });
    })
    .then(() => {
        topicsDiv.addEventListener('click', (event) => {
            let element = event.target;
            let cards = document.querySelectorAll('.card');

            if (element.classList.contains('tab')) {
                cards.forEach(card => {
                    if (card.dataset.language == element.dataset.language) {
                        (card.style.display == 'none') ? card.style.display = 'flex' 
                        : card.style.display = 'none';
                    }
                });
            }

            event.stopPropagation();
        });
    })
    .catch(error => console.error(error));

function createTab(topic) {
    let tab = document.createElement('div');

    tab.classList.add('tab');
    tab.textContent = topic;

    return tab;
}