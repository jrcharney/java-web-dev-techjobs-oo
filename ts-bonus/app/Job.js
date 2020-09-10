"use strict";
exports.__esModule = true;
exports.Job = void 0;
var Job = /** @class */ (function () {
    /*
    constructor(){
        this.id = nextId++;
    }
    */
    function Job(name, employer, location, positionType, skill) {
        //this();
        this.id = Job.nextId++;
        this.name = name;
        this.employer = employer;
        this.location = location;
        this.positionType = positionType;
        this.skill = skill;
    }
    // @Override
    Job.prototype.equals = function (o) {
        if (this === o)
            return true;
        if (!(o instanceof Job))
            return false;
        var job = o;
        return this.getId() === job.getId();
    };
    // TODO: What is the equivalent of `Objects.hash(getId());`?
    // @Override
    // public hashCode() : int { return Objects.hash(this.getId()); }
    Job.prototype.getId = function () { return this.id; };
    //public setName(name : string) : void { this.name = name; }
    Job.prototype.setName = function (name) { this.name = name; return this; };
    Job.prototype.getName = function () { return this.name; };
    //public setEmployer(employer : Employer) : void {this.employer = employer; }
    Job.prototype.setEmployer = function (employer) { this.employer = employer; return this; };
    Job.prototype.getEmployer = function () { return this.employer; };
    //public setLocation(location : Location) : void {this.location = location; }
    Job.prototype.setLocation = function (location) { this.location = location; return this; };
    Job.prototype.getLocation = function () { return this.location; };
    //public setPositionType(positionType : PositionType) : void {this.positionType = positionType; }
    Job.prototype.setPositionType = function (positionType) { this.positionType = positionType; return this; };
    Job.prototype.getPositionType = function () { return this.positionType; };
    //public setSkill( skill : Skill ) : void {this.skill = skill; }
    Job.prototype.setSkill = function (skill) { this.skill = skill; return this; };
    Job.prototype.getSkill = function () { return this.skill; };
    // @Override
    Job.prototype.toString = function () {
        var dna = "Data not available";
        //: Record<string,any>
        // TODO: let fields : object = new Map<string, any | undefined>();
        // Or should it be any | null?
        var fields = new Map([
            ["ID", this.id],
            ["Name", this.name],
            ["Employer", this.employer],
            ["Location", this.location],
            ["Position Type", this.positionType],
            ["Skill", this.skill]
        ]);
        // NOTE: When we want to use our data from Maps, we need to convert them to arrays using Array.from()
        // Find the longest key
        var longest = Array.from(fields.keys()).reduce(function (acc, idx) { return (acc.length > idx.length) ? acc : idx; });
        var results = Array.from(fields.entries()).map(function (_a) {
            var name = _a[0], value = _a[1];
            var label = name.padEnd(longest.length); // Note: The default character for padEnd is the space
            var field = (value === null) ? dna : value;
            return label + " : " + field;
        }).join("\n");
        return "\n" + results + "\n";
    };
    Job.nextId = 1;
    return Job;
}());
exports.Job = Job;
