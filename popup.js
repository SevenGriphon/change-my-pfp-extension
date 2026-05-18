checkbox = document.querySelector("#state");
oldUrlField = document.querySelector("#oldPfpUrl");
newUrlField = document.querySelector("#newPfpUrl");
checkboxLabel = document.querySelector("#checkboxLabel");

function set_checkbox_text(text)
{
    checkboxLabel.innerHTML = `State (${text})`;
}

chrome.storage.local.get(["ext_status", "old_url", "new_url"]).then(
    (result) =>
    {
        console.log(result);
        set_checkbox_text(result.ext_status);
        checkbox.checked = result.ext_status == "ON" ? true : false;
        oldUrlField.value = result.old_url;
        newUrlField.value = result.new_url;
    }
)

checkbox.addEventListener("input", 
    () => {
        chrome.storage.local.set({ext_status : checkbox.checked ? "ON" : "OFF"})
        set_checkbox_text(checkbox.checked ? "ON" : "OFF");
    }
);

oldUrlField.addEventListener("input",
    () => {
        chrome.storage.local.set({old_url : oldUrlField.value});
    }
)

newUrlField.addEventListener("input",
    () => {
        chrome.storage.local.set({new_url : newUrlField.value});
    }
)