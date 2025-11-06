import "../styles/Header.css";
import "../styles/Print.css";
import printElements from "../print_elements/print_elements.js";

function print() {
  const printContent = document.querySelector(".displaySectionContainer");
  printElements.print([printContent]);
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
