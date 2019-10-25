"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Faction {
    constructor(listOfDeputy = []) {
        this.listOfDeputy = [];
        this.listOfDeputy = listOfDeputy;
    }
    addDeputy(obj) {
        this.listOfDeputy.push(obj);
    }
}
exports.Faction = Faction;
