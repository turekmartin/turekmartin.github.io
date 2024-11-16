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

// Funkce pro označení úkolu jako splněného
const taskRows = document.querySelectorAll('tr[data-task]');
taskRows.forEach((row) => {
  const statusCell = row.querySelector('.task-status');
  const lockIcon = row.querySelector('.lock-icon');

  statusCell.addEventListener('click', () => {
    // Označení úkolu jako splněného
    statusCell.textContent = '✔️ Splněno';
    statusCell.classList.add('completed');
    
    // Změna zámku na odemknutý
    lockIcon.textContent = '🔓';
    lockIcon.classList.add('completed-icon');

    // Aktivace tlačítka pro zobrazení modalu
    lockIcon.addEventListener('click', () => openModal(tasks[row.dataset.task]));
  });
});