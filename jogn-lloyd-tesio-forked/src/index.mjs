//1. The Baguio Road Trip Budget Manager
function calculateFuelCost(
  distanceLeg1Km,
  distanceLeg2Miles,
  distanceLeg3Meters,
  efficiencyKmL,
  costPerLiter
) {
  const MILES_TO_KM_FACTOR = 1.60934;
  const METER_TO_KM = 1000;

  let convLeg2 = distanceLeg2Miles * MILES_TO_KM_FACTOR;

  let convLeg3 = distanceLeg3Meters / METER_TO_KM;

  let totalDistance = Math.round(distanceLeg1Km + convLeg2 + convLeg3);

  let totalFuel = Math.round(totalDistance / efficiencyKmL);

  let totalCost = totalFuel * costPerLiter;

  console.log(
    `Total distance from Manila to Baguio is ${totalDistance} km, the total fuel is ${totalFuel}L, and total fuel cost is ₱${totalCost}`
  );
}

calculateFuelCost(250, 75, 150000, 12, 64);

//2. The Homeowner's Fencing Quote

function calculateFencingMeters(lengthMeters, widthFeet) {
  const FEET_TO_METER_FACTOR = 0.3048;

  let convertWidth = widthFeet * FEET_TO_METER_FACTOR;

  let totalFencing = Math.round(2 * (lengthMeters + convertWidth));

  console.log(`Total fencing needed is ${totalFencing} meters`);
}

calculateFencingMeters(15.5, 50);

//3. The Dinner Party Treasurer

function calculateIndividualShareWithFee(
  billSubtotal,
  tipRate,
  numberOfPeople,
  paymentFee
) {
  let tipAmount = billSubtotal * tipRate;

  let grandTotal = billSubtotal + tipAmount + paymentFee;

  let costPerPerson = grandTotal / numberOfPeople;

  costPerPerson = Math.round(costPerPerson * 100) / 100;

  console.log(
    `The tip amount is ₱${tipAmount}, the grand total is ₱${grandTotal}, and each person should pay ₱${costPerPerson}.`
  );

  return costPerPerson;
}

calculateIndividualShareWithFee(4550.0, 0.18, 7, 10.5);
