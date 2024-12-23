function calculateIngredients() {
  const numMargaritas = document.getElementById('numMargaritas').value;

  if (numMargaritas && numMargaritas > 0) {
    const tequila = (numMargaritas * 2).toFixed(1);
    const tripleSec = (numMargaritas * 1).toFixed(1);
    const simpleSyrup = (numMargaritas * 0.5).toFixed(1);
    const limes = Math.ceil(numMargaritas * 2); // Assuming 1 lime provides 2 oz of juice

    document.getElementById('result').innerHTML = `
      🌟 For ${numMargaritas} margaritas, you’ll need: 🌟<br>
      - 🍹 ${tequila} oz of tequila<br>
      - 🍊 ${tripleSec} oz of triple sec<br>
      - 🍯 ${simpleSyrup} oz of simple syrup<br>
      - 🌴 ${limes} lime(s)<br>
      Enjoy responsibly! 🥂
    `;
  } else {
    document.getElementById('result').innerHTML = "⛔ Please enter a valid number of margaritas!";
  }
}
