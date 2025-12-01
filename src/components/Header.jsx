import "../styles/Header.css";
import { useReactToPrint } from "react-to-print";

function Header({ contentRef }) {
  const reactToPrintFn = useReactToPrint({
    contentRef,
  });
  return (
    <header>
      <div className="headerContainer">
        <div className="headerWords">
          <h1>cv-application</h1>
          <p>Enter your CV details in the forms below and download!</p>
        </div>
        <div className="download">
          <button className="formTitle" onClick={reactToPrintFn}>
            <img src="../img/download.svg" className="download" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
