var user = {
  username: "",
  password: "",
};

var usuarioCorreto = {
  username: "admin",
  senha: "123456",
};
if (localStorage.getItem("username") && localStorage.getItem("password")) {
  user.username = localStorage.getItem("username");
  user.password = localStorage.getItem("password");
  username.value = user.username;
  password.value = user.password;

  if (
    user.username === usuarioCorreto.username &&
    user.password === usuarioCorreto.senha
  ) {
    window.location.href = "logout.html";
  }
}

function clicou() {
  if (
    user.username === usuarioCorreto.username &&
    user.password === usuarioCorreto.senha
  ) {
    localStorage.setItem("username", user.username);
    localStorage.setItem("password", user.password);

    window.location.href = "logout.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

let login = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");

const handleChangeUsername = (event) => {
  user.username = event.target.value;
};
const handleChangePassword = (event) => {
  user.password = event.target.value;
};

login.addEventListener("click", clicou);
username.addEventListener("change", handleChangeUsername);
password.addEventListener("change", handleChangePassword);

if (localStorage.getItem("username") && localStorage.getItem("password")) {
  user.username = localStorage.getItem("username");
  user.password = localStorage.getItem("password");
  username.value = user.username;
  password.value = user.password;
}

function clicou() {
  if (
    user.username === usuarioCorreto.username &&
    user.password === usuarioCorreto.senha
  ) {
    localStorage.setItem("username", user.username);
    localStorage.setItem("password", user.password);
    alert("Você está logado");
  } else {
    alert("Usuário ou senha incorretos.");
  }
  document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    window.location.href = "index.html";
  });
}
document
  .getElementById("form-alterar-informacoes")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const urlImagemPerfil = document.getElementById("url-imagem-perfil").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("urlImagemPerfil", urlImagemPerfil);

    alert("As informações da conta foram atualizadas com sucesso.");
  });
