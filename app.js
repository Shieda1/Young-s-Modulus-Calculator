// https://calculator.swiftutors.com/youngs-modulus-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const youngsModulusRadio = document.getElementById('youngsModulusRadio');
const stressRadio = document.getElementById('stressRadio');
const strainRadio = document.getElementById('strainRadio');

let youngsModulus;
let stress = v1;
let strain = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

youngsModulusRadio.addEventListener('click', function() {
  variable1.textContent = 'Stress';
  variable2.textContent = 'Strain';
  stress = v1;
  strain = v2;
  result.textContent = '';
});

stressRadio.addEventListener('click', function() {
  variable1.textContent = 'Young\'s Modulus';
  variable2.textContent = 'Strain';
  youngsModulus = v1;
  strain = v2;
  result.textContent = '';
});

strainRadio.addEventListener('click', function() {
  variable1.textContent = 'Young\'s Modulus';
  variable2.textContent = 'Stress';
  youngsModulus = v1;
  stress = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(youngsModulusRadio.checked)
    result.textContent = `Young's Modulus = ${computeYoungsModulus().toFixed(2)}`;

  else if(stressRadio.checked)
    result.textContent = `Stress = ${computeStress().toFixed(2)}`;

  else if(strainRadio.checked)
    result.textContent = `Strain = ${computeStrain().toFixed(2)}`;
})

// calculation

function computeYoungsModulus() {
  return Number(stress.value) / Number(strain.value);
}

function computeStress() {
  return Number(youngsModulus.value) * Number(strain.value);
}

function computeStrain() {
  return Number(stress.value) / Number(youngsModulus.value);
}