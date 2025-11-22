/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const intputfe = document.getElementById("input-fe");
const output_length = document.getElementById("length-output");
const output_vol = document.getElementById("vol-output");
const output_mass = document.getElementById("mass-output");

function UnitConvert() {
  const baseVal = Number(intputfe.value);

  if (isNaN(baseVal) || baseVal === 0) {
    alert("Error please put a valid number only");
    output_length.textContent = `0.00 Feet | 0.00 Meters`;
    output_vol.textContent = `0.00 Gallons | 0.00 Liters`;
    output_mass.textContent = ` 0.00 Pounds | 0.00 Kilograms`;
    return;
  }

  let l1 = baseVal * 3.281;
  let l2 = baseVal / 3.281;

  output_length.textContent = `${baseVal.toFixed(3)} meters = ${l1.toFixed(
    3
  )} feet | ${baseVal.toFixed(3)} feet = ${l2.toFixed(3)} meters`;

  let v1 = baseVal * 0.264;
  let v2 = baseVal / 0.264;

  output_vol.textContent = `${baseVal.toFixed(3)} liters = ${v1.toFixed(
    3
  )} gallons | ${baseVal.toFixed(3)} gallons = ${v2.toFixed(3)} liters`;

  let m1 = baseVal * 2.204;
  let m2 = baseVal / 2.204;

  output_mass.textContent = `${baseVal.toFixed(3)} kilos = ${m1.toFixed(
    3
  )} pounds | ${baseVal.toFixed(3)} pounds = ${m2.toFixed(3)} kilos`;
}
