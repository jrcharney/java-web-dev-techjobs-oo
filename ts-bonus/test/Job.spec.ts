// @file: /test/Job.spec.ts
// @Info: This file is meant to mirror the /src/test/JobTest.js file
// NOTE: This file was not tested!  If you want, try it out and tell me if it worked in the issues.
// TODO: It might be ideal to move my project to express or angular later.
// TODO: Add Jasmine
// 1. `npm install --save-dev jasmine`
// 2. `npx jasmine init`
// 3. Add this line to your `packages.json` file.
//     `"scripts" : { "test" : "jasmine" }`
// 4. Run your test.
//
// TODO: Should I try jasmine-ts?
import { Employer } from '../app/Employer';
import { Location } from '../app/Location';
import { PositionType } from '../app/PositionType';
import { Skill } from '../app/Skill';
import { Job } from '../app/Job';

import 'jasmine';
// describe(description : string , specDefinitions : function)
// it(description : string, testFunction? : implementationCallback, timeout? : int )
// expect(actual : object, ) => matchers : Matchers
// toBe(expected : object)
class JobTest {
    private awesome_job : Job = new Job(
        "Product tester",
        new Employer("ACME"),
        new Location("Desert"),
        new PositionType("Quality control"),
        new Skill("Persistence")
    );

    // This is meant to be a utility function
    private expectedRecord(id : number, name : string, employer : string, location : string, positionType : string, skill : string) : string {
        const dna = "Data not available";

        let fields = new Map<string,any>([
            ["ID"            : id],
            ["Name"          : name],
            ["Employer"      : employer],
            ["Location"      : location],
            ["Position Type" : positionType],
            ["Skill"         : skill]
        ]);
        // Find the longest key
        let longest : string = Array.from(fields.keys()).reduce((acc,idx) => {return (acc.length > idx.length) ? acc : idx;});
        let results : string = Array.from(fields.entries()).map(([name,value]) => {
            let label : string = name.padEnd(longest.length);
            let field : any    = (value === null) ? dna : value;
            return `${label} : ${field}`;
        }).join(`\n`);
        return `${results}`;
    }

    // based on JUnit's assertEquals, assertTrue, and assertFalse
    private assertEquals(expectation : any, reality : any) : void {
        expect(expected).toBe(reality);
    }
    private assertTrue(expectation : any) : void {
        assertEquals(expectation,true);
    }
    private assertFalse(expectation : any) : void {
        assertEquals(expectation,false);
    }

    // @Test
    public testSettingJobId() : void {
        describe("set the job id", () => {
            let micro_job_1 : Job = new Job();
            let micro_job_2 : Job = new Job();
            it("do they have the same id", () => {
                expect(micro_job_1.getId() === micro_job_2.getId()).toBe(false);
            });
            it("are the consecutive", () => {
                expect(micro_job_2.getId() - micro_job_1.getId()).toBe(1);
            });
        });
    }

    // @Test
    public testJobConstructorSetsAllFields() : void {
        describe("test all fields were set", () => {
            it("by the Job constructor", () => {
                assertTrue(awesome_job instanceof Job);
            })
        });
    }

    // @Test
    public testJobsForEquality() : void {
        describe("test for equality", () => {
            it("between two jobs", () => {
                let micro_job_1 = new Job(
                    "Clerk",
                    new Employer("Micro Center"),
                    new Location("Brentwood, MO"),
                    new PositionType("Full Time"),
                    new Skill("Sales")
                );
                let micro_job_2 = new Job(
                    "Clerk",
                    new Employer("Micro Center"),
                    new Location("Brentwood, MO"),
                    new PositionType("Full Time"),
                    new Skill("Sales")
                );
                // This should be a negative test case because the ids and/or hashcodes should be different
                expect(micro_job_1.equals(micro_job_2)).toBe(false);
            });
        });
    }

    // @Test
    public testForNewLines() : void {
        describe("test for new lines()"){
            const awesome_string : string = awesome_job.toString();
            it("at the beginning", () => {
                expect(awesome_string.indexOf("\n")).toBe(0);
            });
            it("at the end", () => {
                expect(awesome_string.lastIndexOf("\n")).toBe(awesome_string.length - 1);
            });
        }
    }

    // @Test
    public testForToString() : void {
        describe("test toString()", () => {
            it("using an empty job ", () => {
                const empty_job : Job = new Job();
                const dna = "Data not available";
                const expected = this.expectedRecord(2,dna,dna,dna,dna,dna);
                expect(empty_job.toString()).toBe(expected);
            });
        });
    }

    // @Test
    public testForLocation() : void {
        describe("test for location", () => {
            it("should be Desert", () => {
                expect(awesome_job.getLocation().getValue()).toBe("Desert");
            });
        });
    }

    // @Test
    public testForAllFieldPopulation() : void {
        describe("test all fields for population", () => {
            it("using awesome_job ", () => {
                const expected = this.expectedRecord(1,"Product tester","ACME","Desert","Quality control","Persistence");
                expect(awesome_job.toString()).toBe(expected);
            });
        });
    }
}