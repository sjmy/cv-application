import "../styles/App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import { useRef } from "react";

function App() {
  const contentRef = useRef(null);
  return (
    <>
      <Header contentRef={contentRef} />
      <Main contentRef={contentRef} />
    </>
  );
}

export default App;
