function setSearchEngine (event) {
    let action = {
       "google": "https://www.google.com/",
        "duckDuckGo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web"
    };
    
    let searchText = document.querySelector("input[name=q]");
    let selectedSearchEngine = document.querySelector("input[name=engine]:checked");
    if (searchText.value === "" || selectedSearchEngine === null) {
        alert("Please enter your search text and choose search engine.");
        event.preventDefault();
        return;
    } 
    let engine = action[selectedSearchEngine.value];
    let setAction = document.getElementById("searchForm");
    setAction.setAttribute("action", engine);  

}
window.addEventListener("load", function(){
    let submit = document.getElementById("button");
    submit.addEventListener("click", setSearchEngine);
});
