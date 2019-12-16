let gift = 0;

function shoot(arrow) {
    console.log('Вы сделали выстрел');

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            (Math.random() > 0.5) ? resolve({}) : reject('Вы промахнулись');
        }, 1500);
    });
};

function win() {
    console.log('Вы победили');
    (gift == 1) ? buyGift(): giveMoney();
}

function buyGift() {
    console.log('Вам купили подарок');
}

function giveMoney() {
    console.log('Вам заплатили');
}

function loose() {
    console.log('Вы проиграли');
}

shoot({})
    .then(() => console.log('Вы попали в цель'))
    .then(win)
    .catch(loose);