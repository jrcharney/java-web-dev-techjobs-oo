// @file: /app/Job.ts
import { Employer } from './Employer';
import { Location } from './Location';
import { PositionType } from './PositionType';
import { Skill } from './Skill';

// TODO: export these later
type KeyValue = { key : string, value : any | undefined };

export class Job {
    private id : number;
    private static nextId : number = 1;

    private name : string;
    private employer : Employer;
    private location : Location;
    private positionType : PositionType;
    private skill : Skill;

    /*
    constructor(){
        this.id = nextId++;
    }
    */
    constructor(
        name? : string | undefined,
        employer? : Employer | undefined,
        location? : Location | undefined,
        positionType? : PositionType | undefined,
        skill? : Skill | undefined
        ){
        //this();
        this.id = Job.nextId++;

        this.name = name;
        this.employer = employer;
        this.location = location;
        this.positionType = positionType;
        this.skill = skill;
    }

    // @Override
    public equals(o : object) : boolean {
        if(this === o) return true;
        if(!(o instanceof Job)) return false;
        let job : Job = <Job>o;
        return this.getId() === job.getId();
    }

    // TODO: What is the equivalent of `Objects.hash(getId());`?
    // @Override
    // public hashCode() : int { return Objects.hash(this.getId()); }

    public getId() : number { return this.id; }

    //public setName(name : string) : void { this.name = name; }
    public setName(name : string) : this { this.name = name; return this; }
    public getName() : string { return this.name; }

    //public setEmployer(employer : Employer) : void {this.employer = employer; }
    public setEmployer(employer : Employer) : this {this.employer = employer; return this; }
    public getEmployer() : Employer { return this.employer; }

    //public setLocation(location : Location) : void {this.location = location; }
    public setLocation(location : Location) : this {this.location = location; return this; }
    public getLocation() : Location { return this.location; }

    //public setPositionType(positionType : PositionType) : void {this.positionType = positionType; }
    public setPositionType(positionType : PositionType) : this {this.positionType = positionType; return this; }
    public getPositionType() : PositionType { return this.positionType; }

   //public setSkill( skill : Skill ) : void {this.skill = skill; }
   public setSkill( skill : Skill ) : this {this.skill = skill; return this;}
   public getSkill() : Skill { return this.skill; }

    // @Override
    public toString() : string {
        const dna = "Data not available";

        //: Record<string,any>
        // TODO: let fields : object = new Map<string, any | undefined>();
        // Or should it be any | null?
        let fields = new Map<string, any | undefined>([
            ["ID"            , this.id],
            ["Name"          , this.name],
            ["Employer"      , this.employer],
            ["Location"      , this.location],
            ["Position Type" , this.positionType],
            ["Skill"         , this.skill]
        ]);

        // NOTE: When we want to use our data from Maps, we need to convert them to arrays using Array.from()
        // Find the length of the longest key
        let longest : number = Array.from(fields.keys()).reduce( (acc,idx) => acc.length > idx.length ? acc : idx, "").length;
        // Print out our records in a spaced format.
        let results : string = Array.from(fields.entries()).map(([label,field]) => `${label.padEnd(longest)} : ${(field === null) ? dna : field}`).join(`\n`);
        /*
        // I'll kee this as a comment but here is what is happening.
        let results : string = Array.from(fields.entries()).map(([name,value]) => {
            let label : string = name.padEnd(longest.length); // Note: The default character for padEnd is the space
            let field : any    = (value === null) ? dna : value;
            return `${label} : ${field}`;
        }).join(`\n`);
        */
        return `\n${results}\n`;
    }
}
