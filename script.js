function folder() {
  const folder = document.querySelector(".folder");
  const showFolder = document.querySelector("#showFolder");
  const minimizeBtn = document.getElementById("minimizeBtn");
  const maximizeBtn = document.getElementById("maximizeBtn");
  const closeBtn = document.getElementById("closeBtn");
  let isMaximized = false;

  showFolder.addEventListener("click", () => {
    folder.classList.toggle("hidden");
  });

  minimizeBtn.addEventListener("click", () => {
    folder.classList.add("hidden");
  });

  maximizeBtn.addEventListener("click", () => {
    folder.classList.toggle("maximized");
    isMaximized = !isMaximized;
  });

  closeBtn.addEventListener("click", () => {
    folder.classList.add("hidden");
  });
}
folder();

function chrome() {
  const chrom = document.querySelector(".chrome");
  const showChrome = document.getElementById("showChrome");
  const chromeMinimizeBtn = document.getElementById("chromeMinimizeBtn");
  const chromeMaximizeBtn = document.getElementById("chromeMaximizeBtn");
  const chromeCloseBtn = document.getElementById("chromeCloseBtn");
  let chromeMaximized = false;

  showChrome.addEventListener("click", () => {
    chrom.classList.toggle("hidden");
  });

  chromeMinimizeBtn.addEventListener("click", () => {
    chrom.classList.add("hidden");
  });

  chromeMaximizeBtn.addEventListener("click", () => {
    chrom.classList.toggle("maximized");
    chromeMaximized = !chromeMaximized;
  });

  chromeCloseBtn.addEventListener("click", () => {
    chrom.classList.add("hidden");
  });
}
chrome();

function Note() {
  const note = document.querySelector(".note");
  const showNote = document.getElementById("showNote");
  const NoteMinimizeBtn = document.getElementById("noteMinimizeBtn");
  const NoteMaximizeBtn = document.getElementById("noteMaximizeBtn");
  const NoteCloseBtn = document.getElementById("noteCloseBtn");
  let NoteMaximized = false;

  showNote.addEventListener("click", () => {
    note.classList.toggle("hidden");
  });

  NoteMinimizeBtn.addEventListener("click", () => {
    note.classList.add("hidden");
  });

  NoteMaximizeBtn.addEventListener("click", () => {
    note.classList.toggle("maximized");
    NoteMaximized = !NoteMaximized;
  });

  NoteCloseBtn.addEventListener("click", () => {
    note.classList.add("hidden");
  });
}
Note();

function stickyNotes() {
  let color = document.getElementById("color");
  let createBtn = document.getElementById("createBtn");
  let list = document.getElementById("list");

  createBtn.onclick = () => {
    let newNote = document.createElement("div");
    newNote.classList.add("sticky-note");
    newNote.innerHTML = `
    <h3>Sticky note</h3>
    <span class="close">x</span>
    <textarea
    placeholder="Write Content..."
    rows="10" cols="30"></textarea>`;
    newNote.style.borderColor = color.value;
    newNote.style.top = "100px";
    newNote.style.left = window.innerWidth * 0.7 + "px";
    list.appendChild(newNote);
  };
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
      event.target.parentNode.remove();
    }
  });

  let cursor = {
    x: null,
    y: null,
  };
  let note = {
    dom: null,
    x: null,
    y: null,
  };

  document.addEventListener("mousedown", (event) => {
    const noteEl = event.target.closest(".sticky-note");
    if (noteEl) {
      cursor = {
        x: event.clientX,
        y: event.clientY,
      };
      note = {
        dom: noteEl,
        x: noteEl.getBoundingClientRect().left,
        y: noteEl.getBoundingClientRect().top,
      };
    }
  });

  document.addEventListener("mousemove", (event) => {
    if (note.dom == null) return;
    let currentCursor = {
      x: event.clientX,
      y: event.clientY,
    };
    let distance = {
      x: currentCursor.x - cursor.x,
      y: currentCursor.y - cursor.y,
    };
    note.dom.style.left = note.x + distance.x + "px";
    note.dom.style.top = note.y + distance.y + "px";
    note.dom.style.cursor = "grab";
  });
  document.addEventListener("mouseup", () => {
    if (note.dom == null) return;
    note.dom.style.cursor = "auto";
    note.dom = null;
  });
}

stickyNotes();