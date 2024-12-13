document.getElementById("convertBtn").addEventListener("click", function () {
  chrome.runtime.sendMessage({ action: "convertToUppercase" }, function (response) {
    clearErrorMessage();
    const resultDisplay = document.getElementById("uppercaseResult");

    if (response.success) {
      resultDisplay.textContent = `Converted URL: ${response.url}`;
    } else {
      updateErrorMessageDisplay("Error: Unable to fetch current URL.");
    }
  });
});

document.getElementById("unshortenBtn").addEventListener("click", function () {
  const shortenedUrl = document.getElementById("shortenedUrl").value.trim();

  if (shortenedUrl) {
    chrome.runtime.sendMessage({ action: "unshortenUrl", url: shortenedUrl }, function (response) {
      clearErrorMessage();
      const resultDisplay = document.getElementById("unshortenResult");

      if (response.success) {
        resultDisplay.textContent = `Full URL: ${response.fullUrl}`;
      } else {
        updateErrorMessageDisplay(`Error: ${response.error}`);
      }
    });
  } else {
    updateErrorMessageDisplay("Please enter a shortened URL.");
  }
});
