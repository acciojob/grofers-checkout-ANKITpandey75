const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Remove previous answer row
    const old = document.getElementById("ans");
    if (old) old.remove();

    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach(price => {
        total += Number(price.textContent);
    });

    const table = document.querySelector("table");

    const row = document.createElement("tr");
    row.id = "ans";

    const cell = document.createElement("td");
    cell.colSpan = "2";
    cell.textContent = total;

    row.appendChild(cell);
    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);