var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('Person is running');
    };
    return Person;
}());
var p1 = new Person();
console.log(typeof p1);
console.log(p1.run());
