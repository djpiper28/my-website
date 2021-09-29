package uk.co.djpiper28;

import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.servlet.ServletHandler;
import org.eclipse.jetty.util.thread.QueuedThreadPool;

import javax.servlet.http.HttpServlet;
import java.util.List;

/**
 * this has all the code for the web server
 *
 * @author Danny
 * @version 1.0.0
 * @see Main
 * @see MyRepos
 * @see Repo
 */
public class WebServer {

    private static final int MAX_THREADS = 100;
    private static final int MIN_THREADS = 10;
    private static final int IDLE_TIMEOUT = 120;
    /**
     * this is a static reference to the web server for the servlets to get the data that they need
     */
    protected static WebServer webServer;
    private final MyRepos repos;


    /**
     * inits the servlet, the repo list and the repo updater
     *
     * @param ipAddress ip address to bind to
     * @param port      port to bind to
     * @throws Exception thrown by the Server object
     * @see MyRepos
     * @see HttpServlet
     * @see Server
     * @see Connector
     */
    public WebServer(String ipAddress, int port) throws Exception {
        super();
        this.repos = new MyRepos();
        this.repos.startUpdateDaemon();
        WebServer.webServer = this;

        QueuedThreadPool threadPool = new QueuedThreadPool(MAX_THREADS, MIN_THREADS, IDLE_TIMEOUT);
        Server server = new Server(threadPool);

        ServerConnector connector = new ServerConnector(server);
        connector.setPort(port);
        connector.setHost(ipAddress);
        server.setConnectors(new Connector[]{connector});

        ServletHandler servletHandler = new ServletHandler();
        servletHandler.addServletWithMapping(WebsiteServlet.class, "/");
        servletHandler.addServletWithMapping(WebsiteServlet.class, "/index/");

        servletHandler.addServletWithMapping(ServeMugshot.class, "/mugshot");
        servletHandler.addServletWithMapping(ServeMugshot.class, "/mugshot.jpg");
        server.setHandler(servletHandler);

        server.start();
        server.join();
    }

    public List<Repo> getRepos() {
        return this.repos.getRepos();
    }
}

