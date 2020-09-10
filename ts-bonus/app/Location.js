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
exports.Location = void 0;
// @file /app/Location.ts
var JobField_1 = require("./JobField");
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location(value) {
        return _super.call(this, value) || this;
    }
    // @Override
    Location.prototype.equals = function (o) {
        if (this === o)
            return true;
        if (!(o instanceof Location))
            return false;
        var location = o;
        return this.getId() === location.getId();
    };
    return Location;
}(JobField_1.JobField));
exports.Location = Location;
;
