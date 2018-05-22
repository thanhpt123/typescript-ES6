//spread parameter
var displayColorsSpead = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "Say hello!";
var colors = ["blue", "greeen", "yellow"];
displayColorsSpead.apply(void 0, [message].concat(colors));
