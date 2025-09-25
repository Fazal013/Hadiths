let lastIndex = -1;

function showRandomHadith() {
  const hadithText = document.getElementById("hadithText");
  const hadithSource = document.getElementById("hadithSource");
  const hadithExplanation = document.getElementById("hadithExplanation");

  // Fade out with slide down
  hadithText.style.opacity = 0;
  hadithSource.style.opacity = 0;
  hadithExplanation.style.opacity = 0;
  hadithText.style.transform = "translateY(20px)";
  hadithSource.style.transform = "translateY(20px)";
  hadithExplanation.style.transform = "translateY(20px)";

  setTimeout(() => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * hadiths.length);
    } while (randomIndex === lastIndex); // prevent repetition
    lastIndex = randomIndex;

    const hadith = hadiths[randomIndex];

    // Update content
    hadithText.innerText = hadith.text;
    hadithSource.innerText = `${hadith.book} — ${hadith.verse}`;
    hadithExplanation.innerText = hadith.explanation;

    // Animate differently based on length
    const duration = Math.min(1 + hadith.text.length / 100, 2); // 1s to 2s
    hadithText.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
    hadithSource.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
    hadithExplanation.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;

    // Fade in with slide-up
    hadithText.style.opacity = 1;
    hadithSource.style.opacity = 1;
    hadithExplanation.style.opacity = 1;
    hadithText.style.transform = "translateY(0)";
    hadithSource.style.transform = "translateY(0)";
    hadithExplanation.style.transform = "translateY(0)";
  }, 600);
}

// Show one hadith on page load
window.onload = showRandomHadith;
