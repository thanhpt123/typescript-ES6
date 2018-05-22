var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.id);
        }, 2500);
    }
};
employee.greet();
