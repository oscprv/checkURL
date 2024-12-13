chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "unshortenUrl") {
    const shortenedUrl = request.url;

    if (!isValidUrl(shortenedUrl)) {
      sendErrorResponse(sendResponse, "Invalid URL format. Only HTTPS URLs are allowed.");
      return;
    }

    if (!isAllowedShortenedUrl(shortenedUrl)) {
      sendErrorResponse(sendResponse, `Unrecognized shortening service. Supported services are: ${allowedShorteningServices.join(", ")}`);
      return;
    }

    if (isSuspiciousUrl(shortenedUrl)) {
      sendErrorResponse(sendResponse, "Suspicious URL detected. It may contain unsafe patterns (e.g., login, admin, null byte, or directory traversal).");
      return;
    }

    fetch(shortenedUrl, { method: 'HEAD' })
      .then(response => {
        const resolvedUrl = response.url;

        if (isSuspiciousUrl(resolvedUrl)) {
          sendErrorResponse(sendResponse, "Suspicious URL detected in the final destination (e.g., login, admin, null byte, or directory traversal).");
        } else {
          sendResponse({ success: true, fullUrl: resolvedUrl });
        }
      })
      .catch(error => {
        sendErrorResponse(sendResponse, "Unable to unshorten URL due to a fetch error.");
      });
  } else if (request.action === "convertToUppercase") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = tabs[0].url;
      sendResponse({ success: true, url: url.toUpperCase() });
    });
  }

  return true;
});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (isAllowedShortenedUrl(details.url)) {
      return { cancel: true };
    } else {
      return { cancel: false };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
