// show sigils from storage in the sigilList container
async function renderSigils() {
    let sigils = await loadSigils();

    // sortowanie najnowsze na górze
    sigils.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const container = document.getElementById("sigilList");
    container.innerHTML = "";

    if (sigils.length === 0) {
    container.textContent = "Brak zapisanych sigili.";
    return;
    }

    sigils.forEach(sigil => {
    const row = document.createElement("div");
    row.className = "sigil-row";

    const intentionCol = document.createElement("div");
    intentionCol.className = "col intention";
    intentionCol.textContent = sigil.intention;

    const sigilCol = document.createElement("div");
    sigilCol.className = "col sigil";
    sigilCol.textContent = sigil.sigil;

    const dateCol = document.createElement("div");
    dateCol.className = "col date";
    dateCol.textContent = new Date(sigil.createdAt).toLocaleString();

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = async () => {
        await deleteSigil(sigil.id);
        renderSigils();
    };

    row.appendChild(intentionCol);
    row.appendChild(sigilCol);
    row.appendChild(dateCol);
    row.appendChild(deleteBtn);
    container.appendChild(row);
    });
}

window.addEventListener("DOMContentLoaded", renderSigils);
