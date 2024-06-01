//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        if (title === '' || author === '' || isbn === '') {
            alert('Please fill in all fields');
            return;
        }

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        bookList.appendChild(row);

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

        row.querySelector('.delete').addEventListener('click', () => {
            bookList.removeChild(row);
        });
    });
});

