// Data o dinosaurech s detailnějšími popisy
const dinosaurs = [
  {
    name: "Tyrannosaurus Rex",
    description: "Tyrannosaurus Rex, často přezdívaný T-Rex, byl jedním z největších masožravých dinosaurů. Měřil až 12 metrů na délku a vážil kolem 9 tun. Byl vybaven masivní lebkou a ostrými zuby, které dokázaly rozdrtit kosti. Žil na konci křídového období před přibližně 66 miliony let. Navzdory své pověsti lovce se vědci domnívají, že mohl být také mrchožroutem.",
    image: "tyrannosaurus.jpg"
  },
  {
    name: "Triceratops",
    description: "Triceratops byl býložravý dinosaurus, známý svými třemi rohy a velkým kostěným límcem na hlavě. Měl robustní tělo, vážil až 6 tun a měřil asi 9 metrů na délku. Jeho rohy mu mohly sloužit k obraně před predátory, jako byl T-Rex, nebo k soubojům mezi samci. Triceratops obýval severní Ameriku před asi 68 miliony let.",
    image: "triceratops.jpg"
  },
  {
    name: "Stegosaurus",
    description: "Stegosaurus byl snadno rozpoznatelný díky svým velkým plátům na zádech a ostnatému ocasu. Byl býložravý a žil před 150 miliony let během jury. Měřil kolem 9 metrů a vážil přibližně 5 tun. Pláty mohly sloužit k regulaci teploty nebo k zastrašení predátorů. Jeho mozek byl relativně malý ve srovnání s velikostí těla.",
    image: "stegosaurus.jpg"
  },
  {
    name: "Velociraptor",
    description: "Velociraptor byl malý, ale velmi rychlý a inteligentní dravec. Měl ostré drápy na zadních nohou, které používal k lovu. Měřil asi 2 metry na délku a vážil kolem 15 kg. Navzdory své velikosti byl nebezpečný díky spolupráci ve smečkách. Velociraptor žil v období křídy, asi před 75 miliony let, a jeho zkameněliny byly nalezeny v Mongolsku.",
    image: "velociraptor.jpg"
  },
  {
    name: "Brachiosaurus",
    description: "Brachiosaurus byl obrovský býložravý dinosaurus s dlouhým krkem, který dosahoval výšek až 12 metrů. Mohl dosáhnout na listy stromů, kam se jiní dinosauři nedostali. Tento obr žil před asi 154 miliony let v období jury. Jeho přední nohy byly delší než zadní, což mu dodávalo charakteristický vzhled. Váha Brachiosaura mohla přesahovat 50 tun.",
    image: "brachiosaurus.jpg"
  },
  {
    name: "Ankylosaurus",
    description: "Ankylosaurus byl dobře chráněný dinosaurus díky svému kostěnému pancíři pokrývajícímu celé tělo. Na ocasu měl velkou kostěnou kyjovitou strukturu, kterou používal k obraně proti predátorům. Žil na konci křídového období před 68–66 miliony let. Ankylosaurus vážil až 8 tun a měřil kolem 6 metrů na délku.",
    image: "ankylosaurus.jpg"
  },
  {
    name: "Pteranodon",
    description: "Pteranodon byl létající plaz s rozpětím křídel až 7 metrů. Patřil mezi pterosaury a žil před 88–80 miliony let. I když nebyl technicky dinosaurus, byl úzce příbuzný. Pteranodon měl bezzubý zobák a pravděpodobně se živil rybami, které lovil z moří a řek. Charakteristickým znakem byl hřeben na hlavě, který mohl sloužit k řízení letu nebo k námluvám.",
    image: "pteranodon.jpg"
  },
  {
    name: "Diplodocus",
    description: "Diplodocus byl dlouhokrký dinosaurus známý svou štíhlou stavbou těla. Dosahoval délky až 30 metrů, což ho činilo jedním z nejdelších dinosaurů vůbec. Jeho ocas byl velmi dlouhý a mohl být použit k obraně. Diplodocus žil před asi 154 miliony let v období jury. Živil se rostlinami, které si trhal díky svému dlouhému krku.",
    image: "diplodocus.jpg"
  },
  {
    name: "Parasaurolophus",
    description: "Parasaurolophus byl býložravý dinosaurus známý svým výrazným kostěným hřebenem na hlavě. Tento hřeben mohl být používán k vydávání zvuků nebo jako vizuální signál při komunikaci. Parasaurolophus žil v období křídy před asi 76–73 miliony let. Dosahoval délky až 10 metrů a byl zdatným běžcem díky svým silným nohám.",
    image: "parasaurolophus.jpg"
  },
  {
    name: "Spinosaurus",
    description: "Spinosaurus byl jedním z největších masožravců, dosahoval délky až 15 metrů. Na zádech měl charakteristickou plachtu tvořenou kostěnými výběžky. Vědci věří, že mohl být částečně vodním tvorem, lovícím ryby v řekách a jezerech. Spinosaurus žil v období křídy před asi 100 miliony let v oblastech dnešní severní Afriky.",
    image: "spinosaurus.jpg"
  },
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