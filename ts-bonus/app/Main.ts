// @file: /app/main.ts

import { Employer } from './Employer';
import { Location } from './Location';
import { PositionType } from './PositionType';
import { Skill } from './Skill';
import { Job } from './Job';

// Yes we can run our main program as a Immediately Invoked Function Expression (IIFE)
// function main(){...};main();     // write then run
// (function(){...})()              // IIFE

(function() {
    let job1 = new Job(
        "Product tester",
        new Employer("ACME"),
        new Location("Desert"),
        new PositionType("Quality control"),
        new Skill("Persistence")
    );
    let job2 = new Job(
        "Web Developer",
        new Employer("LaunchCode"),
        new Location("St. Louis"),
        new PositionType("Front-end developer"),
        new Skill("JavaScript")
    );
    let job3 = new Job(
        "Ice cream taster",
        new Employer(""),
        new Location("Home"),
        new PositionType("UX"),
        new Skill("Taste")
    );

    let jobs : Array<Job> = [job1, job2, job3];

    for(let job of jobs){
        //console.log(job);     // Prints each object. (Not what we want.)
        console.log(job.toString()); // Prints the string output (what we want!)
    }
})();

//main();     // Run it!