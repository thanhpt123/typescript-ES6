//rest parameter
var displayColors = function (...colors: string[]) {
    console.log(colors);
}
displayColors("yellow", "red", "silver");
displayColors("yellow", "red");
displayColors("yellow");