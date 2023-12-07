// Получаем элементы чекбоксов
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");

// Получаем элементы карточек товаров
let cards = document.getElementsByClassName("card");

// Добавляем обработчик события изменения состояния чекбоксов
checkbox1.addEventListener("change", filterCards);
checkbox2.addEventListener("change", filterCards);
checkbox3.addEventListener("change", filterCards);

// Функция для фильтрации карточек товаров
function filterCards() {
  // Проверяем состояние каждого чекбокса и скрываем/показываем соответствующие карточки товаров
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let category1 = card.getAttribute("data-category1");
    let category2 = card.getAttribute("data-category2");
    let category3 = card.getAttribute("data-category3");

    if ((checkbox1.checked && category1 !== "true") ||
        (checkbox2.checked && category2 !== "true") ||
        (checkbox3.checked && category3 !== "true")) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  }
}
