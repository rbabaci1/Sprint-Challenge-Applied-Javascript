// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function getTopics(url) {
    return axios.get(url)
            .then(response => response.data.topics)
            .catch(error => console.error(error));
}

const topicsDiv = document.querySelector('.topics');

getTopics('https://lambda-times-backend.herokuapp.com/topics')
    .then(topics => {
        topics.forEach(topic => {
            topicsDiv.append( createTab(topic));
        });
    })
    .catch(error => console.error(error));


function createTab(topic) {
    let tab = document.createElement('div');
    tab.classList.add('tab');

    tab.textContent = topic;

    return tab;
}