const titleInp = document.getElementById("basic-addon1");
const textInp = document.getElementById("floatingTextarea");
const addButton = document.getElementById("addButton");
const tBody = document.getElementById("tBody");
var colCtr = false;

class addItem {
	constructor(inputText, textInp) {
		this.createNewInput(inputText, textInp);
	}

	createNewInput(inputText, titleInp) {

		var tr = document.createElement("tr");

		var td = document.createElement("td");

		var itemOuterDiv = document.createElement("div");
		itemOuterDiv.classList.add("card");
		itemOuterDiv.style.width = "100%";

		var itemInnerDiv = document.createElement("div");
		itemInnerDiv.classList.add("card-body");

		var hText = document.createElement("h5");
		hText.classList.add("card-title");
		hText.innerHTML = textInp;

		var para = document.createElement("p");
		para.classList.add("card-text");
		para.innerHTML = titleInp;

		var link = document.createElement("a");
		link.classList.add("btn", "btn-primary");
		link.innerHTML = "View Detailed Info";
		link.setAttribute("data-toggle", "modal");
		link.setAttribute("href", "#exampleModal");

		//Modal
		var modalDiv1 = document.createElement("div");
		modalDiv1.classList.add("modal fade");
		modalDiv1.setAttribute("id", "exampleModal");
		modalDiv1.setAttribute("tabindex", "-1");
		modalDiv1.setAttribute("role", "dialog");
		modalDiv1.setAttribute("aria-labelledby", "exampleModalLabel");
		modalDiv1.setAttribute("aria-hidden", "true");

		var modalDiv2 = document.createElement("div");
		modalDiv2.classList.add("modal-dialog");
		modalDiv2.setAttribute("role", "document");

		var modalDiv3 = document.createElement("div");
		modalDiv3.classList.add("modal-content");

		var modalDiv4 = document.createElement("div");
		modalDiv4.classList.add("modal-header");

		var modalTitle = document.createElement("h5");
		modalTitle.classList.add("modal-title");
		// skipping title id for now.
		modalTitle.innerHTML = titleInp;

		var modalDiv5 = document.createElement("div");
		modalDiv5.classList.add("modal-body");

		var modalBody = document.createElement("p");
		modalBody.innerHTML = inputText;

		if (colCtr == false) {
			tBody.appendChild(tr);
		}

		colCtr = !colCtr;

		tBody.lastChild.appendChild(td);
		td.appendChild(itemOuterDiv);
		td.appendChild(itemInnerDiv);
		//append modal here
		td.appendChild(hText);
		td.appendChild(para);
		td.appendChild(link);

	}
}

addButton.addEventListener('click', function() {
	if(textInp.value != "" && titleInp.value != "") {
		new addItem(textInp.value, titleInp.value);
		textInp.value = "";
		titleInp.value = "";
	}
})