// === Popup run ===
const RUNES = {
  fehu: "ᚠ", uruz: "ᚢ", thurisaz: "ᚦ", ansuz: "ᚨ",
  raido: "ᚱ", kenaz: "ᚲ", gebo: "ᚷ", wunjo: "ᚹ",
  hagalaz: "ᚺ", nauthiz: "ᚾ", isa: "ᛁ", jera: "ᛃ",
  eihwaz: "ᛇ", perthro: "ᛈ", algiz: "ᛉ", sowilo: "ᛋ",
  tiwaz: "ᛏ", berkano: "ᛒ", ehwaz: "ᛖ", mannaz: "ᛗ",
  laguz: "ᛚ", ingwaz: "ᛜ", othala: "ᛟ", dagaz: "ᛞ"
};

const popup = document.getElementById("runePopup");
const openBtn = document.getElementById("openRunes");
const closeBtn = document.getElementById("closeRunes");
const grid = document.getElementById("runeGrid");
const resultBox = document.getElementById("result");

// pokaż popup
openBtn.onclick = () => {
  popup.style.display = "flex";
};

// zamknij popup
closeBtn.onclick = () => {
  popup.style.display = "none";
};

// klik poza modal = zamknij
popup.onclick = (e) => {
  if (e.target === popup) popup.style.display = "none";
};

// generowanie siatki run
Object.entries(RUNES).forEach(([name, glyph]) => {
  const item = document.createElement("div");
  item.className = "rune-item";
  item.innerHTML = `
    <div class="rune-glyph">${glyph}</div>
    <div class="rune-name">${name}</div>
  `;

  item.onclick = () => {
    resultBox.textContent += " " + glyph + " ";
  };

  grid.appendChild(item);
});
