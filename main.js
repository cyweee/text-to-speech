let responsiveVoiceLoaded = false;

function loadResponsiveVoice(callback) {
  if (responsiveVoiceLoaded) {
    callback();
    return;
  }

  const script = document.createElement('script');
  script.src = "https://code.responsivevoice.org/responsivevoice.js?key=Pk55P2ka";
  script.onload = () => {
    responsiveVoiceLoaded = true;
    console.log("✅ ResponsiveVoice loaded");
    callback();
  };
  document.head.appendChild(script);
}

function speakText() {
  const text = document.getElementById("text-input").value.trim();
  const selectedLang = document.getElementById("voice-select").value;

  if (!text) return;

  const speakButton = document.getElementById("speak-btn");

  let voiceLang = "UK English Female";
  if (selectedLang === "cs-CZ") {
    voiceLang = "Czech Female";
  }
  

  responsiveVoice.speak(text, voiceLang, { rate: 1 });

  // UI
  speakButton.textContent = "🛑 Speaking...";
  speakButton.disabled = true;
  speakButton.style.backgroundColor = "#aa3333";

  const estimatedTime = Math.max(2000, text.length * 100);

  setTimeout(() => {
    speakButton.textContent = "Speak";
    speakButton.disabled = false;
    speakButton.style.backgroundColor = "#333";
  }, estimatedTime);
}

document.getElementById("speak-btn").addEventListener("click", function () {
  loadResponsiveVoice(speakText);
});
