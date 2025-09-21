function rollDice() {
  for (let i = 1; i <= 5; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // Random number 1-6
    document.getElementById(`die${i}`).value = roll;
  }
}
