let imgs = [
   "../images/P_lanets/mercury.png",
   "../images/P_lanets/venus.png",
   "../images/P_lanets/earth.png",
   "../images/P_lanets/mars.png",
   "../images/P_lanets/jupiter.png",
   "../images/P_lanets/saturn1.png",
   "../images/P_lanets/uranus.png",
   "../images/P_lanets/neptune.png",
   "../images/P_lanets/sun.png"
];

let shads = [
   "#d8d8d8", "#d79755", "#d6e6ff", "#EFA463", "#C8C3C0",
   "#D5BC8B", "#B1E7EA", "#71C3FB", "#ff8507"
];

let planetsName = [
   "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Sun"
];

let planetsAge = [
   "88 Earth days", "225 Earth days", "365.25 days", "687 Earth days", 
   "12 Earth years", "29 Earth years", "84 Earth years", "165 Earth years", "4.6 billion years"
];

let planetsType = [
   "Terrestrial", "Terrestrial", "Terrestrial", "Terrestrial", 
   "Gas Giant", "Gas Giant", "Ice Giant", "Ice Giant", "G-type Star"
];

let planetsRad = [
   "2,439.7 km", "6,051.8 km", "6,371 km", "3,389.5 km", 
   "69,911 km", "58,232 km", "25,362 km", "24,622 km", "696,340 km"
];

let planetsTemp = [
   "430°C", "465°C", "15°C", "-60°C", "-145°C", 
   "-178°C", "-224°C", "-214°C", "5,500°C (Surface)"
];

// Additional information for each planet
let planetDetails = [
   "Mercury is the closest planet to the Sun and has a surface temperature that varies drastically.",
   "Venus is the hottest planet in the solar system, with a thick atmosphere of carbon dioxide.",
   "Earth is the only planet known to support life, with a diverse range of ecosystems.",
   "Mars is known as the Red Planet due to its iron oxide surface.",
   "Jupiter is the largest planet in the solar system, known for its Great Red Spot.",
   "Saturn is famous for its rings, made up of ice and rock particles.",
   "Uranus has a unique tilt, which causes extreme seasons.",
   "Neptune is the farthest planet from the Sun, known for its deep blue color.",
   "The Sun is a G-type main-sequence star, and it contains 99.86% of the solar system's mass."
];

let planet = document.getElementById("planet");
let planetName = document.getElementById("planetName");
let planetAge = document.getElementById("planetAge");
let planetType = document.getElementById("planetType");
let planetRad = document.getElementById("planetRad");
let planetTemp = document.getElementById("planetTemp");
let index = document.getElementById("index");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let modalPlanetName = document.getElementById("modalPlanetName");
let modalPlanetDetails = document.getElementById("modalPlanetDetails");
let cntr = 0;

function updatePlanetInfo() {
   planet.src = imgs[cntr];
   planetName.textContent = planetsName[cntr];
   planetAge.textContent = planetsAge[cntr];
   planetType.textContent = planetsType[cntr];
   planetRad.textContent = planetsRad[cntr];
   planetTemp.textContent = planetsTemp[cntr];
   // Removed box shadow
   // planet.style.boxShadow = `0 0 50px 5px ${shads[cntr]}`;
   index.textContent = `${cntr + 1}/9`;

   nextBtn.src = imgs[(cntr + 1) % imgs.length];
   prevBtn.src = imgs[(cntr - 1 + imgs.length) % imgs.length];
}

function nextPlanet() {
   cntr = (cntr + 1) % imgs.length;
   updatePlanetInfo();
}

function prevPlanet() {
   cntr = (cntr - 1 + imgs.length) % imgs.length;
   updatePlanetInfo();
}

function learnMore() {
   modalPlanetName.textContent = planetsName[cntr];
   modalPlanetDetails.textContent = planetDetails[cntr];
   document.getElementById("planetInfoModal").style.display = "block";
}

function closeModal() {
   document.getElementById("planetInfoModal").style.display = "none";
}

window.onload = () => {
   updatePlanetInfo();
   
   // Add a class to the body to ensure the background is applied
   document.body.classList.add('bg-animation-active');
};
