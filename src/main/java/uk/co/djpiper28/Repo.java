package uk.co.djpiper28;

/**
 * a github repo
 *
 * @author Danny
 * @see MyRepos
 * @since 1.0.0
 */
public class Repo implements Comparable {

    /**
     * whether this repo is a fork of another repo
     */
    private boolean fork;

    /**
     * the name of the repo
     */
    private String name;

    /**
     * the description of the repo
     */
    private String description;

    /**
     * the link to the repo
     */
    private String url;

    /**
     * the main programming language of the repo
     */
    private String language;

    /**
     * the amount of stars  of the repo
     */
    private long stargazers_count;

    /**
     * the amount of forks of the repo
     */
    private long forks;

    /**
     * sets all the repo data to what the params are. Forks and stars less than 0 become 0.
     * calls the setters for each of the fields. See {@link uk.co.djpiper28.Repo#setForks setForks(int)}
     * and {@link uk.co.djpiper28.Repo#setStargazersCount setStars(int)}
     *
     * @param name        the repo name
     * @param description the repo description
     * @param url         the url to the repo
     * @param language    the main language that the repo is written in
     * @param stars       amount of stars of the repo
     * @param forks       amount of forks of the repo
     * @param fork        whether the repo is a fork of another
     */
    public Repo(String name, String description, String url, String language, long stars, long forks, boolean fork) {
        this.setName(name);
        this.setDescription(description);
        this.setUrl(url);
        this.setLanguage(language);
        this.setStargazersCount(stars);
        this.setForks(forks);
        this.setFork(fork);
    }

    public synchronized String getName() {
        return name;
    }

    public synchronized void setName(String name) {
        this.name = name;
    }

    public synchronized String getDescription() {
        return description;
    }

    public synchronized void setDescription(String description) {
        this.description = description;
    }

    public synchronized String getUrl() {
        return url;
    }

    public synchronized void setUrl(String url) {
        this.url = url;
    }

    public synchronized String getLanguage() {
        return language;
    }

    public synchronized void setLanguage(String language) {
        this.language = language;
    }

    @Override
    public String toString() {
        return "Repo{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", url='" + url + '\'' +
                ", language='" + language + '\'' +
                ", stargazers_count=" + stargazers_count +
                ", forks=" + forks +
                ", fork=" + fork +
                '}';
    }

    public synchronized long getStargazersCount() {
        return stargazers_count;
    }

    /**
     * sets the amount of stars for the repo. If stars is less than 0 it becomes 0.
     *
     * @param stargazers_count number of forks of the repo
     */
    public synchronized void setStargazersCount(long stargazers_count) {
        this.stargazers_count = stargazers_count;
        if (this.stargazers_count < 0) this.stargazers_count = 0;
    }

    public synchronized long getForks() {
        return forks;
    }

    /**
     * sets the amount of forks for the repo. If forks is less than 0 it becomes 0.
     *
     * @param forks number of forks of the repo
     */
    public synchronized void setForks(long forks) {
        this.forks = forks;
        if (this.forks < 0) this.forks = 0;
    }

    public boolean isFork() {
        return fork;
    }

    public void setFork(boolean fork) {
        this.fork = fork;
    }

    /**
     * generates HTML for a summary box of this repo
     *
     * @return an HTML block for this repo
     */
    public synchronized String getHTML() {
        return String.format(
                        "<div class=\"github-repo\">\n" +
                        "    <div class=\"github-repo-inner\">\n" +
                        "        <h3 class=\"github-repo-content\">%s<a href=\"%s\">%s</a> (%s)</h3>\n" +
                        "        <h4 class=\"github-repo-content\">%s</h4>\n" +
                        "    </div>\n" +
                        "    <div class=\"github-repo-inner\">    \n" +
                        "        <p>\n" +
                        "        <svg aria-label=\"star\" role=\"img\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"fork\">\n" +
                        "    <path fill-rule=\"evenodd\" d=\"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z\"></path>\n" +
                        "</svg> (%d)\n" +
                        "        <svg aria-label=\"fork\" role=\"img\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"fork\">\n" +
                        "    <path fill-rule=\"evenodd\" d=\"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z\"></path>\n" +
                        "</svg>\n" +
                        "        (%d)        \n" +
                        "        </p> \n" +
                        "    </div>\n" +
                        "</div>\n",
                this.isFork() ? "(Fork) " : "",
                this.getUrl(),
                this.getName(),
                this.getLanguage(),
                this.getDescription() == null ? "(no description)" : this.getDescription(),
                this.getStargazersCount(),
                this.getForks())
                .replace("(null)", "");
    }

    /**
     * compares by fork + star count then, by name and whether it is a fork such that my repos are shown first
     *
     * @param o another object
     * @return {@link java.lang.Comparable standard integer compareTo result}
     */
    @Override
    public int compareTo(Object o) {
        if (!(o instanceof Repo)) return -1;
        Repo other = (Repo) o;
        long thisIndex = this.getStargazersCount() + this.getForks();
        long otherIndex = other.getStargazersCount() + other.getForks();
        if (thisIndex > otherIndex) {
            return -1;
        }

        int alphaComp = this.getName().compareTo(other.getName());

        if (other.isFork() && this.isFork()) return alphaComp;
        if (this.isFork()) return 1;
        if (other.isFork()) return -1;

        return alphaComp;
    }
}
