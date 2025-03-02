document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы с классом .menu__item, которые могут раскрывать подменю
    let menuItems = Array.from(document.querySelectorAll(".menu__item > a"));

    // Проверяем, что элементы были найдены
    if (menuItems.length === 0) {
        console.log("Элементы .menu__item не найдены.");
        return;
    }

    console.log("Добавлены элементы:", menuItems);

    menuItems.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке

            // Получаем подменю (если оно есть)
            let subMenu = link.nextElementSibling;

            if (subMenu && subMenu.classList.contains("menu_sub")) {
                // Переключаем класс для отображения/скрытия подменю
                subMenu.classList.toggle("menu_active");

                console.log("Клик по элементу: подменю переключено.");
            }
        });
    });
});
