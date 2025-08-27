function planTrip() {
  const destination = document.getElementById("destination").value;
  const result = document.getElementById("result");

  if (destination.trim() === "") {
    result.textContent = "Please enter a destination 📝";
  } else {
    result.textContent = `✨ Great choice! Let's plan your trip to ${destination}.`;
  }
}
