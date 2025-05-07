fetch("https://www.comune.venezia.it/sites/default/files/publicCPSM2/stazioni/temporeale/Diga_Sud_Chioggia.html")
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const rows = doc.querySelectorAll("table tbody tr");
    const lastRow = rows[rows.length - 1];
    const cells = lastRow.querySelectorAll("td");

    document.getElementById("direzione").innerHTML = `Direzione vento: <strong>${cells[2].textContent} (${cells[1].textContent}°)</strong>`;
    document.getElementById("velMin").textContent = parseFloat(cells[4].textContent).toFixed(2);
    document.getElementById("velMed").textContent = parseFloat(cells[3].textContent).toFixed(2);
    document.getElementById("velMax").textContent = parseFloat(cells[5].textContent).toFixed(2);
  })
  .catch(error => {
    document.getElementById("direzione").textContent = "Errore nel caricamento dati";
    console.error("Errore:", error);
  });
