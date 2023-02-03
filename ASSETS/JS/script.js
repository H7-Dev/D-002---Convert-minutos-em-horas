const convertButton = document.querySelector("#convert");
const timeInput = document.querySelector("#time");
const precisionRadios = document.querySelectorAll('input[name="precision"]');
const output = document.querySelector("#output");

Inputmask("99:99").mask(timeInput);

function convertTime(timeInput) {
  const time = timeInput.value.split(":");
  const minutes = parseInt(time[0]);
  const seconds = parseInt(time[1]);
  const totalSeconds = minutes * 60 + seconds;

  let precision = 0;
  for (let i = 0; i < precisionRadios.length; i++) {
    if (precisionRadios[i].checked) {
      precision = parseInt(precisionRadios[i].value);
      break;
    }
  }

  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const remainingMinutes = Math.floor(remainingSeconds / 60);
  const remainingSecondsAfterMinutes = Math.round(remainingSeconds % 60);

  let result = "";
  if (hours > 0) {
    result += `${hours} hora${hours > 1 ? "s" : ""}`;
  }
  if (remainingMinutes > 0) {
    result += ` ${remainingMinutes} minuto${remainingMinutes > 1 ? "s" : ""}`;
  }
  if (remainingSecondsAfterMinutes > 0) {
    result += ` ${remainingSecondsAfterMinutes} segundo${remainingSecondsAfterMinutes > 1 ? "s" : ""}`;
  }

  output.textContent = result;
}

convertButton.addEventListener("click", function () {
  convertTime(timeInput);
});
