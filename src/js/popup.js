document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request === "mixpanel-init") {
      console.log("mixpanel init listener");
      sendResponse({ success: true });
    }
  });
});
