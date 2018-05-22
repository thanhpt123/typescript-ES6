//spread parameter
var displayColorsSpead = function (...colors: string[]) {
    for(let i in colors){
        console.log(colors[i]);
    }
}
let message = "Say hello!";
let colors = ["blue","greeen","yellow"]
displayColorsSpead(message, ...colors);