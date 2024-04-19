function createElements(post) {
    const container = document.getElementById('containerOne');
    const title = document.createElement('h2');
    const body = document.createElement('p');
    title.style.color = 'purple';
    title.textContent = `Заголовок: ${post.title}`;
    body.textContent = `Статья: ${post.body}`;
    container.appendChild(title);
    container.appendChild(body);
}

function fetchElements() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        posts.forEach(post => {
            createElements(post);
        });
    })
    .catch(error => console.error('Ошибка:', error));
}

fetchElements();
