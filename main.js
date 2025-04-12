const speakButton = document.getElementById("speak-btn");
const languageSelect = document.getElementById("voice-select");

function speakText() {
  const text = document.getElementById("text-input").value;
  const selectedLang = languageSelect.value;

  if (!text.trim()) return;

  // Голос будет выбран в зависимости от выбранного языка
  let voice = "Russian Female";  // По умолчанию используем русский женский голос
  if (selectedLang === "en-US") {
    voice = "UK English Male";  // Английский голос (мужской)
  } else if (selectedLang === "uk-UA") {
    voice = "Ukrainian Male";  // Украинский голос (мужской)
  } else if (selectedLang === "cs-CZ") {
    voice = "Czech Female";  // Чешский голос (женский)
  }

  // Воспроизведение текста
  responsiveVoice.speak(text, voice, { rate: 0.9 });  // Скорость речи - немного замедленная
}

// Добавление обработчика на кнопку
speakButton.addEventListener("click", speakText);
