"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const carAge = 2024;
            return carAge - this.year;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
}
