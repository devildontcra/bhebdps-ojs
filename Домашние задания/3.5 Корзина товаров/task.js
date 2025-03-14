let up = document.querySelectorAll(".product__quantity-control");
let button = document.querySelectorAll(".product__add");

up.forEach((e) => {
    e.addEventListener("click", (el) => {
        let elem = el.target;
        let element = elem.parentElement.querySelector(".product__quantity-value");
        if (elem.classList.contains("product__quantity-control_inc")) {
            element.textContent = Number(element.textContent) + 1;
        } else {
            if (Number(element.textContent) > 1) {
                element.textContent = Number(element.textContent) - 1;
            }
        }
    });
});

button.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        let element = e.target;
        let count = document.querySelector(".cart__products");
        let countBlock = count.querySelectorAll("[data-id]");
        let newBlok = element.closest(".product").cloneNode(true);
        let newProductId = newBlok.getAttribute("data-id");
        let newProductQuantity = Number(newBlok.querySelector(".product__quantity-value").textContent);  // Получаем количество товара
        
        let isDuplicate = false;
        countBlock.forEach((elem) => {
            // Если товар с таким ID уже есть в корзине
            if (elem.getAttribute("data-id") === newProductId) {
                let quantityElem = elem.querySelector(".product__quantity-value");
                let currentQuantity = Number(quantityElem.textContent);
                quantityElem.textContent = currentQuantity + newProductQuantity;  // Увеличиваем количество
                isDuplicate = true;
            }
        });

        // Если товара нет в корзине, добавляем его с количеством
        if (!isDuplicate) {
            let productClone = newBlok.cloneNode(true);
            productClone.querySelector(".product__quantity-value").textContent = newProductQuantity;
            count.append(productClone);
        }
    });
});
