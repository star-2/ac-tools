const setLoadoutBtn = document.getElementById('setLoadoutBtn');
const statusText = document.getElementById('status');
const usernameInput = document.getElementById('username');
const showUsernameBtn = document.getElementById('showUsernameBtn');
const usernameDisplay = document.getElementById('usernameDisplay');
const rickrollBtn = document.getElementById('rickrollBtn');

setLoadoutBtn.addEventListener('click', () => {
  const jsonText = document.getElementById('jsonInput').value.trim();
  if (!jsonText) {
    statusText.textContent = 'Please paste your JSON loadout!';
    return;
  }

  try {
    JSON.parse(jsonText); // Just test if valid JSON
    // Here you would send JSON to your backend or server
    statusText.textContent = 'Loadout set successfully! 🎉';
  } catch (e) {
    statusText.textContent = 'Invalid JSON! Please fix and try again.';
  }
});

showUsernameBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (!username) {
    usernameDisplay.textContent = 'Please enter a username.';
  } else {
    usernameDisplay.textContent = `Your Animal Company username: ${username}`;
  }
});

rickrollBtn.addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
});
