package uk.co.djpiper28;

/**
 * inits the repo list and starts the web server
 *
 * @author danny
 * @version 1.0.0
 */
public class Main {

    /**
     * inits and starts the web server
     *
     * @param ipAddress ip address for spring boot to bind to
     * @param port      port for spring boot to bind to
     * @throws Exception thrown when a fatal error occurs
     * @since 1.0.0
     */
    public static void startWebServer(String ipAddress, int port) throws Exception {
        WebServer ws = new WebServer(ipAddress, port);
    }

    /**
     * reads the arguments, inits the spring bootloader and, then passes control flow to spring boot
     *
     * @param args arguments for the program. See the summary for help.
     *             <table>
     *             <caption>Arguments table.</caption>
     *             <tr><th>Index</th><th>Usage</th></tr>
     *             <tr><td>[0]</td><td>ip address to bind to</td></tr>
     *             <tr><td>[1]</td><td>port to bind to</td></tr>
     *             </table>
     * @throws Exception thrown by the web server when a fatal error occurs
     * @since 1.0.0
     */
    public static void main(String[] args) throws Exception {
        String ipAddress = "127.0.0.1";
        int port = 8001;

        // Parse arguments
        if (args.length == 0) {
            System.out.println("djpiper28.co.uk web server usage:");
            System.out.println("\targ 0\tbind address");
            System.out.println("\targ 1\tport address");
            System.out.printf("Binding server to %s:%d by default.\n", ipAddress, port);
        }

        if (args.length >= 1) {
            ipAddress = args[0];
        }
        if (args.length >= 2) {
            try {
                port = Integer.parseInt(args[1]);
            } catch (Exception e) {
                System.out.printf("Unable to read port '%s'\n", args[1]);
                System.exit(1);
            }
        }
        for (int i = 2; i < args.length; i++)
            System.out.printf("Argument '%s' has been ignored.\n", args[1]);

        // Init web server
        System.out.printf("Starting web server on '%s:%d'", ipAddress, port);
        startWebServer(ipAddress, port);

        // A crash happened I guess
        System.err.println("Error - the program has left jetty's control flow");
        System.exit(13);
    }

}
