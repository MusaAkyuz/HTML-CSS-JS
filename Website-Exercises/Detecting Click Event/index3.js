let col1 = document.getElementById("column1");
let msg = document.getElementById("msg")

const buttons = document.getElementsByTagName("*");

const buttonPressed = e => {
    clickedTarget = e.target;  // Get ID of Clicked Element
    msg.textContent = ""
    while(clickedTarget.tagName !== "html")
    {
        var parent = clickedTarget.parentNode;
        var index = Array.prototype.indexOf.call(parent.children, clickedTarget)
        if(index > 0)
        {
            msg.textContent += clickedTarget.tagName + " : ntn-child(" + (index+1) + ") "
            clickedTarget = clickedTarget.parentElement
            if(clickedTarget.tagName === "html")
            {
                break;
            }
        }
        else
        {
            msg.textContent += clickedTarget.tagName + " "
            clickedTarget = clickedTarget.parentElement
            if(clickedTarget.tagName === "html")
            {
                break;
            }
        }
    }
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

/*
if(clickedTarget != "")
{
    msg.textContent = clickedTarget.target.tagName
}

*/

/*
while(clickedTarget.tagName != null || clickedTarget.tagName != "")
{
    msg.textContent = "deneme"
    msg.textContent = clickedTarget.tagName + ":" + clickedTarget.id
}
*/