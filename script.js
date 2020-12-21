const textInp = document.getElementById("floatingTextarea");
const addButton = document.getElementById("addButton");
const tBody = document.getElementById("tBody");
var colCtr = 2;

class addItem {
	constructor(inputText) {
		this.createNewInput(inputText);
	}

	createNewInput(inputText) {

		var tr = document.createElement("tr");

		var td = document.createElement("td");

		var itemOuterDiv = document.createElement("div");
		itemOuterDiv.classList.add("card");
		itemOuterDiv.style.width = "100%";

		var itemInnerDiv = document.createElement("div");
		itemInnerDiv.classList.add("card-body");

		var hText = document.createElement("h5");
		hText.classList.add("card-title");
		hText.innerHTML = "Card Title";

		var para = document.createElement("p");
		para.classList.add("card-text");
		para.innerHTML = inputText;

		var link = document.createElement("a");
		link.classList.add("btn", "btn-primary");
		link.innerHTML = "Go Somewhere";

		tBody.appendChild(tr);
		tr.appendChild(td);
		td.appendChild(itemOuterDiv);
		td.appendChild(itemInnerDiv);
		td.appendChild(hText);
		td.appendChild(para);
		td.appendChild(link);


	}
}

addButton.addEventListener('click', function() {
	if(textInp.value != "") {
		new addItem(textInp.value);
		textInp.value = "";
	}
})