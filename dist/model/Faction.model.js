"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Faction {
    constructor(listOfDeputy = []) {
        this.listOfDeputies = [];
        this.listOfDeputies = listOfDeputy;
    }
    addDeputy(obj) {
        this.listOfDeputies.push(obj);
    }
    deleteDeputy(deputyToDelete) {
        const indexToDelete = this.listOfDeputies.findIndex((dep) => {
            return deputyToDelete.surname === dep.surname && deputyToDelete.name === dep.name;
        });
        this.listOfDeputies.splice(indexToDelete, 1);
    }
    deleteOneDeputy(deputySurname) {
        const indexToDelete = this.listOfDeputies.findIndex((dep) => deputySurname === dep.surname);
        this.listOfDeputies.splice(indexToDelete, 1);
    }
    deleteAllBriberDeputies() {
        const honestDeputy = this.listOfDeputies.filter((dep) => !dep.bribery);
        this.listOfDeputies.splice(0, this.listOfDeputies.length);
        this.listOfDeputies = [...honestDeputy];
    }
    showTheBiggestBriber() {
        const [BiggestBriberDeputy] = this.listOfDeputies.sort(function (dep1, dep2) {
            return dep2.quantityBribe - dep1.quantityBribe;
        });
        console.log(BiggestBriberDeputy);
    }
    showAllDeputies() {
        this.listOfDeputies.forEach((deputy) => {
            console.log(deputy);
        });
    }
    showAllBriberDeputies() {
        const briberDeputies = this.listOfDeputies.filter((deputy) => deputy.bribery);
        briberDeputies.forEach(dept => {
            console.log(dept);
        });
    }
    deleteAllDeputy() {
        this.listOfDeputies.splice(0, this.listOfDeputies.length);
    }
    totalBribe() {
        const totalBribeFaction = this.listOfDeputies.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.quantityBribe;
        }, 0);
        console.log(totalBribeFaction);
    }
}
exports.Faction = Faction;
