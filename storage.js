// store and retrieve sigils using IndexedDB
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("sigilDB", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("sigils")) {
        db.createObjectStore("sigils", { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveSigilToDB(sigilText, intention) {
  const db = await openDB();
  const tx = db.transaction("sigils", "readwrite");
  const store = tx.objectStore("sigils");

  const record = {
    id: crypto.randomUUID(),
    sigilText: sigilText,
    intention: intention,
    createdAt: new Date().toISOString()
  };

  store.put(record);
  return record.id;
}

async function loadSigils() {
  const db = await openDB();
  const tx = db.transaction("sigils", "readonly");
  const store = tx.objectStore("sigils");

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function deleteSigil(id) {
  const db = await openDB();
  const tx = db.transaction("sigils", "readwrite");
  const store = tx.objectStore("sigils");
  store.delete(id);
}
