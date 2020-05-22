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
    Job awesome_job = new Job(
            "Product tester",
            new Employer("ACME"),
            new Location("Desert"),
            new PositionType("Quality control"),
            new CoreCompetency("Persistence")
    );

    @Test
    public void testSettingJobId(){
        Job mirco_center_job_1 = new Job();
        Job micro_center_job_2 = new Job();

        assertEquals(false,mirco_center_job_1.getId() == micro_center_job_2.getId() );
        assertEquals(1, micro_center_job_2.getId() - mirco_center_job_1.getId());
    }

    @Test
    public void testJobConstructorSetsAllFields(){
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
    public void testForNewLines(){
        assertEquals(0,awesome_job.toString().indexOf("\n"));
        assertEquals( awesome_job.toString().length()-1, awesome_job.toString().lastIndexOf("\n"));
    }

    @Test
    public void testForToString(){
        Job empty_job = new Job();
        String dna = "Data not available";
        String expected = "\n" +
                "ID: " + 2 + "\n" +     /* I empty_job.getId() */
                "Name: " + dna + "\n" +
                "Employer: " + dna + "\n" +
                "Location: " + dna + "\n" +
                "Position Type: " + dna + "\n" +
                "Core Competency: " + dna + "\n";
        //System.out.println(empty_job.getCoreCompetency());
        //assertEquals(dna, empty_job.getEmployer().toString());
        assertEquals(expected,empty_job.toString());
    }

    @Test
    public void testForLocation(){
        assertEquals("Desert",awesome_job.getLocation().getValue());
    }

    @Test
    public void testForAllFieldPopulation(){
        String expected = "\n" +
                "ID: " + 1 + "\n" +     /* I empty_job.getId() */
                "Name: " + "Product tester" + "\n" +
                "Employer: " + "ACME" + "\n" +
                "Location: " + "Desert" + "\n" +
                "Position Type: " + "Quality control" + "\n" +
                "Core Competency: " + "Persistence" + "\n";
        assertEquals(expected,awesome_job.toString());
    }

}