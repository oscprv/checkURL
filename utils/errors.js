function updateErrorMessageDisplay(message) {
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = message;

  if (window.innerWidth <= 1024) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'inline-block';
  }
}

function clearErrorMessage() {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = "";
  errorMessage.style.display = 'none';
}

function sendErrorResponse(sendResponse, message) {
  sendResponse({ success: false, error: message });
}
