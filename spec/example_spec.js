'use strict';
var moment=require('moment');
//http://dalelotts.github.io/angular-bootstrap-datetimepicker/
describe('Angular Datetime Picker - select a specific date / time range', function() {
    it('The text box contains August 12 6:30 PM ', function() {
        browser.get('http://dalelotts.github.io/angular-bootstrap-datetimepicker/');

        element(by.css('.input-group-addon')).click();
        var i = 0;
        //Just to select the third date picker in the page which has the input page 
        element.all(by.cssContainingText('td', '12')).each(function(date) {
            i = i + 1;
            if (i == 3) {
                date.click();
            }

        });
        element.all(by.cssContainingText('span', '6:00 PM')).each(function(time) {
         
           time.click();
        });
        
        element.all(by.cssContainingText('span', '6:30 PM')).each(function(specifictime) {
         
           specifictime.click();
        });
        browser.debugger();
        expect(element(by.model('data.dateDropDownInput')).getAttribute('value')).toBe('Wed Aug 12 2015 18:30:00 GMT+1000 (AEST)');
    });


});