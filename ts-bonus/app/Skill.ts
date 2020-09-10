// @file /app/Skill.ts
// @info This is meant to be equivalent to CoreCompetency.java
import { JobField } from './JobField';

export class Skill extends JobField {
    constructor(value : string | undefined){
        super(value);
    }
    // @Override
    public equals(o : object) : boolean {
        if(this === o) return true;
        if(!(o instanceof Skill)) return false;
        let skill : Skill = <Skill>o;
        return this.getId() === skill.getId();
    }
};
