document.addEventListener('DOMContentLoaded', (event) => {
  const searchButton = document.querySelector('.search-button');
  const searchBox = document.querySelector('.search-box');

  searchButton.addEventListener('click', function () {
    const query = searchBox.value;
    if (query) {
      alert('You searched for: ' + query);
      // Here you can add code to handle the search action, like making an API call
    } else {
      alert('Please enter a search term');
    }
  });
});
