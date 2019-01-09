define([
    "twbs/bootstrap",
    "Eonasdan/bootstrap-datetimepicker",
    "Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!css",
    "./bindingHandlers/bs-datepicker",
    "./bindingHandlers/bs-popover"
], function () {

    console.log( "binding added: ko.bindingHandlers.dateTimePicker", ko.bindingHandlers.dateTimePicker );
    console.log( "binding added: ko.bindingHandlers.popover", ko.bindingHandlers.popover );
    return true;
});