"use strict";
// @file: /app/main.ts
exports.__esModule = true;
var Employer_1 = require("./Employer");
var Location_1 = require("./Location");
var PositionType_1 = require("./PositionType");
var Skill_1 = require("./Skill");
var Job_1 = require("./Job");
// Yes we can run our main program as a Immediately Invoked Function Expression (IIFE)
// function main(){...};main();     // write then run
// (function(){...})()              // IIFE
(function () {
    var job1 = new Job_1.Job("Product tester", new Employer_1.Employer("ACME"), new Location_1.Location("Desert"), new PositionType_1.PositionType("Quality control"), new Skill_1.Skill("Persistence"));
    var job2 = new Job_1.Job("Web Developer", new Employer_1.Employer("LaunchCode"), new Location_1.Location("St. Louis"), new PositionType_1.PositionType("Front-end developer"), new Skill_1.Skill("JavaScript"));
    var job3 = new Job_1.Job("Ice cream taster", new Employer_1.Employer(""), new Location_1.Location("Home"), new PositionType_1.PositionType("UX"), new Skill_1.Skill("Taste"));
    var jobs = [job1, job2, job3];
    for (var _i = 0, jobs_1 = jobs; _i < jobs_1.length; _i++) {
        var job = jobs_1[_i];
        //console.log(job);     // Prints each object. (Not what we want.)
        console.log(job.toString()); // Prints the string output (what we want!)
    }
})();
//main();     // Run it!
