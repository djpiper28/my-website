package uk.co.djpiper28;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import static uk.co.djpiper28.StaticStrings.GITHUB_USER;

/**
 * gets the repos of djpiper28 and stores them in a list sorted by the index stars + forks
 *
 * @author Danny
 * @version 1.0.0
 * @see Repo
 */
public class MyRepos {

    private static final String GITHUB_ACCEPT_HEADER = "application/vnd.github.v3+json";
    /**
     * the time in ms to update the repo list. Current default is 10 minutes.
     */
    private static final long UPDATE_REPOS_EVER_X_MS = 1000L * 60L * 60L;
    /**
     * whether a daemon that updates the repos has been started
     */
    private boolean daemonStarted;
    /**
     * cached repos
     */
    private List<Repo> repos;

    /**
     * last time that the repo list was updated
     */
    private long lastUpdateTime;

    /**
     * inits the class and performs one refresh. The refresh performed here will fail silently.
     *
     * @since 1.0.0
     */
    public MyRepos() {
        this.lastUpdateTime = 0;
        this.repos = new LinkedList<>();
        this.daemonStarted = false;

        try {
            this.updateRepos();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * gets the api endpoint to get the repos for the {@link StaticStrings#GITHUB_USER user}
     *
     * @return the api endpoint
     */
    private static String getAPI_Endpoint() {
        return String.format("https://api.github.com/users/%s/repos", GITHUB_USER);
    }

    public boolean isDaemonStarted() {
        return daemonStarted;
    }

    /**
     * <b>only to be used for testing</b>
     *
     * @param daemonStarted new value for daemonStarted
     */
    public void setDaemonStarted(boolean daemonStarted) {
        this.daemonStarted = daemonStarted;
    }

    public long getLastUpdateTime() {
        return lastUpdateTime;
    }

    /**
     * <b>only to be used for testing</b>
     *
     * @param lastUpdateTime new value for last update time
     */
    public void setLastUpdateTime(long lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
    }

    /**
     * determines whether the repo list needs to be updated
     *
     * @return a boolean that is true when the list needs to be updated
     */
    public synchronized boolean needsUpdating() {
        return System.currentTimeMillis() - this.lastUpdateTime >= UPDATE_REPOS_EVER_X_MS;
    }

    /**
     * starts a thread to update the repo every {@link uk.co.djpiper28.MyRepos#UPDATE_REPOS_EVER_X_MS UPDATE_REPOS_EVER_X_MS} ms
     *
     * @throws IllegalStateException throws when a daemon to do this already started
     */
    public void startUpdateDaemon() {
        if (daemonStarted) {
            throw new IllegalStateException("A daemon for updating the repo list has already been started.");
        }

        /**
         * this creates a thread that polls the needs update method then updates if required
         */
        Thread updateThread = new Thread(() -> {
            boolean interrupt = false;
            while (!interrupt) {
                if (this.needsUpdating()) {
                    try {
                        this.updateRepos();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                } else {
                    try {
                        Thread.sleep(50);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                        interrupt = true; // Kill on interrupt
                        this.daemonStarted = false;
                    }
                }
            }
        }, "Repo update thread");

        updateThread.setDaemon(true);
        updateThread.setPriority(Thread.MIN_PRIORITY);
        updateThread.start();
        this.daemonStarted = true;
    }

    /**
     * tries to update the repo list with the github api
     *
     * @return a reference to the repos list. Do note that this.repos list is also updated.
     * @throws IOException thrown when the github servers cannot be accessed or an error code is received
     */
    public synchronized List<Repo> updateRepos() throws IOException {
        List<Repo> reposTmp = new LinkedList<>();

        try {
            Connection conn = Jsoup.connect(getAPI_Endpoint());
            conn.ignoreContentType(true);
            Document response = conn.header("Accept", GITHUB_ACCEPT_HEADER).get();
            String jsonRaw = response.text();

            JSONParser jsonParser = new JSONParser();
            JSONArray reposArr = (JSONArray) jsonParser.parse(jsonRaw);
            for (JSONObject obj : (Iterable<JSONObject>) reposArr) {
                String name = (String) obj.get("name");
                Repo r = new Repo(name,
                        (String) obj.get("description"),
                        String.format("https://github.com/%s/%s", GITHUB_USER, name),
                        (String) obj.get("language"),
                        (Long) obj.get("stargazers_count"),
                        (Long) obj.get("forks"),
                        (Boolean) obj.get("fork"));

                reposTmp.add(r);
            }
            Collections.sort(reposTmp);
        } catch (ClassCastException | ParseException e1) {
            e1.printStackTrace();
            throw new IOException("Github returned invalid json.");
        } catch (IOException e) {
            throw e;
        }

        if (reposTmp.size() == 0) throw new IOException("Github returned invalid data.");

        this.repos = reposTmp;
        this.lastUpdateTime = System.currentTimeMillis();
        return this.repos;
    }

    public synchronized List<Repo> getRepos() {
        return repos;
    }

    /**
     * <b>only to be used for testing</b>
     *
     * @param repos new value for repos
     */
    public synchronized void setRepos(List<Repo> repos) {
        this.repos = repos;
    }

    @Override
    public String toString() {
        return "MyRepos{" +
                "daemonStarted=" + daemonStarted +
                ", repos=" + repos +
                ", lastUpdateTime=" + lastUpdateTime +
                '}';
    }

}
