let calculateSalary = function(){
    return 100000;
}
let calculateSalaryArrow = () => 200000;
let calculateSalaryTotal = (bonus:number) => 200000 + bonus;
console.log(calculateSalary());
console.log(calculateSalaryTotal(10000));
console.log(calculateSalaryArrow());