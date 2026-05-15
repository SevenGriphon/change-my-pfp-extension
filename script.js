old_pfp = 
"https://static.42.tech/user-pictures/3e6d4915-6a3b-4de3-9461-2fc8843c5c1e";
new_pfp = 
"https://i.pinimg.com/736x/06/a1/6d/06a16d4588a1767d40082a48c59c9e65.jpg";

function replace_src(elements, filter_src, new_src)
{
    // alert(elements.length);
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.src == filter_src)
        {
            element.src = new_src;
        }
    }
}

function start_observer()
{
    const observer = new MutationObserver(
        () => replace_src(document.querySelectorAll("img"), old_pfp, new_pfp)
    );

    observer.observe(document, {childList : true, subtree : true});
}

chrome.runtime.sendMessage({type : "Get State"}).then((message) => 
{
    console.log(`the extension is ${message}`);
    if (message == "ON")
    {
        chrome.runtime.sendMessage({type : "Get Urls"}).then((message) =>
            {
                old_pfp = message.old_url;
                new_pfp = message.new_url;
            });
        start_observer();
    }
});