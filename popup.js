checkbox = document.querySelector("#state");
oldUrlField = document.querySelector("#oldPfpUrl");
newUrlField = document.querySelector("#newPfpUrl");
checkboxLabel = document.querySelector("#checkboxLabel");

function set_checkbox_text(text)
{
    checkboxLabel.innerHTML = `State (${text})`;
}


chrome.runtime.sendMessage({type : "Init"}).then(
    (message) => {
        set_checkbox_text(message.ext_status);
        checkbox.checked = message.ext_status == "ON" ? true : false;
        oldUrlField.value = message.old_url;
        newUrlField.value = message.new_url;
    }
);

checkbox.addEventListener("input", 
    () => {
        chrome.runtime.sendMessage({
            type : "Set State",
            data : checkbox.checked
        }).then(set_checkbox_text);
    }
);

oldUrlField.addEventListener("input",
    () => {
        chrome.runtime.sendMessage({
            type : "Set Old Url",
            data : oldUrlField.value
        });
    }
)

newUrlField.addEventListener("input",
    () => {
        chrome.runtime.sendMessage({
            type : "Set New Url",
            data : newUrlField.value
        });
    }
)