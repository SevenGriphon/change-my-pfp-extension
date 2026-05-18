// old url: https://static.42.tech/user-pictures/3e6d4915-6a3b-4de3-9461-2fc8843c5c1e
// new url: https://i.pinimg.com/736x/06/a1/6d/06a16d4588a1767d40082a48c59c9e65.jpg

chrome.runtime.onInstalled.addListener(
    () => 
    {
        chrome.storage.local.get(["ext_status", "old_url", "new_url"]).then(
            (result) =>
            {
                if (!result.ext_status)
                {
                     chrome.storage.local.set({ext_status : "ON"});
                }
                if (!result.old_url)
                {
                     chrome.storage.local.set({old_url : ""});
                }
                if (!result.new_url)
                {
                     chrome.storage.local.set({new_url : ""});
                }
            }
        )
    }
);
