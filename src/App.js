import QRCode from 'react-qr-code';
import { useState } from 'react';
import QrCodeCreate from 'qrcode'
import './App.css';

function App() {
  
  const [link, setLink] = useState('');
  const [qrcode, setQrcode] = useState('');
  
  function handleCreate(url_link){
    QrCodeCreate.toDataURL(url_link, {
      width: 600, 
      margin: 2,
    }, function (error, url){
      setQrcode(url)
    })
  }

  function handleQrcode(event){
    setLink(event.target.value)
    handleCreate(event.target.value)
  }

  return (
    <div className="container">

      <QRCode value={link}/>
      
      <input className='input'
        placeholder='Digite seu link'
        value={link}
        onChange={(event) => handleQrcode(event)}
      />

      <button className='btn'> 
        <a className='tagA' href={qrcode} download={`meu-QRcode.png`}> Baixe aqui seu QRCode</a> 
      </button>
    </div>
  );
}

export default App;
