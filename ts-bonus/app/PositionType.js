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
exports.PositionType = void 0;
// @file /app/PositionType.ts
var JobField_1 = require("./JobField");
var PositionType = /** @class */ (function (_super) {
    __extends(PositionType, _super);
    function PositionType(value) {
        return _super.call(this, value) || this;
    }
    // @Override
    PositionType.prototype.equals = function (o) {
        if (this === o)
            return true;
        if (!(o instanceof PositionType))
            return false;
        var that = o;
        return this.getId() === that.getId();
    };
    return PositionType;
}(JobField_1.JobField));
exports.PositionType = PositionType;
;
