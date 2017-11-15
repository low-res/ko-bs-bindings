/**
 *
 */
define([
    "knockout",
    "jquery"
], function( ko, $ ) {

    if( ko.bindingHandlers.popover == undefined ) {

        ko.bindingHandlers.popover = {

            init: function(element, valueAccessor, allBindings) {
                var arrayOfLines = ko.unwrap(valueAccessor()).match(/[^#]+/g);
                var placement = allBindings.get('placement') || 'auto top';
                $(element).popover({
                    html:true,
                    animation: true,
                    trigger:'hover',
                    title: arrayOfLines[0],
                    content: arrayOfLines[1],
                    viewport:'body',
                    container: 'body',
                    placement: placement
                });

            },

            update: function(element, valueAccessor) {
                var arrayOfLines = ko.unwrap(valueAccessor()).match(/[^#]+/g);
                $(element).data('bs.popover').options.title     = arrayOfLines[0];
                $(element).data('bs.popover').options.content   = arrayOfLines[1];
            }
        };

    }



});