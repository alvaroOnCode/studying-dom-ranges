(() => {
  // Get main span
  const mainSpan = document.querySelector("#main-span");

  // Setting up offsets values
  const startOffset = 3;
  const endOffset = 3;

  // Setting up range
  const range = new Range();
  range.setStart(mainSpan.childNodes[1].firstChild, startOffset);
  range.setEnd(mainSpan.childNodes[2], endOffset);

  // Apply selection
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(range);
})();
