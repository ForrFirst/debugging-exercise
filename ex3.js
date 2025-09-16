import { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  
  const isValid = username.trim().length >= 3;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isValid) {
      return;
    }
    
    alert(`Username: ${username}`);
    
    setUsername('');
  };
  
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter username"
        />
        
        {!isValid && username.trim().length > 0 && (
          <div style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
            Username must be at least 3 characters long
          </div>
        )}
      </div>
      
      <button 
        type="submit" 
        disabled={!isValid} 
      >
        Submit
      </button>
    </form>
  );
}

export default Form;