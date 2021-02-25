/*
Snap.svg
 */
const s = Snap("#catsvg");

const circle = s.circle(64,70,60);
const maskcircle = s.circle(64,70,60);
const lineart = s.polyline(
    0,13.5, 
    41,28, 
    52,23,
    58,0,
    67,10,
    68,19,
    82,19,
    97,31,
    99,40,
    116,48,
    118,58,
    109,78,
    97,84,
    93,94,
    105,122,
    75,135,
    44,130,
    15,109,
    6,93,
    13,72,
    10,65,
    11,54,
    0,38
)
const lineartears = s.polyline(
    0,13.5, 
    41,28, 
    52,23,
    58,0,
    67,10,

    11,54,
    0,38
)

circle.attr ({
    fill: '#dbd0bd',
})

maskcircle.attr ({
    fill: 'white',
    // opacity: .8
})

lineart.attr ({
    fill: '#595247',
    mask: maskcircle
})

lineartears.attr ({
    fill: '#595247'
})


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

    // response.value = "";
    })
})