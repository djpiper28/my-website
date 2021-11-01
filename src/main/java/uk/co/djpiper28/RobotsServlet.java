package uk.co.djpiper28;

import javax.servlet.AsyncContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;

/**
 * the robots.txt servlet
 *
 * @version 1.0.0
 * @author Danny
 */
public class RobotsServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        WebServer ws = WebServer.webServer;
        StringBuilder sb = new StringBuilder();
        for (Repo repo : WebServer.webServer.getRepos())
            sb.append(repo.getHTML());

        ByteBuffer content = ByteBuffer.wrap("User-agent: *\nDisallow:/\n".getBytes(StandardCharsets.UTF_8));

        AsyncContext async = req.startAsync();
        ServletOutputStream out = resp.getOutputStream();
        out.setWriteListener(new WriteListener() {
            @Override
            public void onWritePossible() throws IOException {
                while (out.isReady()) {
                    if (!content.hasRemaining()) {
                        resp.setStatus(200);
                        async.complete();
                        return;
                    }
                    out.write(content.get());
                }
            }

            @Override
            public void onError(Throwable t) {
                getServletContext().log("Async Error", t);
                async.complete();
            }
        });
    }

}
