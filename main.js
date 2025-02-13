// Hent elementene fra HTML
const imageSelect = document.getElementById('imageSelect'); // Select-boksen
const displayImage = document.getElementById('displayImage'); // Bildet som skal vises

// Legg til en event listener for å oppdatere bildet når brukeren velger et alternativ
imageSelect.addEventListener('change', function() {
  const selectedImage = imageSelect.value; // Hent valgt bilde
  
  if (selectedImage) {
    // Sett kilden til valgt bilde
    displayImage.src = `./images/${selectedImage}`;
  } else {
    // Sett tilbake standardbilde hvis ingen bilde er valgt
    displayImage.src = './images/Seagal3.webp';
  }
});
  
    /*
    // Alternativ metode 2: Bruke if/else-logikk direkte i en funksjon
    function changeImageIfElse() {
      const selectedValue = imageSelect.value;
      if (selectedValue === "") {
        displayImage.src = "";
      } else if (selectedValue === "Seagal1.webp") {
        displayImage.src = "images/Seagal1.webp";
      } else if (selectedValue === "Seagal2.webp") {
        displayImage.src = "images/Seagal2.webp";
      } else if (selectedValue === "Seagal3.webp") {
        displayImage.src = "images/Seagal3.webp";
      }
    }
    // For å bruke denne metoden, kan du sette:
    // imageSelect.onchange = changeImageIfElse;
    */
  
    /*
    // Alternativ metode 3: Bruke switch/case
    function changeImageSwitch() {
      const selectedValue = imageSelect.value;
      switch (selectedValue) {
        case "Seagal1.webp":
          displayImage.src = "images/Seagal1.webp";
          break;
        case "Seagal2.webp":
          displayImage.src = "images/Seagal2.webp";
          break;
        case "Seagal3.webp":
          displayImage.src = "images/Seagal3.webp";
          break;
        default:
          displayImage.src = "";
      }
    }
    // For å bruke denne metoden, kan du sette:
    // imageSelect.onchange = changeImageSwitch;
    */
  
