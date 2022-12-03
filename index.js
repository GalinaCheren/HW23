const newTable = document.createElement("table");
for (let i = 0; i < 10; i++) {
  const tr = document.createElement("tr");

  for (let c = 1; c <= 10; c++) {
    const td = document.createElement("td");
    td.innerText = i * 10 + c;
    tr.append(td);
  }
  newTable.append(tr);
}
document.body.append(newTable);
