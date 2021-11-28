<script type="text/javascript">

function showcont(id, text, cont) {
    let button = document.getElementById(id);
    button.outerHTML = "<button id=\"" + id + "\" class=\"wide-button\" onclick=\"hidecont('" + id + "','" + text + "','" + cont + "')\">Hide " + text + "</button>";

    let repos = document.getElementById(cont);
    repos.classList.remove('hidden');
}
function hidecont(id, text, cont) {
    let button = document.getElementById(id);
    button.outerHTML = "<button id=\"" + id + "\" class=\"wide-button\" onclick=\"showcont('" + id + "','" + text + "','" + cont + "')\">Show " +text + "</button>";

    let repos = document.getElementById(cont);
    repos.classList.add('hidden');
}
function show() {
    let button = document.getElementById("showhiderepos");
    button.outerHTML = "<button id=\"showhiderepos\" class=\"wide-button\" onclick=\"hide()\">Hide Repos</button>";

    let repos = document.getElementById("repos");
    repos.classList.remove('hidden');
}
function hide() {
    let button = document.getElementById("showhiderepos");
    button.outerHTML = "<button id=\"showhiderepos\" class=\"wide-button\" onclick=\"show()\">Show Repos</button>";

    let repos = document.getElementById("repos");
    repos.classList.add('hidden');
}
</script>