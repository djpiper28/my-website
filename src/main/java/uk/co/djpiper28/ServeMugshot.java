package uk.co.djpiper28;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Random;

/**
 * sends my mugshot to the website user :(
 *
 * @author Danny
 * @version 1.0.0
 */
public class ServeMugshot extends HttpServlet {

    private static final Random random = new Random();
    private static final String[] suffixes = {"", "2", "3"};

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String suffix = suffixes[random.nextInt(suffixes.length)];
        String name = String.format("images/mugshot%s.jpg", suffix);

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

