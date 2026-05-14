checkbox = document.querySelector(".stateCheckbox")
checkboxLabel = document.querySelector(".checkboxLabel")

function set_checkbox_text(text)
{
    checkboxLabel.innerHTML = text;
}


chrome.runtime.sendMessage({type : "Get State"}).then(
    (message) => {
        set_checkbox_text(message);
        checkbox.checked = message == "ON" ? true : false;
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