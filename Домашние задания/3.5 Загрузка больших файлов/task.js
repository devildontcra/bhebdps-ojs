document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    var formData = new FormData(this); // Получаем данные из формы
    var progress = document.getElementById('progress'); // Находим элемент прогресса

    // Создаем объект AJAX запроса
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    // Слушаем событие на прогресс загрузки
    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            // Вычисляем прогресс
            var percentComplete = (event.loaded / event.total) * 100;
            progress.value = percentComplete; // Обновляем прогресс-бар
        }
    };

    // Обработчик завершения загрузки
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Загрузка прошла успешно:', xhr.responseText);
        } else {
            console.log('Ошибка при загрузке:', xhr.statusText);
        }
    };

    // Обработчик ошибок
    xhr.onerror = function () {
        console.log('Ошибка сети или сервер недоступен');
    };

    // Отправляем данные на сервер
    xhr.send(formData);
});
