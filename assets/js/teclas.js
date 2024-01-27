let div = document.getElementById('key')
let div2 = document.getElementById('keydos')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    div.style.backgroundColor = 'pink'
    } else if (event.key === 's') {
    div.style.backgroundColor = 'orange'
    } else if (event.key === 'd') {
    div.style.backgroundColor = 'lightblue'
    }
    })

    document.addEventListener('keydown', function (event) {
        if (event.key === 'q') {
        div2.style.backgroundColor = 'purple'
        } else if (event.key === 'w') {
        div2.style.backgroundColor = 'gray'
        } else if (event.key === 'e') {
        div2.style.backgroundColor = 'saddlebrown'
        }
        })

