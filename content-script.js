function messageListener(request, sender, sendResponse) {
  if (request.type && request.type === "showMetadata") {
    alert(request.message);
  }
}

browser.runtime.onMessage.addListener(messageListener);
