import { useState } from "react";
import "./App.css";
import Form from "./form";
import EmailFetch from "./email";

function App() {
  const [currentTab, setTab] = useState("form");
  return (
    <div className="App">
      <header className="App-header">React sample Code</header>
      <div className="buttonWrap">
      <button type="button" className={`button ${currentTab === 'form' ? 'selected' : ''}`} onClick={() => setTab('form')}>Test 1</button>
      <button type="button" className={`button ${currentTab === 'email' ? 'selected' : ''}`} onClick={() => setTab('email')}>Test 2</button>
      </div>
      {currentTab === "form" ? <Form /> : <EmailFetch />}
    </div>
  );
}

export default App;
