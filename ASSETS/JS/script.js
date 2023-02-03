const convertButton = document.querySelector("#convert");
const timeInput = document.querySelector("#time");
const precisionRadios = document.querySelectorAll('input[name="precision"]');
const output = document.querySelector("#output");

Inputmask("99:99").mask(timeInput);

convertButton.addEventListener("click", function() {
  const time = timeInput.value.split(":");
  const minutes = parseInt(time[0]);
  const seconds = parseInt(time[1]);
  const totalSeconds = minutes * 60 + seconds;
  const hours = totalSeconds / 3600;

  let precision = 0;
  for (let i = 0; i < precisionRadios.length; i++) {
    if (precisionRadios[i].checked) {
      precision = parseInt(precisionRadios[i].value);
      break;
    }
  }
  output.textContent = `${hours.toFixed(precision)} horas`;
});
