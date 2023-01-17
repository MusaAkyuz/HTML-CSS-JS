let col1 = document.getElementById("column1");
let msg = document.getElementById("msg");

const buttons = document.getElementsByTagName("*");

const buttonPressed = e => {
    clickedTarget = e.target;  // Get ID of Clicked Element
    msg.textContent = "";

    while(clickedTarget.tagName !== "html")
    {
        index = 0
        var tagArray = []
        var parent = clickedTarget.parentNode;
        var childNodes = parent.childNodes;
        var count = childNodes.length;
        var child_index = 0;
        var i = 0;

        for (i = 0; i < count; ++i) {
            if(clickedTarget.tagName === childNodes[i].tagName) {
                tagArray.push(childNodes[i]);
                child_index++
            }
        }

        for(i = 0; i < child_index; i++)
        {
            if(clickedTarget === tagArray[i])
            {
                index = i;
                break;
            }
        }
        //index = child_index;
        /*
        node = clickedTarget;
        index = 0;
        //var tagN = clickedTarget.tagName
        while(node != clickedTarget.parentElement)
        {
            if(node.tagName == clickedTarget.tagName)
            {
                index++;
            }
            node = node.previousSibling;
        }
        */
        //if(index > 0)
        //{
            msg.textContent += clickedTarget.tagName + " : ntn-child(" + (index+1) + ") ";
            //msg.textContent = child_index
            clickedTarget = clickedTarget.parentElement;
            if(clickedTarget.tagName === "html")
            {
                break;
            }
        //}
        /*
        else
        {
            msg.textContent += clickedTarget.tagName + " "
            clickedTarget = clickedTarget.parentElement
            if(clickedTarget.tagName === "html")
            {
                break;
            }
        }
        */
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