// Получить случайное число от 0 до size-1
function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

// Вычислить расстояние от клика (event) до клада (target)
function getDistance(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
}

// Получить для расстояния строку подсказки
function getDistanceHint(distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
}

// Создаем переменные
let width = 400;
let height = 400;
let clicks = 0;

// Случайная позиция клада
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
    clicks++;

    // Получаем расстояние от места клика до клада
    let distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    let distanceHint = getDistanceHint(distance);

    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);

    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});