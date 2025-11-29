import "../styles/Header.css";
import "../styles/Print.css";
import printElements from "../print_elements/print_elements.js";

function print() {
  const printContent = document.querySelector(".displaySectionContainer");
  if (!printContent) return;

  // preserve previous inline styles to restore after print
  const prev = {
    width: printContent.style.width,
    margin: printContent.style.margin,
    transform: printContent.style.transform,
    transformOrigin: printContent.style.transformOrigin,
    position: printContent.style.position,
  };

  // temporarily force A4 width so browser scales correctly
  printContent.style.width = "210mm";
  printContent.style.margin = "0";
  printContent.style.transform = "none";
  printContent.style.transformOrigin = "top left";
  printContent.style.position = "relative";
  printContent.style.fontSize = "large";

  // call existing print helper; cleanup after a short delay to allow print to start
  try {
    printElements.print([printContent]);
  } finally {
    // cleanup after print has started — small timeout avoids restoring too early
    setTimeout(() => {
      printContent.style.width = prev.width;
      printContent.style.margin = prev.margin;
      printContent.style.transform = prev.transform;
      printContent.style.transformOrigin = prev.transformOrigin;
      printContent.style.position = prev.position;
    }, 500);
  }
}

function Header() {
  return (
    <header>
      <div className="headerContainer">
        <div className="headerWords">
          <h1>cv-application</h1>
          <p>Enter your CV details in the forms below and download!</p>
        </div>
        <div className="download">
          <button className="formTitle" onClick={print}>
            <img src="../img/download.svg" className="download" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
