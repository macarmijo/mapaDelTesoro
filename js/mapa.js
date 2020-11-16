//let prueba = Math.random()*10;

//console.log(prueba)
const WIDTH = 700;
const HEIGH = 350;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

console.log(target)
// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 10 ) {
    alert(`Ganaste! encontraste el tesoro en ${clicks} clicks!`);
    location.reload();
  }
});
