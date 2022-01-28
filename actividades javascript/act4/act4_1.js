function nodosh2() {
    const title = document.getElementsByTagName("h2");
    const paragrah = document.getElementsByTagName("p");
    
    for (i = 0; i < title.length; i++) {
        window.alert(title[i].innerHTML);
    }
    for (i = 0; i < paragrah.length; i++) {
        window.alert(paragrah[i].innerHTML);
    }
}