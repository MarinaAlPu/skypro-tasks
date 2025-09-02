import { login, updateToken } from "./api.js";
import { fetchAndRenderTasks } from "./fetchAndRenderTasks.js";
import { renderRegistration } from "./renderRegistration.js";


export const renderLogin = () => {
  const app = document.getElementById("app");

  app.innerHTML = `
  <h1>Страница входа</h1>
  <div class="form">
      <h3 class="form-title">Форма входа</h3>
      <div class="form-row">
          <input type="text" id="login-input" class="input" placeholder="Логин">
          <input type="text" id="password-input" class="input" placeholder="Пароль">
      </div>
  </div>
  <br>
  <button class="button" id="login-button">Войти</button>
  <button class="button" id="reg-button">Зарегистрироваться</button>
  `

  // находим элементы
  const button = document.getElementById("login-button");
  const loginElement = document.getElementById("login-input");
  const passwordElement = document.getElementById("password-input");

  // навешиваем обработчик отправки формы (обработчик клика на кнопку "Войти")
  button.addEventListener("click", () => {
    // console.log("\nНажали кнопку 'Добавить'");
    login({
      login: loginElement.value,
      password: passwordElement.value,
    })
      .then((responseData) => {
        // console.log(responseData);
        // console.log(responseData.user.token);
        updateToken(responseData.user.token);
        fetchAndRenderTasks();
      })
  })

  const buttonReg = document.getElementById("reg-button");

  buttonReg.addEventListener("click", () => {
    renderRegistration();
  })
}