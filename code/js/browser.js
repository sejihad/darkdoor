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
      searchUrl = `https://tor.link/search/?q=${params.keyword}`; // Tor search example
      break;
    case "ahmia":
      searchUrl = `https://ahmia.fi/search/?q=${params.keyword}`;
      break;
    case "i2p":
      searchUrl = `https://i2psearch.com/search?q=${params.keyword}`;
      break;
    case "torch":
      searchUrl = `http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion/cgi-bin/omega/omega?P=${params.keyword}`;
      break;
    case "haystack":
      searchUrl = `http://haystak5njsmn2hqkewecpaxetahtwhsbsa64jom2k22z5afxhnpxfid.onion/?q=${params.keyword}`;
      break;
    case "hiddenwiki":
      searchUrl = `https://thehiddenwiki.com/?s=${params.keyword}`;
      break;
    case "propublica":
      searchUrl = `http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/search?qss=${params.keyword}`;
      break;
    case "securedrop":
      searchUrl = `http://sdolvtfhatvsysc6l34d65ymdwxcujausv7k5jk4cy5ttzhjoi6fzvyd.onion/search/?query=${params.keyword}`;
      break;
    case "deepsearch":
      searchUrl = `http://search7tdrcvri22rieiwgi5g46qnwsesvnubqav2xakhezv4hjzkkad.onion/result.php?search=${params.keyword}`;
      break;
    case "onionland":
      searchUrl = `http://3bbad7fauom4d6sgppalyqddsqbf5u5p56b5k5uk2zxsy3d6ey2jobad.onion/search?q=${params.keyword}`;
      break;
    case "tor66":
      searchUrl = `http://tor66sewebgixwhcqfnp5inzp5x5uohhdy3kvtnyfxc2e5mxiuh34iid.onion/search?q=${params.keyword}`;
      break;
    case "excavator":
      searchUrl = `http://2fd6cemt4gmccflhm6imvdfvli3nf7zn6rfrwpsy7uhxrgbypvwf5fad.onion/search/${params.keyword}`;
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
