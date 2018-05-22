//từ khóa this
var employee = {
    id : 1,
    greet: function(){
        setTimeout(() => {
            console.log(this.id);
        }, 2500);
    }
}   
employee.greet();