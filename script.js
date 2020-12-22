const titleInp = document.getElementById("titleInp");
const textInp = document.getElementById("floatingTextarea");
const addButton = document.getElementById("addButton");
const tBody = document.getElementById("tBody");
var colCtr = false;
var newModal = 0;
var tdCtr = 0;

class addItem {
	constructor(inputText, titleInp) {
		this.createNewInput(inputText, titleInp);
	}

	createNewInput(inputText, titleInp) {

		var tr = document.createElement("tr");

		tdCtr = tdCtr + 1;
		let tdId = "td" + tdCtr;
		var td = document.createElement("td");
		td.setAttribute("id", tdId);

		var itemOuterDiv = document.createElement("div");
		itemOuterDiv.classList.add("card");

		var itemInnerDiv = document.createElement("div");
		itemInnerDiv.classList.add("card-body");

		var hText = document.createElement("h5");
		hText.classList.add("card-title", "d-flex", "justify-content-between", "align-items-center");
		hText.innerHTML = titleInp;

		//Delete card button
		var closeBtn = document.createElement("button");
		closeBtn.setAttribute("id", "closeBtn");
		closeBtn.setAttribute("aria-label", "Close");
		closeBtn.setAttribute("button", "button");
		closeBtn.classList.add("btn-close");
		closeBtn.style.width = "0.2rem";
		closeBtn.style.height = "0.2rem";

		var para = document.createElement("p");
		para.classList.add("card-text");
		para.innerHTML = inputText;

		var link = document.createElement("a");
		link.classList.add("btn", "btn-primary");
		link.innerHTML = "View Detailed Info";
		link.setAttribute("data-toggle", "modal");
		newModal = newModal + 1;
		let attrId = "viewModal" + newModal;
		let attr = "#" + attrId;
		link.setAttribute("href", attr);

		//Modal
		var modalDiv1 = document.createElement("div");
		modalDiv1.classList.add("modal", "fade");
		modalDiv1.setAttribute("id", attrId);
		modalDiv1.setAttribute("tabindex", "-1");
		modalDiv1.setAttribute("role", "dialog");
		modalDiv1.setAttribute("aria-labelledby", attrId);
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

		closeBtn.onclick = () => {
			if (confirm("Are you sure you want to delete this note?")) {
				document.getElementById(tdId).remove();
				colCtr = !colCtr;
			}
		}

		tBody.lastChild.appendChild(td);
		td.appendChild(itemOuterDiv);
		itemOuterDiv.appendChild(itemInnerDiv);

		itemInnerDiv.appendChild(hText);
		hText.appendChild(closeBtn);
		itemInnerDiv.appendChild(para);
		itemInnerDiv.appendChild(link);

		//modal
		itemInnerDiv.appendChild(modalDiv1);
		modalDiv1.appendChild(modalDiv2);
		modalDiv2.appendChild(modalDiv3);
		modalDiv3.appendChild(modalDiv4);
		modalDiv4.appendChild(modalTitle);
		modalDiv3.appendChild(modalDiv5);
		modalDiv5.appendChild(modalBody)

	}
}

addButton.addEventListener('click', function() {
	if(textInp.value != "" && titleInp.value != "") {
		new addItem(textInp.value, titleInp.value);
		textInp.value = "";
		titleInp.value = "";
	}
})