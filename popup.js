document.getElementById("beautify-btn").addEventListener("click", function() {
  const jsonInput = document.getElementById("json-input").value;
  const errorMessage = document.getElementById("error-message");
  const jsonOutput = document.getElementById("json-output");

  try {
    // Check if the JSON is valid
    const parsedJson = JSON.parse(jsonInput);

    // Beautify JSON
    const beautifiedJson = JSON.stringify(parsedJson, null, 2);
    jsonOutput.value = beautifiedJson;
    errorMessage.textContent = '';  // Clear error message
  } catch (e) {
    // If invalid, show error message
    errorMessage.textContent = 'Invalid JSON: ' + e.message;
    jsonOutput.value = '';  // Clear output
  }
});

document.getElementById("minify-btn").addEventListener("click", function() {
  const jsonInput = document.getElementById("json-input").value;
  const errorMessage = document.getElementById("error-message");
  const jsonOutput = document.getElementById("json-output");

  try {
    // Check if the JSON is valid
    const parsedJson = JSON.parse(jsonInput);

    // Minify JSON
    const minifiedJson = JSON.stringify(parsedJson);  // No indentation for minification
    jsonOutput.value = minifiedJson;
    errorMessage.textContent = '';  // Clear error message
  } catch (e) {
    // If invalid, show error message
    errorMessage.textContent = 'Invalid JSON: ' + e.message;
    jsonOutput.value = '';  // Clear output
  }
});

document.getElementById("copy-btn").addEventListener("click", function() {
  const jsonOutput = document.getElementById("json-output");

  // Copy to clipboard
  if (jsonOutput.value) {
    navigator.clipboard.writeText(jsonOutput.value)
      .then(() => {
        alert("Result copied to clipboard!");
      })
      .catch(err => {
        alert("Failed to copy: " + err);
      });
  }
});
