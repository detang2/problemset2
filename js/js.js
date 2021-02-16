/* 
Color modes
*/
const darkmode = document.getElementById("darkmodebtn")
darkmode.addEventListener ("click", () => {
    const mode = document.getElementById("lightmode")
    if(mode.getAttribute ("id") === "lightmode"){
        mode.setAttribute ("id", "darkmode");
    } else {
        mode.setAttribute ("id", "lightmode")
    }
})

const lightmode = document.getElementById("lightmodebtn")
lightmode.addEventListener ("click", () => {
    const mode = document.getElementById("darkmode")
    if(mode.getAttribute ("id") === "darkmode"){
        mode.setAttribute ("id", "lightmode");
    } else {
        mode.setAttribute ("id", "darkmode")
    }
})

/* 
Submit Comment
*/
const submit = document.getElementById("submitcomment");
submit.addEventListener ("click", () => {
    const response = document.getElementById("typespace").value; 
    const addcom = document.getElementById("usercomments");
    const entry = document.createElement("li");
    entry.append(document.createTextNode(response));
    addcom.append(entry);

    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-button")
    removeButton.textContent = "Delete Comment";
    entry.append(removeButton);
    removeButton.addEventListener("click", () => {
    entry.remove();
    })
})