import QRCode from "react-qr-code";
import "./App.css";
import { useState } from "react";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }
  return (
    <>
      <div>
        <h1>QR CODE GENERATOR</h1>
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter your value here"
          />
          <h6></h6>
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateQrCode}
          >
            Generate
          </button>
        </div>
        <div>
          <h5></h5>
        </div>
        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
        </div>
      </div>
    </>
  );
}

export default App;
