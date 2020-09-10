"use strict";
exports.__esModule = true;
exports.JobField = void 0;
// @file /app/JobField.ts
// Yes we can do abstract classes in JavaScript!
var JobField = /** @class */ (function () {
    // Q: Can we have more than one constructor? NO!
    // We can't have more than one constructor.
    // What we can do is make `value` optional (at least as of TS 2.0),
    // but in order to make it work value has to be a `string` or `undefined`.
    // Here we use a UNION to tell it to accept more than one data type.
    function JobField(value) {
        // Note: We can't use `this` on our static value. We have to use `JobField` or else we get error TS2576.
        this.id = JobField.nextId++; //  Combo of id = nextId; and nextId++!
        this.value = value;
    }
    JobField.prototype.getId = function () { return this.id; };
    // Instead of making this a void function, lets make our setters chainable!
    // When we chain our setter functions, we can set more than one item!
    //public setValue(value : string) : void { this.value = value; }
    JobField.prototype.setValue = function (value) { this.value = value; return this; };
    JobField.prototype.getValue = function () { return this.value; };
    // TODO: @Override?
    JobField.prototype.toString = function () {
        // TODO: is this equivalent to `this.value == null || this.value.isEmpty()`?
        // Let's try this as a single line.
        return (this.value === null || this.value === "") ? "Data not available" : this.value;
    };
    // TODO: What is the equivalent of `int hashCode()`?
    // public hashCode() : int { return Objects.hash(getId(); }
    // TODO: What is the equivalent of `boolean equals(Object o)`?
    JobField.prototype.equals = function (o) {
        if (this === o)
            return true;
        if (!(o instanceof JobField))
            return false;
        var job_field = o; // Type assertion in TS
        return this.getId() === job_field.getId();
    };
    JobField.nextId = 1;
    return JobField;
}());
exports.JobField = JobField;
//export JobField;
