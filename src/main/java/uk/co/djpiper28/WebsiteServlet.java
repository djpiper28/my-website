package uk.co.djpiper28;

import org.eclipse.jetty.util.Jetty;

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
 * the index servlet
 *
 * @version 1.0.0
 * @author Danny
 */
public class WebsiteServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        WebServer ws = WebServer.webServer;
        StringBuilder sb = new StringBuilder();
        for (Repo repo : WebServer.webServer.getRepos())
            sb.append(repo.getHTML());

        String response = String.format("<!DOCTYPE html><html><head>\n" +
                        "<meta charset=\"UTF-8\">\n" +
                        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
                        "<meta property=\"og:title\" content=\"Danny Piper's Website\" />\n" +
                        "<meta property=\"og:description\" content=\"My really bad website.\" />\n" +
                        "<meta property=\"og:type\" content=\"website\" />\n" +
                        "<meta property=\"og:url\" content=\"https://www.djpiper28.co.uk/\" />\n" +
                        "<meta property=\"og:image\" content=\"https://www.djpiper28.co.uk/mugshot.jpg\" />\n" +
                        "<meta name=\"theme-color\" content=\"#D48400\" />\n" +
                        "<title>Danny Piper</title>\n" +
                        "%s%s\n" + //Style sheet + show hide js
                        "</head>\n" +
                        "<body>\n" +
                        "<h1 class=\"centered\">Danny Piper - www.djpiper28.co.uk</h1>\n" +
                        "<img class=\"img-center\" src=\"/mugshot.jpg\" alt=\"a mugshot of Danny Piper's grumpy face\" />\n" +
                        "%s\n" + // About me
                        "<a href=\"https://github.com/anuraghazra/github-readme-stats\">\n" +
                        "  <img align=\"center\" src=\"https://github-readme-stats.vercel.app/api/top-langs/?username=djpiper28&theme=dark\" />\n" +
                        "</a>\n" +
                        "<a href=\"https://github.com/anuraghazra/github-readme-stats\">\n" +
                        "  <img align=\"center\" src=\"https://github-readme-stats.vercel.app/api?username=djpiper28&show_icons=true&theme=dark\" />\n" +
                        "</a>" +
                        "<button id=\"showhiderepos\" class=\"wide-button\" onclick=\"show()\">Show Repos</button>\n" +
                        "<div id=\"repos\" class=\"hidden\">\n" +
                        "%s\n" + //Repo HTML
                        "</div>" +
                        "<br>\n" +
                        "<h2 class=\"centered\">Danny Piper's Website | %s | <a href=\"https://github.com/%s\">My Github</a> | " +
                        "<a href=\"https://github.com/%s/my-website\">Website Repo</a></h2>\n" + // Jetty + github user + github user
                        "</body>\n" +
                        "</html>",
                StaticStrings.STYLE_SHEET, StaticStrings.JS_SHOW_HIDE_REPOS,
                StaticStrings.ABOUT_ME_HTML,
                sb,
                Jetty.POWERED_BY, StaticStrings.GITHUB_USER, StaticStrings.GITHUB_USER);
        ByteBuffer content = ByteBuffer.wrap(response.getBytes(StandardCharsets.UTF_8));

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
