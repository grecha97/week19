function createElement(){
    const titleInput = document.querySelector('.titleInput');
    const bodyInput = document.querySelector('.bodyInput');
    const container = document.querySelector('.container');

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then((data) =>{
        const resultTitle = document.createElement('h2');
        const resultPost = document.createElement('div'); 
        resultTitle.innerHTML = data.title;
        resultPost.innerHTML = data.body;
        resultPost.style.overflow = 'hidden';
        resultPost.style.textOverflow = 'ellipsis';
        container.appendChild(resultTitle);
        container.appendChild(resultPost);
    })
    .catch(error => {
        console.error('Ошибка при создании поста:', error);
    });
}

document.querySelector('.btn').addEventListener('click', createElement);


