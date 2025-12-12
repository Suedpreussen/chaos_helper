// show sigils from storage in the sigilList container
async function renderSigils() {
    const sigils = await loadSigils();
    // sortowanie po dacie: najnowsze na górze
    sigils.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const container = document.getElementById("sigilList");
    container.innerHTML = "";

    if (sigils.length === 0) {
    container.textContent = "Brak zapisanych sigili.";
    return;
    }

    sigils.forEach(sigil => {
    const div = document.createElement("div");
    div.className = "sigil-item";

    // Kolumna 1: intencja
    const intentionDiv = document.createElement("div");
    intentionDiv.className = "sigil-part intention";
    intentionDiv.textContent = sigil.intention;

    // Kolumna 2: sigil
    const sigilDiv = document.createElement("div");
    sigilDiv.className = "sigil-part sigil";
    sigilDiv.textContent = sigil.sigilText;

    // Kolumna 3: data
    const dateDiv = document.createElement("div");
    dateDiv.className = "sigil-part date";
    dateDiv.textContent = new Date(sigil.createdAt).toLocaleString();


    const btn = document.createElement("button");
    btn.textContent = "Usuń";
    btn.onclick = async () => {
        await deleteSigil(sigil.id);
        renderSigils();
    };

    div.appendChild(intentionDiv);
    div.appendChild(sigilDiv);
    div.appendChild(dateDiv);
    div.appendChild(btn);
    container.appendChild(div);
    });
}

window.addEventListener("DOMContentLoaded", renderSigils);
