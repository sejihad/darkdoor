const QUICK_NOTE = "QUICK NOTE";
document.addEventListener("DOMContentLoaded", () => {
  loadItems();
  loadTime();
  loadNote();
  addNoteEvents();
  addSearchEvents();
});

function open_url(url) {
  window.open(url, "_blank");
}

function loadItems() {
  var items = [
    {
      icon: "fa-brands fa-google",
      text: "Google",
      link: "https://www.google.com/",
      accent: "#4285f4",
    },

    {
      icon: "fa-brands fa-youtube",
      text: "Youtube",
      link: "https://youtube.com",
      accent: "#ea4336",
    },

    {
      icon: "fa-brands fa-microsoft",
      text: "Bing",
      link: "https://bing.com",
      accent: "#8dc63f",
    },

    {
      icon: "fa-brands fa-codepen",
      text: "Codepen",
      link: "https://codepen.io",
      accent: "#222",
    },

    {
      icon: "fa-brands fa-stack-overflow",
      text: "Stack",
      link: "https://stackoverflow.com/",
      accent: "#f2740e",
    },

    {
      icon: "fa-brands fa-pinterest",
      text: "Pinterest",
      link: "https://pinterest.com/",
      accent: "#ff5247",
    },

    {
      icon: "fa-brands fa-figma",
      text: "Figma",
      link: "https://figma.com/",
      accent: "#9747ff",
    },

    {
      icon: "fa-brands fa-whatsapp",
      text: "Whatsapp",
      link: "https://web.whatsapp.com/",
      accent: "#4ac958",
    },
  ];

  let html = "";
  items.forEach((obj, index) => {
    html += `
<a
target="_blank"
href="${obj.link}"
class="w-24 shadow item flex flex-col items-center p-4">
<i class="${obj.icon} text-3xl"></i>
<div>${obj.text}</div>
</a>
`;
  });
  document.querySelector(".items").innerHTML = html;
  addItemEvents(items);
}

function addItemEvents(items) {
  document.querySelectorAll(".item").forEach((div, index) => {
    div.addEventListener("mouseover", function (event) {
      div.style.color = items[index].accent;
    });
    div.addEventListener("mouseout", function (event) {
      div.style.color = "#111";
    });
  });
}

function addNoteEvents() {
  document.querySelector(".note").addEventListener("click", function (e) {
    this.setAttribute("contenteditable", "true");
    document.querySelector(".savenote").classList.remove("hidden");
  });
  document.querySelector(".note").addEventListener("blur", function (e) {
    this.removeAttribute("contenteditable");
  });
  document.querySelector(".savenote").addEventListener("click", function (e) {
    saveNote();
  });
}

function loadNote() {
  const savedNote = localStorage.getItem(QUICK_NOTE);
  if (savedNote) {
    document.querySelector(".note").innerHTML = savedNote;
  } else {
    document.querySelector(".note").innerHTML = "Write something here...";
  }
}
function saveNote() {
  const noteContent = document.querySelector(".note").innerHTML;
  localStorage.setItem(QUICK_NOTE, noteContent);
  showSnackbar("Note Saved!");
  document.querySelector(".savenote").classList.add("hidden");
}

function showSnackbar(msg) {
  const snackbar = document.getElementById("snackbar");
  snackbar.classList.add("show");
  snackbar.innerHTML = msg.trim();

  // Hide the snackbar after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    snackbar.classList.remove("show");
  }, 3000);
}

function addSearchEvents() {
  document.querySelector(".search").addEventListener("keyup", function (event) {
    // console.log()
    var query = event.target.value.trim();
    if (event.keyCode == 13) {
      var url = `https://bing.com/search?q=${encodeURIComponent(query)}`;
      window.location = url;
    }
  });
}
