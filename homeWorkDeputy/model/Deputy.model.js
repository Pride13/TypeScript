"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Human_model_1 = require("./Human.model");
var Deputy = /** @class */ (function (_super) {
    __extends(Deputy, _super);
    function Deputy(weight, height, surname, name, age, bribery, quantityBribe) {
        var _this = _super.call(this, weight, height) || this;
        _this.surname = surname;
        _this.name = name;
        _this.age = age;
        _this.bribery = bribery;
        _this.quantityBribe = quantityBribe;
        return _this;
    }
    Deputy.prototype.giveBribe = function () {
        if (!this.bribery) {
            console.log('No');
            return;
        }
        var isBribe = Math.random();
        (isBribe > .5) ? console.log('Yes') : console.log('No');
    };
    return Deputy;
}(Human_model_1.Human));
exports.Deputy = Deputy;
