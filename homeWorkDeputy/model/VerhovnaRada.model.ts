import {Faction} from './Faction.model';
import {Deputy} from "./Deputy.model";

export class VerhovnaRada {
    listOfFactions: Faction[] =[];

    constructor(listOfFaction: Faction[] = []) {
        this.listOfFactions = listOfFaction;
    }

    addFactions(factionName: Faction){
        this.listOfFactions.push(factionName)
    }

    deleteFaction(factionName: Faction) {
        const indexToDelete = this.listOfFactions.findIndex((faction: Faction) => faction === factionName);

        this.listOfFactions.splice( indexToDelete, 1);
    }

    showAllFaction() {
        this.listOfFactions.forEach((faction: Faction) => {
            console.log(faction);
        })
    }

    showOneFaction(factionName: Faction) {
        const oneFaction = this.listOfFactions.filter((faction: Faction) => faction === factionName);

        console.log(oneFaction);
    }

    addDeputyToFaction(factionName: Faction, deputy: Deputy) {
        factionName.addDeputy(deputy);
    }

    deleteDeputyFromFraction(deputyToDelete: Deputy) {
            this.listOfFactions.forEach((faction: Faction) => {
                faction.deleteDeputy(deputyToDelete);
            })
    }

    showAllBriberDeputiesFromFactions() {
        this.listOfFactions.forEach((faction: Faction) => {
            faction.showAllBriberDeputies()
        })
    }

    showTheBiggestBriberDeputyinFactions() {
        this.listOfFactions.forEach((faction: Faction) => {
            faction.showTheBiggestBriber()
        })
    }

    showAllDeputiesFromAllFraction() {
        this.listOfFactions.forEach((faction: Faction) => {
            faction.showAllDeputies()
        })
    }
}