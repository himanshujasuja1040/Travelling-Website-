export function myFunction() {
    const boxElement = document.getElementById("Box1");
    if (boxElement) {
      return boxElement.textContent; // or innerHTML, depending on your needs
    } else {
      throw new Error("Element with id 'Box1' not found.");
    }
  }