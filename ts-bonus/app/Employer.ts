// @file /app/Employer.ts
import { JobField } from './JobField';  // Note: Imports don't need file suffixes. It will assume there's a .ts/.js file.

export class Employer extends JobField {
    /*
    constructor(){
        super();
    }
    */
    constructor(value? : string | undefined){
        super(value);
    }

    // @Override
    public equals(o : object){
        if(this === o) return true;
        if(!(o instanceof Employer)) return false;
        let employer : Employer = <Employer>o;
        return this.getId() === employer.getId();
    }
}
