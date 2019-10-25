"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Human_model_1 = require("./Human.model");
class Deputy extends Human_model_1.Human {
    constructor(weight, height, surname, name, age, bribery, quantityBribe) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribery = bribery;
        this.quantityBribe = quantityBribe;
    }
    giveBribe() {
        if (!this.bribery) {
            console.log('No');
            return;
        }
        const isBribe = Math.random();
        (isBribe > .5) ? console.log('Yes') : console.log('No');
    }
}
exports.Deputy = Deputy;
