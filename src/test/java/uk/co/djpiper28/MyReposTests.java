package uk.co.djpiper28;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import java.io.IOException;

public class MyReposTests {
    private static MyRepos repos;

    @Before
    public void testInit() {
        repos = new MyRepos();
        assert(repos.getRepos().size() > 0);
    }

    @Test
    public void testNeedsRefresh() {
        repos.setLastUpdateTime(0);
        assert(repos.needsUpdating());

        repos.setLastUpdateTime(System.currentTimeMillis());
        assert(!repos.needsUpdating());
    }

    @Test
    public void testUpdate() throws IOException {
        repos.setRepos(null);
        assert(repos.updateRepos().size() > 0);
        repos.getRepos().forEach(x -> System.out.println(x.toString()));
    }

    @After
    public void testStartDaemon() throws Exception {
        repos.setDaemonStarted(true);
        try {
            repos.startUpdateDaemon();
            throw new Exception("Expected an IllegalStateException when trying to start the daemon twice");
        } catch (IllegalStateException e) {
            /* Expected */
        }

        repos.setDaemonStarted(false);
        repos.startUpdateDaemon();
    }
}
