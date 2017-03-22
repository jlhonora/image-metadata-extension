function messageListener(request, sender, sendResponse) {
  console.log("Got request");
  console.log(request);
  alert(request.message);
}

browser.runtime.onMessage.addListener(messageListener);

console.log("Subscribed");
