// select the topics container from the DOM
const topicsDiv = document.querySelector('.topics');

// function to request the topics data
function getTopics(url) {
    return axios.get(url)
            .then(response => response.data.topics)
            .catch(error => console.error(error));
}

// make a get request using axios to this URL
getTopics('https://lambda-times-backend.herokuapp.com/topics')
    // if the promise is resolved, use the data back
    .then(topics => {
        // create a tab div for each topic
        topics.forEach((topic, index) => {
            let tab = createTab(topic);
            /* make sure the last topic dataset is set to 'node' 
            to make them equal to the dataset set in the articles */
            index === topics.length - 1 ? tab.dataset.topic = 'node' 
            : tab.dataset.topic = topic;
            // append the tab to the DOM
            topicsDiv.append(tab);
        });
    })
    .then(() => {
        // display clicked topic articles
        topicsDiv.addEventListener('click', (event) => {
            let element = event.target;
            let cards = document.querySelectorAll('.card');

            if (element.classList.contains('tab')) {
                /* for each card that has the same topic name
                display it if it's not displayed otherwise hide it */
                cards.forEach(card => {
                    if (card.dataset.topic == element.dataset.topic) {
                        (card.style.display == 'none') ? card.style.display = 'flex' 
                        : card.style.display = 'none';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }

            event.stopPropagation();
        });
    })
    .catch(error => console.error(error));

// tab creation for each topic
function createTab(topic) {
    let tab = document.createElement('div');

    tab.classList.add('tab');
    tab.textContent = topic;

    return tab;
}