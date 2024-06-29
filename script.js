document.addEventListener("DOMContentLoaded", () => {
  const words = ["Churros", "Mario Party", "Leaf", "Spoon", "Picnic", "LOVE"];
  const backgrounds = [
    "url('./assets/1.jpg')",
    "url('./assets/2.jpg')",
    "url('./assets/3.jpg')",
    "url('./assets/4.jpg')",
    "url('./assets/5.jpg')",
    "url('./assets/6.jpg')",
  ];

  function getDailyWordIndex() {
    const startDate = new Date(2024, 0, 1); // Start from January 1, 2024
    const today = new Date();
    const differenceInTime = today.getTime() - startDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays % words.length;
  }

  function setBackground(index) {
    document.body.style.backgroundImage =
      backgrounds[index % backgrounds.length];
  }

  function getFormattedDate() {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString(undefined, options);
  }

  const wordIndex = getDailyWordIndex();
  const wordElement = document.getElementById("word");
  wordElement.textContent = words[wordIndex];

  const titleElement = document.getElementById("title");
  titleElement.textContent = "Word of today: " + getFormattedDate();

  setBackground(wordIndex);
});
