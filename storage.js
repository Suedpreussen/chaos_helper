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

async function saveSigil(text) {
  const db = await openDB();
  const tx = db.transaction("sigils", "readwrite");
  const store = tx.objectStore("sigils");

  const record = {
    id: crypto.randomUUID(),
    text: text,
    createdAt: new Date().toISOString()
  };

  store.put(record);
  return record.id;
}
