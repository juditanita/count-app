const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");

let count = 0;
incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;

  console.log(count);
});

function Save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  console.log(countStr);
}
