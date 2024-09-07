const root = document.createElement("html");
root.lang = "en";

// Create the head section
const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("my document"));
head.appendChild(title);

// Create the body section
const body = document.createElement("body");

// Create the header element
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));

// Create the paragraph element
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("This is the first paragraph."));

// Append the header and paragraph to the body
body.appendChild(header);
body.appendChild(paragraph);

// Append the head and body to the root element
root.appendChild(head);
root.appendChild(body);

// Attach the dynamically created HTML to the document
document.appendChild(root);
