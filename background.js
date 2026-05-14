ext_status = "ON";

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) =>
    {
        if (request.type == "Set State")
        {
            ext_status = request.data ? "ON" : "OFF";
            console.log(ext_status);
            sendResponse(ext_status);
        }
        else if (request.type == "Get State")
        {
            sendResponse(ext_status);
        }
    }
)
