import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  //variables
  const [name, setName] = useState("");
  const [tp, setTP] = useState("");

  const submitCustomer = ()=>{
    Axios.post('https://testproject-server.herokuapp.com/api/insert',{
      cus_name:name,
      cus_tp:tp,
    }).then(()=>{
      alert("Sucessfuly Saved..!")
    });
  };

  return (
    <div className="App">
      <h1>Add Customer</h1>

      <div className="form">
        <input type="text" name="cu_name" placeholder="Enter your name"
          onChange = {
            (e) => {
              setName(e.target.value);
            }
          }
        />
        <input type="number" name="cu_tp" placeholder="Enter your telephone"
          onChange = {
            (e) => {
              setTP(e.target.value);
            }
          }
        />
      </div>

      <button onClick={submitCustomer}>Submit</button>

    </div>
  );
}

export default App;
