// Получаем элементы для анимации и вывода данных
const loader = document.getElementById("loader");
const itemsContainer = document.getElementById("items");

// Функция для загрузки данных
function loadCurrencyData() {
  fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка сети");
      }
      return response.json();
    })
    .then(data => {
      // Скрыть анимацию загрузки
      loader.classList.remove("loader_active");

      // Кэшируем данные в localStorage
      localStorage.setItem("currencyData", JSON.stringify(data.response.Valute));

      // Вставляем данные на страницу
      displayCurrencyData(data.response.Valute);
    })
    .catch(error => {
      console.log("Ошибка:", error);
    });
}

// Функция для отображения данных о валюте
function displayCurrencyData(valutes) {
  // Очищаем контейнер для предыдущих данных
  itemsContainer.innerHTML = "";

  // Для каждой валюты создаем элемент и вставляем его на страницу
  for (let key in valutes) {
    const currency = valutes[key];
    
    const item = document.createElement("div");
    item.classList.add("item");

    // Создаем элементы для курса валюты
    const codeElement = document.createElement("div");
    codeElement.classList.add("item__code");
    codeElement.textContent = currency.CharCode;

    const valueElement = document.createElement("div");
    valueElement.classList.add("item__value");
    valueElement.textContent = currency.Value;

    const currencyElement = document.createElement("div");
    currencyElement.classList.add("item__currency");
    currencyElement.textContent = "руб.";

    // Добавляем элементы в контейнер
    item.appendChild(codeElement);
    item.appendChild(valueElement);
    item.appendChild(currencyElement);

    itemsContainer.appendChild(item);
  }
}

// Проверяем наличие данных в localStorage
const cachedData = localStorage.getItem("currencyData");
if (cachedData) {
  // Если данные есть в кэше, отображаем их
  const parsedData = JSON.parse(cachedData);
  displayCurrencyData(parsedData);
} else {
  // Если данных нет в кэше, загружаем с сервера
  loadCurrencyData();
}
