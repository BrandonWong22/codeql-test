// VulnerableComponent.js

import React, { useState } from 'react';

const VulnerableComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // XSS Vulnerability
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Unsafe eval usage
  const handleButtonClick = () => {
    try {
      const output = eval(input);
      setResult(output);
    } catch (e) {
      setResult('Error in evaluating input');
    }
  };

  return (
    <div>
      <h1>Vulnerable React Component</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Evaluate</button>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
};

export default VulnerableComponent;
