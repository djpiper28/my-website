package uk.co.djpiper28;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * sends my mugshot to the website user :(
 *
 * @author Danny
 * @version 1.0.0
 */
public class ServeMugshot extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String name = String.format("images/mugshot%s.jpg", System.currentTimeMillis() % 100 == 0 ? "2" : "");

        try (InputStream is = ServeMugshot.class.getClassLoader().getResourceAsStream(name)) {
            // it is the responsibility of the container to close output stream
            OutputStream os = response.getOutputStream();

            if (is == null) {
                response.setContentType("text/plain");
                os.write("Failed to send image".getBytes());
                System.err.printf("Error reading image %s from resources stream.\n", name);
            } else {
                response.setContentType("image/jpeg");

                byte[] buffer = new byte[1024];
                int bytesRead;

                while ((bytesRead = is.read(buffer)) != -1) {

                    os.write(buffer, 0, bytesRead);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}

