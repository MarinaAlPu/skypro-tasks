import { registration, updateToken } from "./api.js";
import { fetchAndRenderTasks } from "./fetchAndRenderTasks.js";


export const renderRegistration = () => {
  const app = document.getElementById("app");

  app.innerHTML = `
  <h1>Страница регистрации</h1>
  <div class="form">
      <h3 class="form-title">Форма регистрации</h3>
      <div class="form-row">
          <input type="text" id="login-input" class="input" placeholder="Логин">
          <input type="text" id="name-input" class="input" placeholder="Имя">
          <input type="text" id="password-input" class="input" placeholder="Пароль">
      </div>
  </div>
  <br>
  <button class="button" id="reg-button">Зарегистрироваться</button>
  `

  // находим элементы
  const button = document.getElementById("reg-button");
  const loginElement = document.getElementById("login-input");
  const nameElement = document.getElementById("name-input");
  const passwordElement = document.getElementById("password-input");

  // навешиваем обработчик отправки формы (обработчик клика на кнопку "Войти")
  button.addEventListener("click", () => {
    // console.log("\nНажали кнопку 'Добавить'");
    registration({
      login: loginElement.value,
      name: nameElement.value,
      password: passwordElement.value,
    })
      .then((responseData) => {
        // console.log(responseData);
        // console.log(responseData.user.token);
        updateToken(responseData.user.token);
        fetchAndRenderTasks();
      })
  })

}