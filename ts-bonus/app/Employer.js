"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Employer = void 0;
// @file /app/Employer.ts
var JobField_1 = require("./JobField"); // Note: Imports don't need file suffixes. It will assume there's a .ts/.js file.
var Employer = /** @class */ (function (_super) {
    __extends(Employer, _super);
    /*
    constructor(){
        super();
    }
    */
    function Employer(value) {
        return _super.call(this, value) || this;
    }
    // @Override
    Employer.prototype.equals = function (o) {
        if (this === o)
            return true;
        if (!(o instanceof Employer))
            return false;
        var employer = o;
        return this.getId() === employer.getId();
    };
    return Employer;
}(JobField_1.JobField));
exports.Employer = Employer;
