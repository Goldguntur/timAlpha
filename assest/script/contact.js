const form = document.getElementById('contact-form')
const inputName = document.getElementById('nama')
const inputEmail = document.getElementById('email')
const inputSubject = document.getElementById('subject')
const inputDesk = document.getElementById('deskripsi')


const isRequired = value => value === '' ? false : true;

const checkName = () => {

    let valid = false;

    const names = inputName.value.trim();

    if (!isRequired(names)) {
        showError(inputName, 'nama tidak boleh kosong');
    } else {
        showSuccess(inputName);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = inputEmail.value.trim();
    if (!isRequired(email)) {
        showError(inputEmail, 'Email tidak boleh kosong.');
    } else {
        showSuccess(inputEmail);
        valid = true;
    }
    return valid;
};
const checkSubject = () => {
    let valid = false;
    const subject = inputSubject.value.trim();
    if (!isRequired(subject)) {
        showError(inputSubject, 'Subjek tidak boleh kosong.');
    } else {
        showSuccess(inputSubject);
        valid = true;
    }
    return valid;
};

const checkDesk = () => {
    let valid = false;
    const desk = inputDesk.value.trim();
    if (!isRequired(desk)) {
        showError(inputDesk, 'Subjek tidak boleh kosong.');
    } else {
        showSuccess(inputDesk);
        valid = true;
    }
    return valid;
};


const showError = (input, message) => {
    const formField = input.parentElement;
   
    formField.classList.remove('success');
    formField.classList.add('error');

 
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {

    const formField = input.parentElement;

 
    formField.classList.remove('error');
    formField.classList.add('success');

   
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    e.preventDefault()

    checkName();
    checkEmail();
    checkSubject();
    checkDesk();

    
})

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'nama':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'subject':
            checkSubject();
            break;
        case 'deskripsi':
            checkDesk();
            break;
    }
}));