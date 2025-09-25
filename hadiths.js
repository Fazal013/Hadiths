const hadiths = [
  {
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    book: "Sahih al-Bukhari",
    verse: "Book 2, Hadith 12",
    explanation: "Promotes empathy and selflessness in faith."
  },
  {
    text: "The most beloved of people to Allah on the Day of Judgment and the closest to Him will be the just leader.",
    book: "Sahih al-Tirmidhi",
    verse: "Vol. 4, Book 11, Hadith 1325",
    explanation: "Justice and fairness are highly valued in Islam."
  },
  {
    text: "He who does not show mercy to others, will not be shown mercy.",
    book: "Sahih Muslim",
    verse: "Book 32, Hadith 6210",
    explanation: "Emphasizes the importance of showing compassion and mercy."
  },
  {
    text: "A good word is charity.",
    book: "Sahih Muslim",
    verse: "Book 4, Hadith 2563",
    explanation: "Kind speech is considered an act of charity."
  },
  {
    text: "Help your brother, whether he is an oppressor or oppressed.",
    book: "Sahih al-Bukhari",
    verse: "Book 46, Hadith 693",
    explanation: "Encourages aiding people in need, either by stopping injustice or supporting the victim."
  },
  {
    text: "The most beloved deeds to Allah are those done consistently, even if small.",
    book: "Sahih al-Bukhari",
    verse: "Book 76, Hadith 468",
    explanation: "Consistency in good actions is better than occasional grand deeds."
  },
  {
    text: "Beware! There is a piece of flesh in the body, and if it becomes good, the whole body becomes good; and if it becomes bad, the whole body becomes bad. That piece is the heart.",
    book: "Sahih al-Bukhari",
    verse: "Book 2, Hadith 52",
    explanation: "A healthy heart leads to righteous behavior; a corrupt heart leads to sin."
  },
  {
    text: "The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.",
    book: "Sahih Muslim",
    verse: "Book 33, Hadith 6441",
    explanation: "Strength and capability, when used for good, are valued in Islam."
  },
  {
    text: "Feed the hungry, visit the sick, and free the captive.",
    book: "Sahih al-Bukhari",
    verse: "Book 78, Hadith 1",
    explanation: "Acts of kindness and charity define a good Muslim."
  },
  {
    text: "Repel evil with what is better; then the one with whom you have enmity will become your friend.",
    book: "Sahih Muslim",
    verse: "Book 32, Hadith 6210",
    explanation: "Responding to hostility with kindness can transform relationships."
  }, {
    text: "Actions are judged by intentions.",
    book: "Sahih al-Bukhari",
    verse: "Book 1, Hadith 1",
    explanation: "The value of deeds is determined by the intentions behind them."
  },
  {
    text: "The best among you are those who are best in paying their debts.",
    book: "Sahih al-Bukhari",
    verse: "Book 34, Hadith 425",
    explanation: "Emphasizes the importance of fulfilling financial obligations."
  },
  {
    text: "The most complete of the believers in faith is the one with the best manners.",
    book: "Sunan Abu Dawood",
    verse: "Book 41, Hadith 4785",
    explanation: "Highlights that good character is a sign of strong faith."
  },
  {
    text: "Whoever believes in Allah and the Last Day should honor his guest.",
    book: "Sahih Muslim",
    verse: "Book 1, Hadith 348",
    explanation: "Encourages hospitality and respect towards guests."
  },
  {
    text: "The best of you are those who are best to their wives.",
    book: "Sunan al-Tirmidhi",
    verse: "Vol. 1, Book 46, Hadith 3895",
    explanation: "Emphasizes the importance of kindness towards wives."
  },
  
  
  {
    text: "Help your brother, whether he is an oppressor or oppressed.",
    book: "Sahih al-Bukhari",
    verse: "Book 46, Hadith 693",
    explanation: "Encourages aiding people in need, either by stopping injustice or supporting the victim."
  },
  {
    text: "The most beloved deeds to Allah are those done regularly, even if small.",
    book: "Sahih al-Bukhari",
    verse: "Book 76, Hadith 468",
    explanation: "Consistency in good actions is better than occasional grand deeds."
  },
  {
    text: "Beware! There is a piece of flesh in the body, and if it becomes good, the whole body becomes good; and if it becomes bad, the whole body becomes bad. That piece is the heart.",
    book: "Sahih al-Bukhari",
    verse: "Book 2, Hadith 52",
    explanation: "A healthy heart leads to righteous behavior; a corrupt heart leads to sin."
  },
  {
    text: "The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.",
    book: "Sahih Muslim",
    verse: "Book 33, Hadith 6441",
    explanation: "Strength and capability, when used for good, are valued in Islam."
  },
  {
    text: "Feed the hungry, visit the sick, and free the captive.",
    book: "Sahih al-Bukhari",
    verse: "Book 78, Hadith 1",
    explanation: "Acts of kindness and charity define a good Muslim."
  },
  {
    text: "Repel evil with what is better; then the one with whom you have enmity will become your friend.",
    book: "Sahih Muslim",
    verse: "Book 32, Hadith 6210",
    explanation: "Responding to hostility with kindness can transform relationships."
  },
  {
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    book: "Sahih al-Bukhari",
    verse: "Book 2, Hadith 12",
    explanation: "Promotes empathy and selflessness in faith."
  },
  {
    text: "The most beloved of people to Allah on the Day of Judgment and the closest to Him will be the just leader.",
    book: "Sahih al-Tirmidhi",
    verse: "Vol. 4, Book 11, Hadith 1325",
    explanation: "Justice and fairness are highly valued in Islam."
  },
  {
    text: "A Muslim is the one from whose tongue and hand the people are safe.",
    book: "Sahih al-Bukhari",
    verse: "Book 2, Hadith 10",
    explanation: "True Muslims are harmless to others."
  },
  {
    text: "Charity does not decrease wealth.",
    book: "Sahih Muslim",
    verse: "Book 5, Hadith 2200",
    explanation: "Giving in charity does not reduce one's wealth."
  },
  {
    text: "The best Jihad is the one for self-purification.",
    book: "Sahih al-Bukhari",
    verse: "Book 52, Hadith 269",
    explanation: "Self-improvement is the highest form of struggle."
  },
  {
    text: "Whoever believes in Allah and the Last Day, let him honor his neighbor.",
    book: "Sahih Muslim",
    verse: "Book 1, Hadith 77",
    explanation: "Respecting neighbors is a key aspect of faith."
  },
  {
    text: "The most complete of the believers in faith is the one who is best in manners.",
    book: "Sunan Abu Dawood",
    verse: "Book 41, Hadith 4785",
    explanation: "Good manners are a sign of strong faith."
  },
  {
    text: "Deeds are by their final actions.",
    book: "Sahih al-Bukhari",
    verse: "Book 76, Hadith 469",
    explanation: "The outcome of deeds is determined by their conclusion."
  }
];
