import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const isPalindrome = () => {    
    const string = word.toLowerCase().replace(/[W_]/g, '');    
    const reversedStr = string.split('').reverse().join('');
    setResult(reversedStr === string ? 'The string entered is a palindrome.' : 'The string entered is not a palindrome.');
    
    if (word.length === 0) {
      setResult("An input is required!");
    }
  };
  
  const reset = () => {
    document.location.reload();
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>Palindrome Checker</h1>
        <p>Palindrome is a word, number or phrase that reads the same forward and backward.</p>
      </div>
      <div className="palindrome">
          <input 
            type="text" 
            value={word}
            onChange={handleChange} 
            placeholder="Enter text or number"
          />
          <div className="palindrome-btn">
            <button onClick={isPalindrome}>Check</button>
            <button onClick={reset}>Reset</button>
          </div>
          <div className="palindrome-msg">{result}</div>                  
      </div>
    </div>
  );
};

export default App;