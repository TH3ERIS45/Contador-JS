const decreaseBtn = document.getElementById("descreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increasetBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasetBtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function() {
    countlabel.textContent = 0;
}