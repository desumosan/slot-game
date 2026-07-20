const symbols = ["🍒", "🍋", "⭐", "🔔", "7️⃣"];

const slot = document.getElementById("slot");
const result = document.getElementById("result");
const button = document.getElementById("spinButton");

button.addEventListener("click", () => {

    const a = symbols[Math.floor(Math.random() * symbols.length)];
    const b = symbols[Math.floor(Math.random() * symbols.length)];
    const c = symbols[Math.floor(Math.random() * symbols.length)];

    slot.textContent = `${a} ${b} ${c}`;

    if (a === b && b === c) {
        result.textContent = "🎉 大当たり！！";
    } else {
        result.textContent = "😢 ハズレ";
    }

});