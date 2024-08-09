
const listaUsuario = [
    {
        username: 'usuario',
        password: '123'
    }
]

console.log(listaUsuario)
function adicionarUsuario(username, password) {
    listaUsuario.push({ username, password })
}

// Lógica de Login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('username').value;
    const senha = document.getElementById('password').value;


    for (const key in listaUsuario) {
        const { username, password } = listaUsuario[key]

        console.log(username, password)

        if (nome === username && senha === password) {
            console.log('entrou')
            window.location.href = "index.html";
        }

    }
});

// Lógica de Cadastro
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        // Aqui você pode armazenar as credenciais no localStorage (ou enviar para um servidor)
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        adicionarUsuario(newUsername, newPassword)
        console.log(listaUsuario)
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("Preencha todos os campos.");
    }
});
