function enlaces() {
    let links = [...document.getElementsByTagName("a")];
    window.alert("Hay " + links.length + " enlaces en esta pagina");
    window.alert("El ultimo link es " + links[links.length - 1]);
    let google = links.filter(a => a.href == "https://www.google.es/").length;
    window.alert("Hay " + google + " links que te redirigen a google");
}