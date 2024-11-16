// Data o úkolech a dinosaurech
const tasks = {
  sprcha: {
    dinosaur: "Tyrannosaurus Rex",
    description: "T-Rex si sprchu opravdu užívá! Zajímavé, že tento obrovský dinosaurus mohl být i mrchožroutem.",
    image: "tyrannosaurus.jpg"
  },
  snídaně: {
    dinosaur: "Triceratops",
    description: "Triceratops miluje zdravou snídani! Stejně jako tento býložravec, i ty si můžeš vychutnat pořádnou porci.",
    image: "triceratops.jpg"
  },
  úklid: {
    dinosaur: "Stegosaurus",
    description: "Stegosaurus udržuje svůj domov v čistotě! S pláty na zádech byl perfektní pro organizaci úklidu.",
    image: "stegosaurus.jpg"
  },
  nákup: {
    dinosaur: "Velociraptor",
    description: "Velociraptor rychle dokončí nákup a ještě se stihne vrátit domů. Tento dinosaurus byl známý svou rychlostí!",
    image: "velociraptor.jpg"
  },
  vyzvednout_mamu: {
    dinosaur: "Brachiosaurus",
    description: "Brachiosaurus je skvělý pomocník, vždy vyzvedne všechny, včetně tvé maminky!",
    image: "brachiosaurus.jpg"
  }
};

// Funkce pro zobrazení modalu
const modal = document.getElementById("dinosaur-modal");
const closeBtn = document.querySelector(".close-btn");

function openModal(dino) {
  document.getElementById("modal-title").textContent = dino.dinosaur;
  document.getElementById("modal-image").src = dino.image;
  document.getElementById("modal-description").textContent = dino.description;
  modal.style.display = "block";
}

// Zavření modalu
closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Funkce pro aktivaci zobrazení modalu u splněného úkolu
const taskCheckboxes = document.querySelectorAll(".task-checkbox");

taskCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    const row = e.target.closest("tr");
    const task = row.getAttribute("data-task");
    const button = row.querySelector(".modal-button");

    if (e.target.checked) {
      button.disabled = false;
      button.addEventListener("click", () => openModal(tasks[task]));
    } else {
      button.disabled = true;
    }
  });
});