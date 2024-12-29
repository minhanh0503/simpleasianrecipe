var url = "http://localhost:3000/post";

function newSearch() {
  // Get the values from the input fields
  var name = $("#nameInput").val();
  var contact = $("#contactInput").val();

  // Check if name is a string
  if (typeof name !== "string" || name.trim() === "") {
    alert("Your name is incorrect, please enter again");
    return;
  }

  // Check if contact number is a number
  if (isNaN(contact) || contact.trim() === "") {
    alert("Your contact number is incorrect, please enter again");
    return;
  }

  // If inputs are valid, initiate the POST request
  $.post(url, { name: name, contact: contact })
    .done(function (data) {
      console.log("POST request successful:", data);
      // Redirect to the next page after successful submission
      window.location.href = "frontend/selection.html";
    })
    .fail(function (error) {
      console.error("POST request failed:", error);
      // Handle error if necessary
    });
}

$(document).ready(function () {
  $("#introPageButton").click(function () {
    newSearch();
  });

  $("#generateButton").click(function () {
    generateRecipe(); // Call the generateRecipe function when the button is clicked
  });

  var recipeImage = localStorage.getItem("recipeImage");
  if (recipeImage) {
    var imageElement = $("<img>").attr({
      src: recipeImage,
      alt: "Recipe Image",
      style: "max-width: 100%; height: auto;", // Make sure it's responsive
    });
    $("#recipeImage").empty().append(imageElement); // Add the image to the DOM
  }
  $("#returnButton").click(function () {
    localStorage.removeItem("recipeImage"); // Optional: clean up localStorage
    window.location.href = "intro.html";
  });
});

function generateRecipe() {
  var ingredient = $("#ingredientSelect").val();
  var tool = $("#toolSelect").val();

  var imageFilename;
  var basePath = "frontend/pics/"; // Base path to the images
  var defaultImage = "default.png"; // A default image if no match is found

  switch (ingredient + "_" + tool) {
    case "Coconut_Steamer":
      imageFilename = "pics/Coconut_Steamer.png";
      break;
    case "Lamb_Oven":
      imageFilename = "pics/lamb_oven.png";
      break;
    case "Chicken_PanPot":
      imageFilename = "pics/chicken_panpot.png";
      break;
    case "Fish_Oven":
      imageFilename = "pics/fish_oven.png";
      break;
    case "Milk_Refrigerator":
      imageFilename = "pics/milk_refrigerator.png";
      break;
    case "Strawberry_Refrigerator":
      imageFilename = "pics/strawberry_refrigerator.png";
      break;
    default:
      console.error("No matching image found");
      return; // Use default image
  }

  localStorage.setItem("recipeImage", imageFilename); // Store the image filename
  window.location.href = "frontend/result.html"; // Redirect to the result page
}
