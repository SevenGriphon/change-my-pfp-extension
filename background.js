ext_status = "ON";

chrome.action.onClicked.addListener(
    (tab) => {
        ext_status = ext_status == "ON" ? "OFF" : "ON";
        console.log(ext_status);
    }
);

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) =>
        {
            sendResponse(ext_status);
        })