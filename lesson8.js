var getBonus = function (value, number) {
    if (value === void 0) { value = 10; }
    if (number === void 0) { number = 2; }
    console.log(value + number);
};
var getBonusTest = function (value, number) {
    if (value === void 0) { value = 10; }
    if (number === void 0) { number = 2; }
    console.log(value + number);
};
getBonus();
getBonusTest(undefined, 20);
