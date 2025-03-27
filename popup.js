document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("toggle");

    button.addEventListener("click", function () {
        chrome.storage.local.get(["enabled"], function (data) {
            let newState = !data.enabled;
            chrome.storage.local.set({ enabled: newState }, function () {
                button.textContent = newState ? "Disable Auto Login" : "Enable Auto Login";
            });
        });
    });

    chrome.storage.local.get(["enabled"], function (data) {
        button.textContent = data.enabled ? "Disable Auto Login" : "Enable Auto Login";
    });
});
