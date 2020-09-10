// @file /app/PositionType.ts
import { JobField } from './JobField';

export class PositionType extends JobField {
    constructor(value : string){
        super(value);
    }
    // @Override
    public equals(o : object) : boolean {
        if(this === o) return true;
        if(!(o instanceof PositionType)) return false;
        let that : PositionType = <PositionType>o;
        return this.getId() === that.getId();
    }
};
