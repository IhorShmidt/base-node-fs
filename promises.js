
module.exports = {
    runFunction: getFBadCoffee
};

function getFBadCoffee() {
    return function() {
        setTimeout(function() {
            const meHappy = 'I`m getting coffe in bad way';
            console.log(meHappy);
            addSugar2(badAsCallback(meHappy));

        }, 1000);
    }
}

function addSugar2(cb) {
    setTimeout(function() {
        const meHappy = 'I`m adding some sugar';
        console.log(meHappy);
        addMilk2(badAsCallback(meHappy));
    }, 500);
}

function addMilk2(cbbb) {
    setTimeout(function() {
        const meHappy = 'I`m adding some milk';
        console.log(meHappy);
        badAsCallback(meHappy);
    }, 500);
}

function letTheBadCoffeBegin(cbbb) {
    setTimeout(function() {
        const meHappy = 'I`m adding some sugar';
        console.log(meHappy);
        cbbb(meHappy);

    }, 500);
}

function badAsCallback(shos) {
    console.log(shos, 'in bad way');
}
