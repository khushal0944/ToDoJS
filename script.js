const gettask = document.querySelector(".inputbox input");
const submit = document.getElementById("Submit");
const tasklist = document.querySelector(".taskslist");
let full = false;
let taskpass = 1;
let crosspresent = false;
submit.addEventListener("click", checked)


function checked(e) {
    e.preventDefault();
    taskpass += 1;
    if (taskpass > 14){
        gettask.setAttribute("disabled","")
    }
    let text = gettask.value;
    if(text == "") return;
    if(text.trim() == "") console.log("trim");
    console.log(text)
    let boxDiv = document.createElement("div");
    let inputBox = document.createElement("input");
    let labelBox = document.createElement("label");
    let crossButton = document.createElement("button");
    if(crossButton){
        crosspresent = true;
    }

    boxDiv.setAttribute("class", "margin");
    inputBox.type = "checkbox";
    inputBox.id = "check1";
    inputBox.name = "check"
    labelBox.setAttribute("for", "check")
    labelBox.innerHTML = text;
    crossButton.className = "cross";
    crossButton.innerHTML = "x"

    tasklist.appendChild(boxDiv);
    boxDiv.appendChild(inputBox)
    boxDiv.appendChild(labelBox)
    boxDiv.appendChild(crossButton);
    gettask.value = "";
    crossButton.addEventListener("click",function(){
        gettask.removeAttribute("disabled");
        boxDiv.style.display = "none";
    })
    inputBox.addEventListener("click",checkboxclick)
    labelBox.addEventListener("click",labelclick)
    const clearall = document.querySelector("#clearAll");
    clearall.addEventListener("click",clearallclick)
}


function labelclick(){
    labelBox.style.textDecoration = "line-through"
        inputBox.checked = "true";
        setTimeout(()=>{
            boxDiv.remove();
        },1000)
}
function checkboxclick(){
    labelBox.style.textDecoration = "line-through"
        setTimeout(()=>{
            boxDiv.remove();
        },1000)
}

const clearallclick = ()=>{
    // Yet To Be Completed
}