import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAddition() {
        Calculator cal = new Calculator();
        int result = cal.add(10, 20);
        assertEquals(30, result);
    }
}