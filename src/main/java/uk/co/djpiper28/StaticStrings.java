package uk.co.djpiper28;

import java.io.IOException;
import java.util.Objects;

/**
 * static Strings for the web server class and my repos
 *
 * @author Danny
 * @version 1.0.0
 * @see WebServer
 * @see MyRepos
 */
public class StaticStrings {

    /**
     * the github user's user name
     */
    public static final String GITHUB_USER = "djpiper28";

    /**
     * Yes I publish my GPG certificate. And?
     */
    public static final String GPG_CERT = "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
            "Comment: User-ID:\t<dannypiper@computingsociety.co.uk>\n" +
            "Comment: a.k.a.:\t<devdannypiper@gmail.com>\n" +
            "Comment: a.k.a.:\t<zjac059@live.rhul.ac.uk>\n" +
            "Comment: a.k.a.:\t<djpiper28@github.com>\n" +
            "Comment: a.k.a.:\tDanny Piper <djpiper28@gmail.com>\n" +
            "Comment: Created:\t22/02/2021 10:24\n" +
            "Comment: Expires:\t22/02/2023 12:00\n" +
            "Comment: Type:\t4,096-bit RSA (secret key available)\n" +
            "Comment: Usage:\tSigning, Encryption, Certifying User-IDs, SSH Authentication\n" +
            "Comment: Fingerprint:\t5305EFA8C5F2B6D5CC1200E25E365B8F351ACB38\n" +
            "\n" +
            "mQINBGAzhkkBEAC/0ueXSeAAo/b7n15u6ClX2uB+rZxP3f1zXR/Ej7NmQEzi1zBc\n" +
            "EFdCudsLvYAYTtj50cKxPA4esuIFIpZRgscBNUSxl1Dftu1w4u74g1BwLdJJsGTC\n" +
            "ebISDyNqscsfd/zr0IQw79Qdk//qi+COrMd2p5ahZjwEsIi705YI7uClaZduY/cb\n" +
            "ihdfnqWC9LrVoMhUvhIZq1JxALLsQmHMDDylkZzSQsXLYAq1fjiN/Gg3btDpriv2\n" +
            "Cxbz8HT2jpLGCLyYUk4OTULgISN8IdLIZS9LBTt+d4jD+VVrcXuZRjKfrbQDTwq1\n" +
            "1DHkNffClA7aStOT2G9L4H5sgnfsXN7SFQJdQJvNKTO6iz9CrOIk1muo5/1CDF0c\n" +
            "1pvT5APcp4KOC7HfNgSjyYglpeyhezjCvuQShLnWk0RvW/vochpQhZg2i1OsAXjK\n" +
            "Qs3S0tGEyZDDfRjuFhUzOR51a72cG4L1AWx4VZjeSBEuWl1YL5e/hoVjfyE+eiv1\n" +
            "+4FEx9QeEuVkbx255xeAXBECPQ8cksWBtBa0J140sRwEyMIgvsvajgS16/JuJLxw\n" +
            "XdD5I+PtQ4fT2VaxK3mk1yBuE3COeyNGHi2Xiqg+cWTPm/2O9gmk0X101jz1kaUP\n" +
            "DBoPBdZOLr4K5P6DvEEdaSy2cl7FgnbKVkTZldzdkG7lg1cZI63lgO1wNQARAQAB\n" +
            "tBdkZXZkYW5ueXBpcGVyQGdtYWlsLmNvbYkCVAQTAQgAPhYhBFMF76jF8rbVzBIA\n" +
            "4l42W481Gss4BQJgZHF5AhsjBQkDwn13BQsJCAcCBhUKCQgLAgQWAgMBAh4BAheA\n" +
            "AAoJEF42W481Gss4W2gP/2kNbewSBbs+sh7XY60VYgPHZShohUZtL4ArQeObBhdd\n" +
            "/iWuLU4NGEMOcYliRG3QeSLk9gu2zRhai7Ro3FDDXVPdN/8PEfqbs/PM6fKivi7L\n" +
            "7C8p8C5iByYvIYVV6K0NEEXbcc7htv/GWkvTayDcI8NXRWpycstgBlFH+XRUKZwb\n" +
            "ZpAiDiCER7e1tyq48kQQ5iafl5Iz6XLdWzwP+J4yK1z4jQoOm8fDXQRWbsMa6lnl\n" +
            "ZoPQCqcS0AdFYR81FKGTdwxVfa3kzxflxhJPZ++gT7wKAhE31sF5bepdOMRTi8/C\n" +
            "URIb/OKTfqCkwqUpvMUNlNv+jOZ41CZcYpGtqrYmJQYvVtuyjv93Kq+cn4jTlTp7\n" +
            "2wYLWIzoVoTeozYlmqH+UQyedBIe5wOW5M9B3WG3f2TK3SDLsGqhOfJMyom050+8\n" +
            "JspNd95U4DYwK3HtCFJ+KX6TkBIqdOSj0EAE+rx5jYcW8G8sHs7xjWeEfdZeCR3R\n" +
            "rXqHfiRbKcDLvfqa10hKaMclJN+WJya4N/3PjaEkP1KV7a0s6+OhMr8sQ5Hm04J8\n" +
            "70/J81RZPCE6s/waVmPFDtpolHnhcqnYkn29MKY5ywNONHxwk1Azd5I1vU9O8CR/\n" +
            "cZa+j1QD1jc+9KLHXTmEqYE1IP9G+ezNTn25PTv9Wps26jv+Ya9/7kgJ0BDRp5+A\n" +
            "tBd6amFjMDU5QGxpdmUucmh1bC5hYy51a4kCVAQTAQgAPhYhBFMF76jF8rbVzBIA\n" +
            "4l42W481Gss4BQJgZHFwAhsjBQkDwn13BQsJCAcCBhUKCQgLAgQWAgMBAh4BAheA\n" +
            "AAoJEF42W481Gss4TjoP/01saQU2LruV14LPo4457HClto0zJ1/VHz6D5vHtNN4I\n" +
            "FkecLE5i/4EAhqb/NOQB9TAhJwNfmW1kPVVZoviQH7T6YtChSAGN4xhAMmyimyeH\n" +
            "XJE8cZh3CkfbZcvb+3a/hkwQeif5xbK1xHJyV1UNwCF5SNsmkBJiAKFf6vyo3Vsb\n" +
            "OmCvqPP8q2T808Vr6WhBfN0x5PdS/NaUXLbSu4UzBkiZ/m8bVb6xKPxpGekHSMp7\n" +
            "tVn/EMWAq3XptxKiA065eG4gQa8PI/NY1K782keYxhP0NIbTUm8oD6ihs1xocAiT\n" +
            "FhYEgAFLTuzm7Mn100aLrr2aCbX4WMrioqnPbFqPzNOigtR37Kqp7qjLOArqV/Uq\n" +
            "6LQ09b5EBfgCMzLDxMZCIwCQgNkaIPrfXl97oIvdbsIeQJl8/Lfuz3kxbcqAezXX\n" +
            "MfsD+JfXKJ8XJjQbGDV4o1IyCpqhGTCh2joqfc8eq9xRBLRulqtN+vm0rAoMVDVQ\n" +
            "EvegNHmbUU4OHKL4z3+COBBA1g6xNR0zL6uCOnD1e/V+lroceP7QNyniO2sqSIiC\n" +
            "Ve/svIKA0MgAGgGfNEQzDu0WBrLQSTw1YJ/6Q37WHG7ZAXiRkgo5wFbn7bAZYGcR\n" +
            "91qs0NNfwfRIZdh0Stgbiq4KXpX22T9Z87jvGynNTwJ7xqjlb2RPMP0tb1SgTZ3G\n" +
            "tBRkanBpcGVyMjhAZ2l0aHViLmNvbYkCVAQTAQgAPhYhBFMF76jF8rbVzBIA4l42\n" +
            "W481Gss4BQJgZHFjAhsjBQkDwn13BQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJ\n" +
            "EF42W481Gss4hpsQAIFUUD1kT7JI2/zSwUsFGhBBxk7IR+PYgdxMY4YxiTzHI8ez\n" +
            "A+J2qc8FjqyjVbvaKGCCmDsgPJ/Wi7lqkggIWFffxz5b3LQqIbhDHg69jGb6Wn91\n" +
            "TSFsW40g8PgkCZVaA/jf5oF/Ji9z68MrKVPl1hDANe1o70pdXzjS6+sDl0zeWmi9\n" +
            "wuYIjik+fdVVLXauLY0kDIrr+NgaTu6mPitYBNfmKTP9YohJRuXhWFVAJftxrvf6\n" +
            "NKeIvFFrLnBYPexHPh1UyYUf8SqZQKrjICW0SvHDDhDK1fYvok7sUUT4P7THIP9I\n" +
            "uM1McxerhGi5Y8difltwdjBJuZkdHx3uzlpag6SmQStGLjMOVVI5TkKpygkRXBHk\n" +
            "W148tTon3rPsWT9broA3nNDE8qs2bFbII71GvpOELCnpmTM6ENEla1D1Q22T7v3q\n" +
            "XC8ztLF9nffB7VCJn0zWByKOEjP3yFRULR1RKyaDBIoAxltXHAnfueFGukCJLkih\n" +
            "AGjhsm/pQ0GoGQLSLG3/FrPWITfIKT/vyKwQnBKwrSLSy9MiVHYzUnHTGvlTJGk3\n" +
            "sePYM+Sro0HbYLXIYMElpt3tJ1QcfRXcYujwFlZbOXvWCHrSI3+gkM1P97K/hEyL\n" +
            "IY+qqYsNcQHWM8IDuIVpG5ar8q7p0hRw27qFtmeajcvw6dVBuo0tNqpr+c5ztCFE\n" +
            "YW5ueSBQaXBlciA8ZGpwaXBlcjI4QGdtYWlsLmNvbT6JAlQEEwEIAD4WIQRTBe+o\n" +
            "xfK21cwSAOJeNluPNRrLOAUCYDOGSQIbIwUJA8J9dwULCQgHAgYVCgkICwIEFgID\n" +
            "AQIeAQIXgAAKCRBeNluPNRrLOEnlD/0Ux90748v3vB/FRx6Tg5eIvfx+LiHTj8EA\n" +
            "SnifQfkdcMlPfLjvBMjDPBYjs+btv9bz8fLKR8dK4OpiisBVQtD5IJ1e1eLYLdxw\n" +
            "cdsFhrStiSTLe7JvPUvZSuaMdBMLkRRe11mI+ffEtvzj+2+ygiQEMuYZ+S/wAtA0\n" +
            "RJ9KJGF89kmh/55gIxQZvLlnJElvxl+zahJlBs8MPykP5EM4v/5GyKOzqUfzA7qH\n" +
            "oFAJeVbi/qiQAiy25SIDlxZ6fGA06Glw+xtpGF7Yz5taHGHmJfD+Wt8PaGDkzhjw\n" +
            "ZTX4nRqjffXWAF4N1mqYDqYb9kcJPHCvUUaOerkpSbu08lXgj6+Yl6KPnfUoqlNM\n" +
            "Dso98cLjHB1niJGfPc7IKwMuKI03+OtolxfBPcqJPAF41n80HzoWr+rULjCindH7\n" +
            "9AcuS7rarUXMwjz0AHTBZ/Z48c79NmU9eOP7Q+W/3ifAlZVDXkhQKxTU+Y/meZxz\n" +
            "JimI7ZflHzLzi/5R0vo9PKcXrvKAeXZIf0QCyJ3T6kOR61jbF9EYnTeDN3td4u3b\n" +
            "vC2e26+FZfe++m4zhDu0spn8Zz3S7Beu6oi0oAPvlH9MJIdd/1t8SBCk6qyOFzYo\n" +
            "AIZVBu0rV4gwSBME0ly9Vlf64PQVu1n2ZvcamZfEi1iUsrMPkxYIpHjAa0WLn47m\n" +
            "pFtsGEIbpLQhZGFubnlwaXBlckBjb21wdXRpbmdzb2NpZXR5LmNvLnVriQJUBBMB\n" +
            "CAA+FiEEUwXvqMXyttXMEgDiXjZbjzUayzgFAmGO1SQCGyMFCQPCfXcFCwkIBwIG\n" +
            "FQoJCAsCBBYCAwECHgECF4AACgkQXjZbjzUayzgyKg//WHuJ2LZ0SzYJSKZyql09\n" +
            "/FvL46za4be8+Lu1Op1HLXvzUdYXTC241mmn0Qwbd2uySe6lVULv3BPGOLF0PNEc\n" +
            "T5cEF9RQlp6ZcLMGewapaQd7720372sqGb/ab7lcdzQaA35aROs58o2hdPf+AaXP\n" +
            "MH0ZkR3pofg+SRiD2KdL/21n2YtE/1521QzaRajojRgtL5TrDk7LSC1fEyow5D/s\n" +
            "JSWWPQwozXcigwUoC+cd2njfVj5HTwbS+OiF2RdyboQqzNwete+PwU8SXTAI7r1K\n" +
            "juTJ02T7+4Ayt9Ikbpz3U3J/77e0oVN+mqdiz1gB1Mxxk2ZU0MYstuBTcE+YCOOt\n" +
            "070BuyQtIQxpnY3kpq15IhGgV3++MfiHjEpWP+g0Qrlx2HizRXdf6OGUDvhtP7iU\n" +
            "h+MGJaDCrebPtn9sowNSIfIn2KloicbZrYklpLsWnOeE0WAqTWW+fk/i80unSpo9\n" +
            "v5WrkyHSKyj2WCkvWMyATX75e419kSZhmjoBf6bpCK7IzM6WlNNU+HOLj+jNBk1H\n" +
            "G+bZkr4djm+2OEBGjBXUK9jXBgGcVm8b13Kiehp0gXx3Bol4dyopWOMWPrh4VuJa\n" +
            "wLESMcFUuSbyN4Z0t7bP4DO+qQfPmRAJ0xHdSBlg0xZXIC1FGZWi5jPvHxHQL3B5\n" +
            "VU/c3r/9xdLPkbmEe0w4j565Ag0EYDOGSQEQAMQvec+/xqet4DV+GPNLQdhlMPfP\n" +
            "P5atOcUDWGcRNW44U9rvUIDkbx/dJEFB4Bm+dgtoOWQLVfCiLQ+SNfPzNs6B3N4s\n" +
            "ryHAz4WrZ9CBNvrJds681YU3N5yUQDSnKLxiCbB2N991BR7zQOFUCd7hVRQ1KBk3\n" +
            "pEFFPnjpLet+qNCGVhLNgLkLbtXHO1BYMpawVMPvbCgCmG4UqHzuT/UpJkL9Vyo3\n" +
            "y+iI9phm4igRiMmTNDXLHesuNAqTQYBZFPSrDLzqrqnGuYFrcQVZCI9m2pq6PEMz\n" +
            "dsUwLBcwT9cqRowYxnuP9pxiZm+pkzxPFlkWbic9Y3fXzVwPnsQGAuHbxk/KfvXn\n" +
            "V6nt8IqDLx1zF25bFojBMiU6M6r/j80gH/mh5MYw3cNA5TfKUd3DGB+91GxVg1UJ\n" +
            "lClXlIWWlEhgikvSVe6KARKJDhrYDTgGkMv6zpHzJ4t+lblbV0zChq/g8p4Ww0Wz\n" +
            "IRQWiGEvmmG+p0xvsTlJHobbIAFYaP/ItyHy5LqVoHfuK7hIvFTpZrNfdKWOWtRN\n" +
            "zbD83dCKMTodGt+foPE35n/8kEA06whQ/JYUKf3EvHuC1Qijq1dX5s/5S6c9+ARS\n" +
            "RFhfr0qb2qFVsdtvHqV3nzZs04dwRnUvkxZtEwnS5MDLzI7pXvxxxCrLlng+sl/m\n" +
            "P/H/SJvzIaQEEXG1ABEBAAGJAjwEGAEIACYWIQRTBe+oxfK21cwSAOJeNluPNRrL\n" +
            "OAUCYDOGSQIbDAUJA8J9dwAKCRBeNluPNRrLOHz3EAC5azFXnFSJd7DbtRVYhRQ3\n" +
            "Uy1gVg3NrROfezn+rIKSULybYl8dWdwA5KIPa+rLbSwMU8LyiqqDuLZ2uM+bzdFp\n" +
            "sbMZxTqWOp7FKxz07Xr6fqO9PGao7uKFiXC/89yCPycFU1dqv31sMpsIOdMPhjMD\n" +
            "w4x3LXhNbyC9F252Le+K+Fh8GVOih8VWm9/6kv3D9GWiGxWaeQ4qvrovSjyVulCF\n" +
            "1+UxS+xg5uL/Ng54TCROQ8rFY44R2FPwwUiSosXYxuKowRKQcths1Yl/jyztxDaX\n" +
            "dnuk0rxUni0WPerQZIiyayiPlN6V4QuQItKRi03vHtuM4cJIt/U/afbzkbZi7sLG\n" +
            "5TlzfXIUHyjWHq8JGHo5r5OJ0bKsLlbElNsAlePzSaSMegoFFOJhQSDk802dFuRb\n" +
            "0ZGNdRPbnUOAGYdwJhgjXwzcW3BPqU16FJvyincnhHSXc8B6G7WnfWloIZ4JdoJX\n" +
            "AmDN2UbIMM40/za7g6DgmsW9EDab5j8RHyvRpqwtp/BO/2TbnlRCX/9yJ/QO6trj\n" +
            "1bgl/PvTZ9LCabBHyWZcgFRYjksYiOxD0G0gY3+A4TQR/koEGcTtR1LvaudmZmK3\n" +
            "zpOGdquqnzVLxU2JqjSLmcuRTXkkZlfs3+pBJcLDrssPFS9hBVcxwERZ+ehRc0ny\n" +
            "t8GS5Hjl/Y+EmNZiZtakZw==\n" +
            "=3vpb\n" +
            "-----END PGP PUBLIC KEY BLOCK-----\n";

