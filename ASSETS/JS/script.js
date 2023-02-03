const convertButton = document.querySelector("#convert");
const timeInput = document.querySelector("#time");
const output = document.querySelector("#output");

convertButton.addEventListener("click", function() {
  const time = timeInput.value.split(":");
  const minutes = parseInt(time[0]);
  const seconds = parseInt(time[1]);
  const totalSeconds = minutes * 60 + seconds;
  const hours = totalSeconds / 3600;
  output.textContent = `${hours.toFixed(2)} horas`;
});
