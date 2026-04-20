const form = document.querySelector("form");
const loadBtn = document.getElementById('loadBtn');
const clearBtn = document.getElementById('clearBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function saveData(e) {
    e.preventDefault();

    const data = new FormData(form);
    
    const user = {
        email: data.get('email'),
        password: data.get('password')
    };
    
    localStorage.setItem('user', JSON.stringify(user));
}

function loadData(e) {
    e.preventDefault();

    const savedData = localStorage.getItem('user');

    if (savedData) {
        const user = JSON.parse(savedData);
        
        emailInput.value = user.email;
        passwordInput.value = user.password;
    } else {
    }
}

function clearData(e) {
    e.preventDefault();
    emailInput.value = '';
    passwordInput.value = '';
}

form.addEventListener('submit', saveData);
loadBtn.addEventListener('click', loadData);
clearBtn.addEventListener('click', clearData);