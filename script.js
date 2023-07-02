document.getElementById("familyTree").style.display = "none";

function handleUpload() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (event) {
      const data = event.target.result;
      // Process the data and build the tree
      buildTree(data);
    };
    reader.onerror = function (event) {
      console.error("Error reading file: ", event.target.error);
    };
  }
}

function buildTree(data) {
  // Parse the data and build the tree structure
  // Use HTML DOM manipulation or a library like D3.js to create and display the family tree
  // Example:
  const treeContainer = document.getElementById("treeContainer");
  treeContainer.innerHTML = "<p>Family tree will be displayed here.</p>";

  // Generate an image using Leonardo AI
  generateImage(data);
}

function generateImage(data) {
  // Use Leonardo AI or any other image generation service/API to generate an image based on the data

  // Example using a placeholder image
  const imageSrc = "https://via.placeholder.com/400"; // Replace with the generated image URL

  // Create and display the image element
  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = "Generated Family Tree Image";
  treeContainer.innerHTML = ""; // Clear any previous content
  treeContainer.appendChild(image);

  // Show the family tree section
  document.getElementById("uploadForm").style.display = "none";
  document.getElementById("familyTree").style.display = "block";
}
