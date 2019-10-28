"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerhovnaRada {
    constructor(listOfFaction = []) {
        this.listOfFactions = [];
        this.listOfFactions = listOfFaction;
    }
    addFactions(factionName) {
        this.listOfFactions.push(factionName);
    }
    deleteFaction(factionName) {
        const indexToDelete = this.listOfFactions.findIndex((faction) => faction === factionName);
        this.listOfFactions.splice(indexToDelete, 1);
    }
    showAllFaction() {
        this.listOfFactions.forEach((faction) => {
            console.log(faction);
        });
    }
    showOneFaction(factionName) {
        const oneFaction = this.listOfFactions.filter((faction) => faction === factionName);
        console.log(oneFaction);
    }
    addDeputyToFaction(factionName, deputy) {
        factionName.addDeputy(deputy);
    }
    deleteDeputyFromFraction(deputyToDelete) {
        this.listOfFactions.forEach((faction) => {
            faction.deleteDeputy(deputyToDelete);
        });
    }
    showAllBriberDeputiesFromFactions() {
        this.listOfFactions.forEach((faction) => {
            faction.showAllBriberDeputies();
        });
    }
    showTheBiggestBriberDeputyinFactions() {
        this.listOfFactions.forEach((faction) => {
            faction.showTheBiggestBriber();
        });
    }
    showAllDeputiesFromAllFraction() {
        this.listOfFactions.forEach((faction) => {
            faction.showAllDeputies();
        });
    }
}
exports.VerhovnaRada = VerhovnaRada;
