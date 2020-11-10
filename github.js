const container = document.querySelector('.container');


fetch('https:api.github.com/users/marjames98')
.then(response => {
    return response.json();
})
.then(githubData => {
    const marObj = {
        bio:githubData.bio
        username: githubData.login
        name: githubData.name
    }
    const newElement = document.createElement('p');
    newElement.textContent = marObj.name;
    container.appendChild(newElement);
});
.catch(error => {
    console.log(error);
});
