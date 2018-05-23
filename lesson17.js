var Persons = /** @class */ (function () {
    function Persons(name) {
        console.log(name + " constructor!");
    }
    Persons.prototype.run = function () {
        console.log("Person is running");
    };
    Persons.speak = function () {
        console.log("I can speak english");
    };
    return Persons;
}());
var p = new Persons("Test");
p.run();
Persons.speak();
