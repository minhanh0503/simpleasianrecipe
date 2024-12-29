const assert = require("assert");
const fs = require("fs");
const path = require("path");

// Load the client-side JavaScript file containing your function
const { generateRecipe } = require("../client_side.js");

describe("Testing generateRecipe function", function () {
  it("should return recipe of lamb oven ", function () {
    const ingredient = "Lamb";
    const tool = "Oven";
    generateRecipe(ingredient, tool);
    const recipeImage = localStorage.getItem("recipeImage");
    assert.strictEqual(recipeImage, "pics/lamb_oven.png");
  });
  it("should return recipe of coconut steamer ", function () {
    const ingredient = "Coconut";
    const tool = "Steamer";
    generateRecipe(ingredient, tool);
    const recipeImage = localStorage.getItem("recipeImage");
    assert.equal(recipeImage, "pics/Coconut_Steamer.png");
  });
  it("should return recipe of chicken panpot", function () {
    const ingredient = "Chicken";
    const tool = "PanPot";
    generateRecipe(ingredient, tool);
    const recipeImage = localStorage.getItem("recipeImage");
    assert.equal(recipeImage, "pics/chicken_panpot.png");
  });
  it("should return recipe of fish oven", function () {
    const ingredient = "Fish";
    const tool = "Oven";
    generateRecipe(ingredient, tool);
    const recipeImage = localStorage.getItem("recipeImage");
    assert.equal(recipeImage, "pics/fish_oven.png");
  });
  it("should return recipe of milk refridgerator", function () {
    const ingredient = "Milk";
    const tool = "Refridgerator";
    generateRecipe(ingredient, tool);
    const recipeImage = localStorage.getItem("recipeImage");
    assert.equal(recipeImage, "pics/milk_refrigerator.png");
  });
  it("should return recipe of strawberry refridgerator", function () {
    const ingredient = "Strawberry";
    const tool = "Refridgerator";
    generateRecipe(ingredient, tool);
    const recipeImage = localStorage.getItem("recipeImage");
    assert.equal(recipeImage, "pics/strawberry_frigerator.png");
  });
});
