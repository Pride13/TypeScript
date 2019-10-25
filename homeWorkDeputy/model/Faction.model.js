"use strict";
exports.__esModule = true;
var Faction = /** @class */ (function () {
    function Faction(listOfDeputy) {
        if (listOfDeputy === void 0) { listOfDeputy = []; }
        this.listOfDeputy = [];
        this.listOfDeputy = listOfDeputy;
    }
    Faction.prototype.addDeputy = function (obj) {
        this.listOfDeputy.push(obj);
    };
    return Faction;
}());
exports.Faction = Faction;
