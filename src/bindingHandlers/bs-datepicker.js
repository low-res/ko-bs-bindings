/* */
define([
    "knockout",
    "jquery",
    "lodash"
], function( ko, $, _ ) {

    if( ko.bindingHandlers.dateTimePicker == undefined ) {

        ko.bindingHandlers.dateTimePicker = {
            init: function (element, valueAccessor, allBindingsAccessor) {
                //initialize datepicker with some optional options
                var options = allBindingsAccessor().dateTimePickerOptions || {};
                $(element).datetimepicker(options);

                //when a user changes the date, update the view model

                //ko.utils.registerEventHandler(element, "dp.change", function (event) { // <-- this stopped working for unknown reason!? now using jquery.on() as a workaround...

                $(element).on("dp.change",function (event) {
                        var value = valueAccessor();
                        console.log( "dp.change", value );
                        if (ko.isObservable(value)) {
                            if (event.date != null && event.date != "" && !(event.date instanceof Date)) {
                                value(event.date.toDate());
                            } else {
                                if(event.date == "") event.date = null;
                                value(event.date);
                            }
                        }
                    });


                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    var picker = $(element).data("DateTimePicker");
                    if (picker) {
                        picker.destroy();
                    }
                });
            },
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

                var picker = $(element).data("DateTimePicker");
                //when the view model is updated, update the widget
                if (picker) {
                    var koDate = ko.utils.unwrapObservable(valueAccessor());

                    if( _.isString(koDate) ) {
                        koDate = new Date(koDate);
                    }

                    if(koDate==undefined) koDate=null;

                    //in case return from server datetime i am get in this form for example /Date(93989393)/ then fomat this
                    // koDate = (typeof (koDate) !== 'object') ? new Date( parseFloat(koDate.replace(/[^0-9]/g, ''))) : koDate;

                    picker.date(koDate);
                }
            }
        };

    }

});

