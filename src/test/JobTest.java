package test;

// Since we're in a different branch, we need to import our code.
import org.launchcode.techjobs_oo.*;

// All these are JUnit 4
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

// This is JUnit 5
//import static org.junit.jupiter.api.Assertions.*;

// Make sure your Test class is public!
public class JobTest {
    @Test
    public void testJobConstructorSetsAllFields(){
        Job awesome_job = new Job(
                "Product tester",
                new Employer("ACME"),
                new Location("Desert"),
                new PositionType("Quality control"),
                new CoreCompetency("Persistence")
        );
        assertTrue(awesome_job instanceof Job);
    }
    @Test
    public void testJobsForEquality(){
        Job mirco_center_job_1 = new Job(
                "Clerk",
                new Employer("Micro Center"),
                new Location("Brentwood, MO"),
                new PositionType("Full Time"),
                new CoreCompetency("Sales")
        );
        Job micro_center_job_2 = new Job(
                "Clerk",
                new Employer("Micro Center"),
                new Location("Brentwood, MO"),
                new PositionType("Full Time"),
                new CoreCompetency("Sales")
        );

        assertEquals(false,mirco_center_job_1.equals(micro_center_job_2));
    }
    @Test
    public void testFOrNewLines(){
        Job awesome_job = new Job(
                "Product tester",
                new Employer("ACME"),
                new Location("Desert"),
                new PositionType("Quality control"),
                new CoreCompetency("Persistence")
        );
        assertEquals(0,awesome_job.toString().indexOf("\n"));
    }
}