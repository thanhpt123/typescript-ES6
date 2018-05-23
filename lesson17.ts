class Persons{
    constructor(name : any){
        console.log(name + " constructor!");
    }
    run(){
        console.log("Person is running");
    }
    static speak(){
        console.log("I can speak english");
    }
}
let p = new Persons("Test");
p.run();
Persons.speak();