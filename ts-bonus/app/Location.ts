// @file /app/Location.ts
import { JobField } from './JobField';

export class Location extends JobField {
    constructor(value : string | undefined){
        super(value);
    }
    // @Override
    public equals(o : object) : boolean {
        if(this === o) return true;
        if(!(o instanceof Location)) return false;
        let location : Location = <Location>o;
        return this.getId() === location.getId();
    }
};
