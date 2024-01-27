let div = document.getElementById('key')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    div.style.backgroundColor = 'pink'
    } else if (event.key === 's') {
    div.style.backgroundColor = 'orange'
    } else if (event.key === 'd') {
    div.style.backgroundColor = 'lightblue'
    }
    })

    