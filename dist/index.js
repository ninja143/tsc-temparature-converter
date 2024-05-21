"use strict";
// Temparature converter 
// Class Example 
// Small Project
class Temparature {
    _celcius = 0;
    get celcius() {
        return this._celcius;
    }
    set celcius(newCelcius) {
        this._celcius = newCelcius;
    }
    get fahrenheit() {
        return (this._celcius * 9) / 5 + 32;
    }
    set fahrenheit(newFahrenheit) {
        this._celcius = (newFahrenheit - 32) * 5 / 9;
    }
}
// creating Object 
const temp = new Temparature();
// Set celcius & get in fahrenheit
temp.celcius = 25;
console.log('You entered temparature in celcius - ' + temp.celcius);
console.log(temp.celcius + ' celcius is ' + temp.fahrenheit + ' in fahrenheit.');
// Set fahrenheit & get in celcius 
temp.fahrenheit = 77;
console.log('You entered temparature in fahrenheit - ' + temp.fahrenheit);
console.log(temp.fahrenheit + ' fahrenheit is ' + temp.celcius + ' in celcius.');
