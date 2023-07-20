const status__column_time = document.querySelector("#status__column-time");

function timeFlow() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  status__column_time.innerText = `${hours}:${minutes}`;
}

timeFlow();
setInterval(timeFlow, 1000);
