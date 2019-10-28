import {Deputy} from "./Deputy.model";

export class Faction {
    listOfDeputies: Deputy[] = [];

    constructor(listOfDeputy: Deputy[] = []) {
        this.listOfDeputies = listOfDeputy;
    }

    addDeputy(obj: Deputy) {
        this.listOfDeputies.push(obj)
    }

    deleteDeputy(deputyToDelete: Deputy) {
        const indexToDelete = this.listOfDeputies.findIndex((dep: Deputy) => {
            return deputyToDelete.surname === dep.surname && deputyToDelete.name === dep.name
        });

        this.listOfDeputies.splice(indexToDelete, 1);
    }

    deleteOneDeputy(deputySurname: string) {
        const indexToDelete = this.listOfDeputies.findIndex((dep: Deputy)=> deputySurname === dep.surname);

        this.listOfDeputies.splice(indexToDelete, 1)
    }

    deleteAllBriberDeputies() {
        const honestDeputy = this.listOfDeputies.filter((dep: Deputy) => !dep.bribery);

        this.listOfDeputies.splice(0, this.listOfDeputies.length);

        this.listOfDeputies = [...honestDeputy];

    }

    showTheBiggestBriber(){
        const [BiggestBriberDeputy] = this.listOfDeputies.sort(function (dep1: Deputy, dep2: Deputy) {
            return dep2.quantityBribe - dep1.quantityBribe
        });

        console.log(BiggestBriberDeputy);
    }

    showAllDeputies() {
        this.listOfDeputies.forEach((deputy: Deputy) => {
            console.log(deputy);
        })
    }

    showAllBriberDeputies() {
        const briberDeputies =  this.listOfDeputies.filter((deputy: Deputy) => deputy.bribery);

        briberDeputies.forEach(dept => {
            console.log(dept);
        })
    }

    deleteAllDeputy() {
        this.listOfDeputies.splice(0, this.listOfDeputies.length);
    }

    totalBribe() {
        const totalBribeFaction = this.listOfDeputies.reduce((previousValue: number, currentValue: Deputy) => {
            return previousValue + currentValue.quantityBribe
        },0);
        console.log(totalBribeFaction);
    }
}