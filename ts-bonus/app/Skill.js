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
exports.Skill = void 0;
// @file /app/Skill.ts
// @info This is meant to be equivalent to CoreCompetency.java
var JobField_1 = require("./JobField");
var Skill = /** @class */ (function (_super) {
    __extends(Skill, _super);
    function Skill(value) {
        return _super.call(this, value) || this;
    }
    // @Override
    Skill.prototype.equals = function (o) {
        if (this === o)
            return true;
        if (!(o instanceof Skill))
            return false;
        var skill = o;
        return this.getId() === skill.getId();
    };
    return Skill;
}(JobField_1.JobField));
exports.Skill = Skill;
;
