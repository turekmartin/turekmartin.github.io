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

// Vložení úkolů do seznamu
const taskList = document.getElementById('task-list');
const dinosaurTask = document.getElementById('dinosaur-task');

Object.keys(tasks).forEach(task => {
  const taskItem = document.createElement('li');
  taskItem.textContent = tasks[task].dinosaur;
  taskItem.onclick = () => completeTask(task);
  taskList.appendChild(taskItem);
});

function completeTask(task) {
  const dino = tasks[task];
  dinosaurTask.innerHTML = `
    <h2>${dino.dinosaur}</h2>
    <img src="${dino.image}" alt="${dino.dinosaur}" style="max-width: 100%; border-radius: 10px;">
    <p>${dino.description}</p>
  `;
}