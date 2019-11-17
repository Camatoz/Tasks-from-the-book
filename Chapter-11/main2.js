var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

var width = 800;
var height = 800;
let clickCount = 0;
let clickLimit = 10;
// Гипотинуза карты
let maxDistance = Math.sqrt((width * width) + (height * height));

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {

    let percent1 = maxDistance / 100 * 2;
    let percent2 = maxDistance / 100 * 2.5;
    let percent5 = maxDistance / 100 * 5;
    let percent10 = maxDistance / 100 * 10;
    let percent20 = maxDistance / 100 * 20;
    let percent40 = maxDistance / 100 * 40;
    let percent80 = maxDistance / 100 * 80;

    if (distance < percent1) {
        alert("Клад найден! Сделано кликов: " + clickCount);
    }

    if (distance < percent2) {
        return "Обожжешься!";
    } else if (distance < percent5) {
        return "Очень горячо";
    } else if (distance < percent10) {
        return "Горячо";
    } else if (distance < percent20) {
        return "Тепло";
    } else if (distance < percent40) {
        return "Холодно";
    } else if (distance < percent80) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }

};

$("#map").click(function (event) {
    clickCount++;
    console.log(clickCount);
    if (clickCount >= clickLimit) {
        alert("The End")
    } else {
        var distance = getDistance(event, target);
        var distanceHint = getDistanceHint(distance);
        $("#distance").text(distanceHint + ' ( ' + (clickLimit - clickCount) + ' )');
    }

});