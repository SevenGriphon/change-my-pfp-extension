ext_status = "ON";
old_url = "";
new_url = "";

old_url = 
"https://static.42.tech/user-pictures/3e6d4915-6a3b-4de3-9461-2fc8843c5c1e";
new_url = 
"https://i.pinimg.com/736x/06/a1/6d/06a16d4588a1767d40082a48c59c9e65.jpg";

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) =>
    {
        if (request.type == "Set State")
        {
            ext_status = request.data ? "ON" : "OFF";
            console.log(ext_status);
            sendResponse(ext_status);
        }
        else if (request.type == "Set Old Url")
        {
            old_url = request.data;
            console.log(old_url);
        }
        else if (request.type == "Set New Url")
        {
            new_url = request.data;
            console.log(new_url);
        }
        else if (request.type == "Get State")
        {
            sendResponse(ext_status);
        }
        else if (request.type == "Get Urls")
        {
            sendResponse({
                old_url : old_url,
                new_url : new_url
            });
        }
        else if (request.type == "Init")
        {
            sendResponse({
                ext_status : ext_status,
                old_url : old_url,
                new_url : new_url
            });
        }
    }
)
