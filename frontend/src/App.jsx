import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [word, setWord] = useState("");
  const [from, setFrom] = useState("english");
  const [to, setTo] = useState("amharic");
  const [translated, setTranslated] = useState("");

  const getResponse = async () => {
    if (!word.trim()) return;
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/translate?word=${word}&from=${from}`
      );
      const data = response.data.requiredWord;
      setTranslated(data[to] || "No translation found.");
    } catch (error) {
      console.error(error);
      setTranslated("Error: Could not connect to server.");
    }
  };

  const swapLanguages = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setWord(translated);
    setTranslated("");
  };

  return (
    <div className="translator-container">
      <h1 className="title">Translator</h1>

      <div className="language-row">
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="english">English</option>
          <option value="amharic">Amharic</option>
          <option value="afaan_oromo">Afaan Oromo</option>
          <option value="tigrinya">Tigrinya</option>
          <option value="somali">Somali</option>
          <option value="arabic">Arabic</option>
        </select>

        <button className="swap-btn" onClick={swapLanguages}>
          ⇄
        </button>

        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="english">English</option>
          <option value="amharic">Amharic</option>
          <option value="afaan_oromo">Afaan Oromo</option>
          <option value="tigrinya">Tigrinya</option>
          <option value="somali">Somali</option>
          <option value="arabic">Arabic</option>
        </select>
      </div>

      <div className="translate-box">
        <textarea
          placeholder={`Type in ${from}...`}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <textarea
          placeholder={`${to} translation`}
          value={translated}
          readOnly
        />
      </div>

      <button className="translate-btn" onClick={getResponse}>
        Translate
      </button>
    </div>
  );
}
