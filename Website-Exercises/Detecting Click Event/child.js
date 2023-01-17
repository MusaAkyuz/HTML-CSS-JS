let col1 = document.getElementById("column1");
let msg = document.getElementById("msg")

var parent = col1.parentNode;
var index = Array.prototype.indexOf.call(parent.children, col1)

msg.textContent = index