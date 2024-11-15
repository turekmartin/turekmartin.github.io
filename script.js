// Data o dinosaurech
const dinosaurs = [
  { name: "Tyrannosaurus Rex", description: "Jeden z nejznámějších dinosaurů, velký dravec s ostrými zuby.", image: "tyrannosaurus.jpg" },
  { name: "Triceratops", description: "Býložravec se třemi rohy na hlavě.", image: "triceratops.jpg" },
  { name: "Stegosaurus", description: "Dinosaurus s charakteristickými pláty na hřbetě.", image: "stegosaurus.jpg" },
  { name: "Velociraptor", description: "Malý, rychlý dravec známý svou inteligencí.", image: "velociraptor.jpg" },
  { name: "Brachiosaurus", description: "Dlouhokrký býložravec, který dosahoval velkých výšek.", image: "brachiosaurus.jpg" },
  { name: "Ankylosaurus", description: "Obrněný dinosaurus s ocasem jako kyj.", image: "ankylosaurus.jpg" },
  { name: "Pteranodon", description: "Létající plaz s charakteristickým hřebenem na hlavě.", image: "pteranodon.jpg" },
  { name: "Diplodocus", description: "Dlouhokrký dinosaurus s dlouhým ocasem.", image: "diplodocus.jpg" },
  { name: "Parasaurolophus", description: "Dinosaurus s hřebenem na hlavě.", image: "parasaurolophus.jpg" },
  { name: "Spinosaurus", description: "Dravec s plachtou na zádech a dlouhými čelistmi.", image: "spinosaurus.jpg" },
];

// Vložení seznamu dinosaurů
const dinosaurList = document.getElementById('dinosaur-list');
const dinosaurDetails = document.getElementById('dinosaur-details');

dinosaurs.forEach((dino, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = dino.name;
  listItem.onclick = () => showDetails(index);
  dinosaurList.appendChild(listItem);
});

function showDetails(index) {
  const dino = dinosaurs[index];
  dinosaurDetails.innerHTML = `
    <h2>${dino.name}</h2>
    <img src="${dino.image}" alt="${dino.name}" style="max-width: 100%; border-radius: 5px;">
    <p>${dino.description}</p>
  `;
}