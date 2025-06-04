const url = 'https://anapioficeandfire.com/api/books/';
const app = document.querySelector('#books');

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  try {
    const response = await fetch(url);
    const books = await response.json();

    // Remove the loading spinner once data is fetched
    const loader = document.querySelector('#loading');
    if (loader) {
      loader.remove();
    }

    // Create an element for each book that contains title, author, publication year, and number of pages
    books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('mb-4');

      bookElement.innerHTML = `
        <h5>${book.name}</h5>
        <p><em>by ${book.authors.join(', ')}</em></p>
        <p>${new Date(book.released).getFullYear()}</p>
        <p>${book.numberOfPages} pages</p>
      `;

      app.appendChild(bookElement);
    });

    // Update the styles in JavaScript to center all the books in the container given
    app.style.display = 'flex';
    app.style.flexDirection = 'column';
    app.style.alignItems = 'center';
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData(url);
