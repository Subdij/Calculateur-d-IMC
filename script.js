// script.js

document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight)) {
      alert("Veuillez saisir des valeurs numériques valides pour la taille et le poids.");
      return;
    }
    
    if (height <= 0 || height > 250 || weight <= 0 || weight > 200) {
      alert("Assurez-vous que la taille ne dépasse pas 250 cm et le poids ne dépasse pas 200 kg.");
      return;
    }
    
    const bmi = calculateBMI(weight, height);
    displayResult(bmi);
  });
  
  function calculateBMI(weight, height) {
    const heightMeters = height / 100;
    return (weight / (heightMeters * heightMeters)).toFixed(2);
  }
  
  function displayResult(bmi) {
    let result = '';

    if (bmi < 18.5) {
        result = `Votre IMC est ${bmi}. Vous êtes maigre :)`;
    } else if (bmi >= 18.5 && bmi < 25) {
        result = `Votre IMC est ${bmi}. Vous êtes normale :)`;
    } else if (bmi >= 25 && bmi < 30) {
        result = `Votre IMC est ${bmi}. Vous êtes en surpoids :)`;
    } else if (bmi >= 30 && bmi < 35) {
        result = `Votre IMC est ${bmi}. Vous êtes en obésité modérée :(`;
    } else if (bmi >= 35) {
        result = `Votre IMC est ${bmi}. Vous êtes en obésité sévère :(`;
    } else {
        result = `Veuillez saisir des valeurs valides pour le poids et la taille.`;
    }
    
    document.getElementById('result').innerHTML = result;
  }
  