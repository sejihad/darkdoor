const urlInput = document.getElementById("url-input");
const goButton = document.getElementById("go-button");
const browserFrame = document.getElementById("browser-frame");

// Function to adjust iframe height based on its content
function adjustIframeHeight() {
  var iframe = document.getElementById("browser-frame");
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

// Listen for the iframe load event to adjust height
document.getElementById("browser-frame").addEventListener("load", function () {
  adjustIframeHeight();
});

// Function to get URL query parameters
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
// Load URL from query parameter if available
const initialUrl = getUrlParam("url");
if (initialUrl) {
  browserFrame.src = initialUrl;
  urlInput.value = initialUrl;
}

// Event listener for manual input URL
goButton.addEventListener("click", () => {
  const url = urlInput.value;
  if (url) {
    browserFrame.src = url;
  }
});

function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    keyword: urlParams.get("keyword"),
    engine: urlParams.get("engine"),
  };
}

function searchInIframe() {
  const params = getQueryParams();
  const browserFrame = document.getElementById("browser-frame");
  let searchUrl = "";

  switch (params.engine) {
    case "google":
      searchUrl = `https://www.google.com/search?q=${params.keyword}`;
      break;
    case "duckduckgo":
      searchUrl = `https://duckduckgo.com/?q=${params.keyword}`;
      break;
    case "tor":
      searchUrl = `https://tor.fi/search/?q=${params.keyword}`; // Tor search example
      break;
    case "ahmia":
      searchUrl = `https://ahmia.fi/search/?q=${params.keyword}`;
      break;
    case "i2p":
      searchUrl = `https://i2psearch.com/search?q=${params.keyword}`;
      break;
    case "torch":
      searchUrl = `http://torchbrowser.com/search/?q=${params.keyword}`;
      break;
    case "haystack":
      searchUrl = `http://haystack.i2p/?q=${params.keyword}`;
      break;
    case "hiddenwiki":
      searchUrl = `https://thehiddenwiki.org/index.php?search=${params.keyword}`;
      break;
    case "propublica":
      searchUrl = `https://www.propublica.org/search?q=${params.keyword}`;
      break;
    case "securedrop":
      searchUrl = `https://securedrop.org/?q=${params.keyword}`;
      break;
    case "deepsearch":
      searchUrl = `https://deepsearch.io/?q=${params.keyword}`;
      break;
    case "onionland":
      searchUrl = `http://onionland.directory/search/?q=${params.keyword}`;
      break;
    case "tor66":
      searchUrl = `https://tor66.com/?q=${params.keyword}`;
      break;
    case "excavator":
      searchUrl = `https://excavator.to/?q=${params.keyword}`;
      break;
    default:
      searchUrl = `https://www.google.com/search?q=${params.keyword}`; // Default to Google if no engine
  }

  // Set the iframe source to the search URL
  browserFrame.src = searchUrl;
  urlInput.value = searchUrl;
}

// Call search function when the page loads
window.onload = searchInIframe;
