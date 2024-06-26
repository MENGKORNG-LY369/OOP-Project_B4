"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
var Connector_1 = require("../../../../Connector");
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(firstName, lastName, email, age, gender, role, flightInstance, passenger) {
        if (passenger === void 0) { passenger = []; }
        var _this = _super.call(this, firstName, lastName, email, age, gender, flightInstance) || this;
        _this.role = role;
        _this.flightInstance = flightInstance;
        _this.passenger = passenger;
        return _this;
    }
    Pilot.prototype.getSalary = function () {
        return 1000;
    };
    Pilot.prototype.setFlight = function (flightInstance) {
        this.flightInstance = flightInstance;
    };
    return Pilot;
}(Connector_1.Crew));
exports.Pilot = Pilot;
