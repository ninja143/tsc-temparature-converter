// Temparature converter 
// Class Example 
// Small Project


class Temparature {
    private _celcius: number = 0;

    public get celcius(): number {
        return this._celcius;
    }

    public set celcius(newCelcius: number) {
        this._celcius = newCelcius;
    }

    public get fahrenheit(): number {
        return (this._celcius * 9)/5 + 32;
    }

    public set fahrenheit(newFahrenheit: number) {
        this._celcius = (newFahrenheit - 32) * 5/9;
    }
    
}

// creating Object 
const temp = new Temparature();

// Set celcius & get in fahrenheit
temp.celcius = 25;
console.log('You entered temparature in celcius - '+ temp.celcius);
console.log(temp.celcius + ' celcius is '+ temp.fahrenheit + ' in fahrenheit.');

// Set fahrenheit & get in celcius 
temp.fahrenheit = 77;
console.log('You entered temparature in fahrenheit - '+ temp.fahrenheit);
console.log(temp.fahrenheit + ' fahrenheit is '+ temp.celcius + ' in celcius.');