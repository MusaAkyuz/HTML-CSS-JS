function getNodeTree (node) {
    if (node.hasChildNodes()) {
        var children = [];
        for (var j = 0; j < node.childNodes.length; j++) {
            children.push(getNodeTree(node.childNodes[j]));
        }

        return {
            nodeName: node.nodeName,
            parentName: node.parentNode.nodeName,
            children: children,
            content: node.innerText || "",
        };
    }
    return false;
}