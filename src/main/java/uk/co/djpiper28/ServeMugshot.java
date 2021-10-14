package uk.co.djpiper28;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

/**
 * sends my mugshot to the website user :(
 *
 * @author Danny
 * @version 1.0.0
 */
public class ServeMugshot extends HttpServlet {

    private final Random random;
    private final List<byte[]> images;

    public ServeMugshot() {
        this.random = new Random();
        this.images = new LinkedList<>();

        // Load images into images list (most common at the end)
        this.addImage("mugshot3.png");
        this.addImage("mugshot2.jpg");
        this.addImage("mugshot.jpg");
    }

    private void addImage(String name) {
        try (InputStream is = ServeMugshot.class.getClassLoader().getResourceAsStream(name)) {
            byte[] b = is.readAllBytes();
            this.images.add(b);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private byte[] getImage() {
        int index = (int) Math.floor(Math.abs(1 / random.nextFloat()));
        if (index >= images.size())
            return this.images.get(0);
        return this.images.get(index);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        try {
            OutputStream os = response.getOutputStream();
            os.write(this.getImage());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}

