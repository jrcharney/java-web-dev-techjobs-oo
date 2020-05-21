package org.launchcode.techjobs_oo;

import java.util.Objects;

public abstract class JobField {
    protected int id;
    protected static int nextId = 1;
    protected String value;

    public JobField(){
        id = nextId;
        nextId++;
    }

    public JobField(String value){
        this();
        this.value = value;
    }

    public int getId(){
        return this.id;
    }

    public void setValue(String value){
        this.value = value;
    }
    public String getValue(){
        return this.value;
    }

    @Override
    public String toString(){
        if( this.value == null ||  this.value.isEmpty() ){
            return "Data not available";
        } else {
            return this.value;
        }
    }

    @Override
    public int hashCode(){
        return Objects.hash(getId());
    }
}
