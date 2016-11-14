walk(document.body);

function walk(node) {
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
		default:
			break;
	}
}

function handleText(textNode) {
	var text = textNode.nodeValue;

	text = text.replace(/the alt-right([,.;])/g, "white supremacists$1");
	text = text.replace(/an alt-right/g, "a white supremacist");
	text = text.replace(/alt-right/g, "white supremacist");
	text = text.replace(/an Alt-Right/g, "a White Supremacist");
	text = text.replace(/Alt-Right/g, "White Supremacist");
	text = text.replace(/Alt Right/g, "White Supremacist");
	text = text.replace(/alt right/g, "white supremacist");

	textNode.nodeValue = text;
}
