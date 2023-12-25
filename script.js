document.addEventListener('DOMContentLoaded', function () {
  // Example usage
  const str = "Hello World";
  const subStr = "world";
  const result = indexOfIgnoreCase(str, subStr);
  document.getElementById('result').innerText = `Index of '${subStr}' in '${str}': ${result}`;
});

function indexOfIgnoreCase(str, subStr) {
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  return lowerStr.indexOf(lowerSubStr);
}
