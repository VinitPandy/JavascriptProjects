const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#result');

  // Clear previous results before adding new ones
  results.innerHTML = "";

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    const rp = document.createElement("p"); // Create a new paragraph element

    if (bmi < 18.6) {
      rp.innerHTML = `You are underweight. BMI: ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      rp.innerHTML = `You have a normal weight. BMI: ${bmi}`;
    } else {
      rp.innerHTML = `You are overweight. BMI: ${bmi}`;
    }

    results.appendChild(rp); // Append result to #result div
  }
});
