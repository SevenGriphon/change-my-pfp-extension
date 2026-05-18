old_pfp = ""
new_pfp = ""

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

chrome.storage.local.get(["ext_status"]).then((result) => 
{
    console.log(`the extension is ${result.ext_status}`);
    if (result.ext_status == "ON")
    {
        chrome.storage.local.get(["old_url", "new_url"]).then((result) =>
            {
                old_pfp = result.old_url;
                new_pfp = result.new_url;
                if (old_pfp != "")
                {
                    start_observer();
                }
            });
    }
});