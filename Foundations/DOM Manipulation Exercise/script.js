const container = document.querySelector("#container");

const para = document.createElement("p");
para.classList.add("red-text");
para.textContent = "Hey I am red!";
para.style.color = "red";

container.appendChild(para);

const h3Text = document.createElement("h3");
h3Text.classList.add("blue-text");
h3Text.textContent = "Hey I am blue!";
h3Text.style.color = "blue";

container.appendChild(h3Text);

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");

const heading = document.createElement("h1");
heading.textContent = "I'm in a div";
const parad = document.createElement("p");
parad.textContent = "ME TOO!";

newDiv.appendChild(heading);
newDiv.appendChild(parad);

container.appendChild(newDiv);