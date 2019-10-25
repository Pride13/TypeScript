import {Human} from "./Human.model";

export class Deputy extends Human{
    surname: string;
    name: string;
    age: number;
    bribery: boolean;
    quantityBribe: number;

    constructor(weight: number, height: number, surname: string,
                name: string, age: number, bribery: boolean,
                quantityBribe: number) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribery = bribery;
        this.quantityBribe = quantityBribe;
    }

    giveBribe(): void {
        if (!this.bribery) {
            console.log('No');
            return;
        }

        const isBribe = Math.random();

        (isBribe > .5) ? console.log('Yes') : console.log('No');
    }

}