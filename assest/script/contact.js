const form = document.querySelectorAll('section#contact div.container form input');
const btnSend = document.querySelector('section#contact div.container form button')
const small = document.querySelectorAll('section#contact div.container form small')
const contact = document.getElementById('contact-form')

const from = Array.from(form)



contact.addEventListener('submit', (e) => {
     e.preventDefault()

    from.forEach((f, i) => {
        if (!f.value.trim()) {
            form[i].setAttribute('required', 'required')
          
        } else {
            form.removeAttribute('required')
        }
    })
    
})

from.forEach((f, i) => {
    f.addEventListener('keyup', () => {
        if (from[i].value.length >= 0) {
            from[i].removeAttribute('required')
        }
    })
})
