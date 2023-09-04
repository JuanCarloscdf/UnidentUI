const registerForm = document.getElementById('unidentForm')
const regexDb = {
    name: /^(?=[A-Za-zÀ-ÖØ-öø-ÿ '-]{2,20}$)[A-Za-zÀ-ÖØ-öø-ÿ]+(?:['-][A-Za-zÀ-ÖØ-öø-ÿ]+)*(?: [A-Za-zÀ-ÖØ-öø-ÿ]+(?:['-][A-Za-zÀ-ÖØ-öø-ÿ]+)*)*$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    cellphone: /^\d{8}$/,
    password: /^[a-zA-Z0-9]{8,12}$/
}
const validateData = (data, regexObject) => {
    const messages = {
        name: 'Revise su nombre',
        lastName: 'Revise su apellido',
        email: 'Revise su email',
        cellphone: 'Revise su celular',
        agree: 'Acepta las condiciones',
        welcome: 'Bienvenido a Unident',
        password: 'revisa tu password'
    };

    const { firstName, lastName, email, cellphone, agree, password } = data;

    if (!regexObject.name.test(firstName)) {
        return messages.name;
    }
    if (!regexObject.name.test(lastName)) {
        return messages.lastName;
    }
    if (!regexObject.email.test(email)) {
        return messages.email;
    }
    if (!regexObject.cellphone.test(cellphone)) {
        return messages.cellphone;
    }
    if (!regexObject.password.test(password)) {
        return messages.password;
    }
    if (!agree) {
        return messages.agree;
    }
    return messages.welcome;
};
registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const messageContainer = document.getElementById('error-message')
    const formData = Object.fromEntries(new FormData(event.target))
    const message = validateData(formData, regexDb)
    messageContainer.style.color = message === 'Bienvenido a Unident' ? 'green' : 'tomato'
    messageContainer.textContent = message
    if (message === 'Bienvenido a Unident') {
        const toSend = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            password: formData.password,
            email: formData.email,
            cellphone: formData.password,
        }
        const url = 'http://localhost:3500/user'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toSend)
        }
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log('Respuesta del servidor:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

})

/* 
  "first_name": "juan carlos",
  "last_name": "mamani rojas",
  "password": "123456",
  "email": "juantest@juantest.com",
  "cellphone": "7308037221",
  "rol": "ADMIN",
  "dddd":"ddddd"
  {
  "firstName": "",
  "lastName": "",
  "email": "",
  "cellphone": "",
  "password": ""
  registerForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    
})
} */