
let message = document.querySelector('#message')

let addMovie = event => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)

    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)

let deleteMovie = event => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.querySelector('span').textContent} deleted`;
    revealMessage()
}

let crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    }else{
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

let revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => message.classList.add('hide'),1000)
}