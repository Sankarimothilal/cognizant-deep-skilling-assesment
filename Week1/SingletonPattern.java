class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("Logger created");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println(message);
    }
}

public class SingletonPattern {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("App started");
        logger2.log("User logged in");

        if (logger1 == logger2) {
            System.out.println("Same logger object");
        } else {
            System.out.println("Different logger objects");
        }
    }
}