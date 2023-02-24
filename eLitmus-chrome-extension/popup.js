
document.getElementById("clickactivity").addEventListener("click", () => {
    var xhttp = new XMLHttpRequest();
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var code = document.getElementById("code").value;
    xhttp.onreadystatechange = function () {
        getCurrentTab().then((tab) => {
            injectContentScript(tab[0], mail);
        })
    };
    xhttp.open("POST", "http://localhost:8081/create-student", true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.setRequestHeader('Content-type', 'application/json');

    xhttp.send(JSON.stringify({ name: name, code: code, mail: mail }));


});
function injectContentScript(tab, data) {
    const { id, url } = tab;
    chrome.scripting.executeScript(
        {
            target: { tabId: id, allFrames: true },
            files: ['inject.js']
        }
    )

    setTimeout(async () => {
        const [tab] = await chrome.tabs.query({ active: true });
        const response = await chrome.tabs.sendMessage(tab.id, data);
        console.log(response);
        window.close();
    }, 2000);

}
function getCurrentTab() {
    return new Promise((res, rej) => {
        let queryOptions = { active: true };
        chrome.tabs.query(queryOptions, (data) => { res(data) })
    })


}