const correctNames = [
  "nic",
  "nicx",
  "cole",
  "nics",
  "anne",
  "nicole",
  "umangay",
  "nicole anne",
  "nicole anne umangay",
];

function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();

  if (correctNames.includes(input)) {
    // Save the name with proper capitalization
    //localStorage.setItem("visitorName", document.getElementById("nameInput").value.trim());

    // Go to next page
    window.location.href = "next.html";
  } else {
    document.getElementById("message").textContent =
      "❌ Wrong name! Hindi Ikaw yan 😝.";
  }
}
