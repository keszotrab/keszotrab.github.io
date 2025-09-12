const langSelect = document.getElementById("language-droplist");

fetch("./data/langData.JSON")
  .then((res) => res.json())
  .then((data) => {
    translations = data;

    let currentLang = getLangPreference() || "eng";
    setLanguage(currentLang);
    document.getElementById("language-droplist").value = currentLang;
  });



function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}



function saveLangPreference(lang) {
  localStorage.setItem("preferredLang", lang);
}

function getLangPreference() {
  return localStorage.getItem("preferredLang");
}

//console.log(langSelect);
langSelect.addEventListener("change", () => {
  const newLang = langSelect.value;
  setLanguage(newLang);
  saveLangPreference(newLang);
});