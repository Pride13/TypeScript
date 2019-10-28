"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Faction = /** @class */ (function () {
    function Faction(listOfDeputy) {
        if (listOfDeputy === void 0) { listOfDeputy = []; }
        this.listOfDeputies = [];
        this.listOfDeputies = listOfDeputy;
    }
    Faction.prototype.addDeputy = function (obj) {
        this.listOfDeputies.push(obj);
    };
    // deleteDeputy(deputyToDelete: Deputy) {
    //     const indexToDelete = this.listOfDeputies.findIndex((dep: Deputy) => {
    //         return deputyToDelete.surname === dep.surname && deputyToDelete.name === dep.name
    //     });
    //
    //     this.listOfDeputies.splice(indexToDelete, 1);
    // }
    // deleteOneDeputy(deputySurname: string) {
    //     const indexToDelete = this.listOfDeputies.findIndex((dep: Deputy)=> deputySurname === dep.surname);
    //
    //     this.listOfDeputies.splice(indexToDelete, 1)
    // }
    Faction.prototype.deleteAllBriberDeputies = function () {
        var honestDeputy = this.listOfDeputies.filter(function (dep) { return !dep.bribery; });
        this.listOfDeputies.splice(0, this.listOfDeputies.length);
        this.listOfDeputies = __spreadArrays(honestDeputy);
    };
    Faction.prototype.showTheBiggestBriber = function () {
        var BiggestBriberDeputy = this.listOfDeputies.sort(function (dep1, dep2) {
            return dep2.quantityBribe - dep1.quantityBribe;
        })[0];
        console.log(BiggestBriberDeputy);
    };
    Faction.prototype.showAllDeputies = function () {
        this.listOfDeputies.forEach(function (deputy) {
            console.log(deputy);
        });
    };
    Faction.prototype.showAllBriberDeputies = function () {
        var briberDeputies = this.listOfDeputies.filter(function (deputy) { return deputy.bribery; });
        briberDeputies.forEach(function (dept) {
            console.log(dept);
        });
    };
    Faction.prototype.deleteAllDeputy = function () {
        this.listOfDeputies.splice(0, this.listOfDeputies.length);
    };
    Faction.prototype.totalBribe = function () {
        var totalBribeFaction = this.listOfDeputies.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.quantityBribe;
        }, 0);
        console.log(totalBribeFaction);
    };
    return Faction;
}());
exports.Faction = Faction;
