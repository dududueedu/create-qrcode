import QRCode from 'react-qr-code';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [link, setLink] = useState('');
  
  return (
    <div className="container">

      <QRCode value={link}/>
      
      <input className='input'
        placeholder='Digite seu link'
        value={link}
        onChange={(event) => setLink(event.target.value)}
        />
    </div>
  );
}

export default App;
