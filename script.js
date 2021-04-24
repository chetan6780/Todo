/* ---------------------------------------------------------------------------------------------
var h = document.createElement('h1')
var myValue = document.createTextNode('Hello world!')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h) 
--------------------------------------------------------------------------------------------- */


// Selectors -------------------------------------------------------------------------------------------------
let ul = document.getElementById("list");
let addButton = document.getElementById("add");
let removeButton = document.getElementById("remove");
let removeAllButton = document.getElementById("removeAll");
let li = ul.children;

// Event Listners ---------------------------------------------------------------------------------------------
addButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeItem);
removeAllButton.addEventListener("click", removeAllItems);


// Functions --------------------------------------------------------------------------------------------------
function addItem() {
    let input = document.getElementById("input");
    let text = input.value;
    let textNode = document.createTextNode(text);

    if (text === "") {
        alert("Please Enter The Task!!")
        return false;
    }
    else {
        // create li
        li = document.createElement("li");

        // create checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", "check");

        // create label
        let label = document.createElement("label");

        // add these elements on the web
        label.appendChild(textNode);
        li.appendChild(checkbox);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = "mycheck";
        }, 1);

        // clear input
        input.value = "";
    }
}

function removeItem() {
    li = ul.children;
    for (let i = 0; i < li.length; i++) {
        while (li[i] && li[i].children[0].checked) {
            ul.removeChild(li[i]);
        }
    }
}

function removeAllItems() {
    li = ul.children;
    while (li.length > 0) {
        ul.removeChild(li[0]);
    }
}
// ---------------------------------------------------------------------------------------------------------------