import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=> {
        setAlert(null);
      },3000);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled ","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled ","success");
    }
    
  }
  
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForms showAlert={showAlert} heading="Enter your text for analysis" mode={mode}/>
          </Route>
        </Switch> */}
  <About/>
</div>
{/* </Router> */}

</>
  );
}

export default App;
