fetch('https:api.github.com/users/marjames98')
.then(response => {
    return response.json();
})
.then(githubData => {
    console.log(githubData);
});