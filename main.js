// Replace 'YOUR_GITHUB_USERNAME' and 'YOUR_API_TOKEN' with your GitHub username and API token.
const apiUrl = 'https://api.github.com/users/Amreshdhiman001/repos';
const headers = {
    Authorization: 'Bearer YOUR_API_TOKEN',
};

// Fetch GitHub data
fetch(apiUrl, { headers })
    .then(response => response.json())
    .then(data => {
        // Process and display the data
        console.log(data); // You can customize this part to create visualizations.
    })
    .catch(error => console.error('Error fetching data:', error));
