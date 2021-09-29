package uk.co.djpiper28;

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
     * style sheet for the entire website
     */
    public static final String STYLE_SHEET = "<style>\n" +
            ".centered {\n" +
            "     text-align: center;\n" +
            "}\n" +
            ".github-repo {\n" +
            "    margin-top: 10px;\n" +
            "    margin-bottom: 10px;\n" +
            "    background: lightgray;\n" +
            "    padding: 1px;\n" +
            "}\n" +
            ".github-repo-inner {\n" +
            "    display: flex;\n" +
            "    flex-flow: row wrap;\n" +
            "    margin-left: 25px;\n" +
            "    margin-right: 25px;\n" +
            "}\n" +
            ".github-repo-content {\n" +
            "    padding: 5px;\n" +
            "}\n" +
            ".fork {\n" +
            "    color: black;\n" +
            "    word-wrap: break-word;\n" +
            "}\n" +
            ".hidden {\n" +
            "    height: 0px;\n" +
            "    display: none;\n" +
            "}\n" +
            ".wide-button {\n" +
            "  width: 100%;\n" +
            "  background: orange;\n" +
            "  border: 0px;\n" +
            "  text-color: black;\n" +
            "  font-size: 20px;\n" +
            "}\n" +
            ".img-center {\n" +
            "  display: block;\n" +
            "  margin-left: auto;\n" +
            "  margin-right: auto;\n" +
            "  width: 20%;\n" +
            "}\n" +
            ".middle-text {\n" +
            "  margin-left: auto;" +
            "  margin-right: auto;" +
            "  width: 80%;\n" +
            "  font-size: 20px;\n" +
            "  text-align: center;\n" +
            "}\n" +
            "</style>\n";

    /**
     * JS to show and hide my repos
     */
    public static final String JS_SHOW_HIDE_REPOS = "<script>\n" +
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
    public static String YEAR_NUMBER = "second";

    /**
     * the HTML for the about me blurb under my mugshot
     */
    public static String ABOUT_ME_HTML = "<p class=\"middle-text\">\n" +
            "Hello! I am Danny Piper (they/them) and, I am a student at Royal Holloway studying an embedded master in Computer Science\n" +
            "(Information Security). I am currently in my " + YEAR_NUMBER + " and enjoying it.<br>\n" +
            "I am an avid programmer and mainly program in Python, Java and, C. In-fact, this website is built with Java and Jetty,\n" +
            "Although I do prefer C for programming these days.<br>\n" +
            "I am passionate linux user and FOSS fan; I have been contributing in the MTG community lately to produce better " +
            "software for running tournaments (see <a href=\"https://gitlab.com/monarch3\">monarch3's</a> gitlab page " +
            "and <a href=\"https://github.com/djpiper28/CockatriceTournamentBot\">my cockatrice bot's</a> (I call this tricebot) github page to" +
            "see some of these softwares). I have been working with monarch3 for a while now (since around late February 2021) " +
            "and have been  actively working on <a href=\"https://gitlab.com/monarch3/SquireBot\">Squire Bot</a>, which " +
            "just so happens to live on this server along with tricebot.<br>\n" +
            "Lately I have been getting into system administration and hosting; to help me with this I brought a second hand " +
            "server off of eBay (a Dell PowerEdge R520 with 32 GiB for those who are interested). Unfortunately for me I have " +
            "to sleep in the same room as my server. But it is worth it because it means that I can continue learning about " +
            "hosting and system administration.<br>\n" +
            "Apart from computers and linux, I am also a fan of miniatures (painting and building Warhammer 40k usually), " +
            "listening to power/industrial metal and drinking coffee.<br><br>\n" +
            "You can contact me via email (devdannypiper@gmail.com)<br>\n" +
            "Or via discord (Danny P.#6969)<br>" +
            "But please don't spam me." +
            "</p>";

    /**
     * this is a utils class so cannot be initialised
     */
    private StaticStrings() {
        System.out.println("mmmmmmmmmmmmmmmmmmm calling me for no reason you are");
        System.exit(69);
    }
}