    /**
     * style sheet for the entire website
     */
    public static String STYLE_SHEET = "IO ERROR ON LOAD";

    static {
        try {
            STYLE_SHEET = new String(Objects.requireNonNull(StaticStrings.class.getResource("/global.css")).openStream().readAllBytes());
        } catch (IOException e) {
            e.printStackTrace();
            System.exit(13);
        }
    }

    /**
     * JS to show and hide my repos
     */
    public static final String JS_SHOW_HIDE_REPOS = "<script type=\"text/javascript\">\n" +
            "function show() {\n" +
            "    let button = document.getElementById(\"showhiderepos\");\n" +
            "    button.outerHTML = \"<button id=\\\"showhiderepos\\\" class=\\\"wide-button\\\" onclick=\\\"hide()\\\">Hide Repos</button>\";\n" +
            "    \n" +
            "    let repos = document.getElementById(\"repos\");\n" +
            "    repos.classList.remove('hidden');\n" +
            "}\n" +
            "function hide() {\n" +
            "    let button = document.getElementById(\"showhiderepos\");\n" +
            "    button.outerHTML = \"<button id=\\\"showhiderepos\\\" class=\\\"wide-button\\\" onclick=\\\"show()\\\">Show Repos</button>\";\n" +
            "    \n" +
            "    let repos = document.getElementById(\"repos\");\n" +
            "    repos.classList.add('hidden');\n" +
            "}\n" +
            "</script>";

    /**
     * this is the constant for the year number as seen in {@link StaticStrings#ABOUT_ME_HTML ABOUT_ME_HTML}
     */
    public static final String YEAR_NUMBER = "second";

    /**
     * the HTML for the about me blurb under my mugshot
     */
    public static String ABOUT_ME_HTML = "IO ERROR ON LAUNCH";

    static {
        try {
            ABOUT_ME_HTML = new String(Objects.requireNonNull(StaticStrings.class.getResource("/index.html")).openStream().readAllBytes());
        } catch (IOException e) {
            e.printStackTrace();
            System.exit(13);
        }
    }

    /**
     * this is a utils class so cannot be initialised
     */
    private StaticStrings() {
        System.out.println("mmmmmmmmmmmmmmmmmmm calling me for no reason you are");
        System.out.println("Leo was here");
        System.exit(69);
    }
}
