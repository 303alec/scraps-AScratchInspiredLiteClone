const puzzle_block_rules = {
  "category:control": [
    {
      "id": "on_start",
      "display": "Run On Start",
      "container": [
        {
          "type": "sequence",
          "function": "execution"
        }
      ],
      "colour": "#5ba58c",
      "tooltip": "When Start is clicked, run this block's inner execution sequence.",
      // More puzzle functionality and structure rules here
    },
    // More blocks here
  ],
  // More categories here
}

function loadBlocksFromJSON(jsonData) {
  // Code to parse and inject JSON data into the calling document
  // Implementing the functionality to populate the script editor with block types from JSON
}

function showBlocksForCategory(categoryId) {
  // Code to display scripts based on selected category and switch the scripts depending on the chosen category
  // Implementing the functionality to categorize and display blocks in the script editor
}