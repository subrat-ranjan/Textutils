
import './App.css';
import Navbar from './component/Navbar';
 import React, {useState} from 'react';
import { useEffect } from 'react';
import './darkmode.css'
import Alert from './component/Alert';

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      showAlert("Dark mode has been enabled", "success");
    } else {
      setTheme('light');
      showAlert("Light mode has been enabled", "success");
    }
  };
  useEffect(() =>{
    document.body.className = theme;
  }, [theme]
  );


  return ( 
    <>

<div className= {`App ${theme}`}>
      <button onClick={toggleTheme}> Enabel dark mode</button>
    </div>

     <Alert alert={alert}/>

    <div className="container my-3">
     <Navbar showAlert={showAlert} heading="Enter your text." theme={theme}/>
    </div>

    
    

  </> 
  );
}

export default App;
 