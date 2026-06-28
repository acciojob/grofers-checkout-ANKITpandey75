const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Remove old total row if it exists
    const oldRow = document.getElementById("ans");
    if (oldRow) {
        oldRow.remove();
    }

    const prices = document.querySelectorAll(".price");

    let total = 0;

    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    const table = document.querySelector("table");

    const tr = document.createElement("tr");
    tr.id = "ans";

    const td = document.createElement("td");
    td.colSpan = "2";
    td.textContent = total;

    tr.appendChild(td);
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);