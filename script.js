function setSearchEngine (event) {
    let engine = document.querySelector("input[name=engine]:checked").value
    let action = {
       "google": "https://www.google.com/",
        "duckDuckGo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web"
    };
    
    let searchText = document.querySelector("input[name=q]");
    let selectedSearchEngine = document.querySelector("input[name=engine]:checked");
    if (searchText.value === "") {
        alert("Please enter your search request.");
        event.preventDefault();
    } else if (selectedSearchEngine === null) {
        alert("Please select a search engine.");
        event.preventDefault();
    } else {
        let setAction = document.getElementById("searchForm")
        setAction.setAttribute("action", action[engine])
}
}
window.addEventListener("load", function(){
    let submit = document.getElementById("button");
    submit.addEventListener("click", setSearchEngine);
});
