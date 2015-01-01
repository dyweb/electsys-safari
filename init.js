// safari.extension.addContentScript("content_script/jquery-1.6.1.min.js");
// safari.extension.addContentScript("content_script/lesson.js");
// safari.extension.addContentScript("content_script/nhce.js");
// safari.extension.addContentScript("content_script/optimize.js");
// safari.extension.addContentScript("content_script/score.js");
// safari.extension.addContentScript("content_script/login_page.js");
// safari.extension.addContentScript("content_script/load.js");
// safari.extension.addContentScript("content_script/eductionList.js");

var newElement = document.createElement("p");
newElement.textContent = "New Element!";
newElement.style.color = "red";
newElement.style.float = "right";
document.body.insertBefore(newElement, document.body.firstChild);