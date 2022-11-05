import React from "react";
import { useState } from "react";
import "./App.css"

const App = () => {
  const [ageerror, setageerror] = useState("")
  const [BMI, setBMI] = useState("")
  const [allerrors, setallerrors] = useState(true)
  const [bmimessage,setbmimessage]=useState("")
  const submit = () => {
    const Height = document.getElementById("height-input").value
    const Weight = document.getElementById("weight-input").value
    if(!Height || !Weight){
      alert("Height and weight are required")
    }

    const Age = document.getElementById("age-input").value
    if(!Age){
      alert("age is required")
    }
    else if (Age > 120) {
      alert("age should be less than or equal to 120")
    }else if(Age<2){
      alert("age should be greater than 2")
    }
    const heightinm = Height * 0.01
    const BMI = Weight / ((heightinm)*(heightinm));
    setBMI(BMI.toFixed(2))
    console.log(BMI.toFixed(2));
    if(BMI<16){
      setbmimessage("Severe Thinness")
    }else if(BMI >=16 || BMI <=17){
      setbmimessage("Moderate Thinness")
    }else if(BMI> 17 || BMI <18.5){
      setbmimessage("Mild Thinness")
    }else if(BMI >=18.5 || BMI < 25){
      setbmimessage("Normal")
    }else if(BMI>=25 || BMI<30){
      setbmimessage("Overweight")
    }else if(BMI>=30 || BMI<35){
      setbmimessage("Obese Class-1")
    }else if(BMI>=35 || BMI<40){
      setbmimessage("Obese Class-2")
    }else if(BMI>40){
      setbmimessage("Obese Class-2")
    }


  }
  return (
    <div className="main-container">
      <div className="input-part">
        <div className="age-part">
          <div className="age-part-child1">
            <label>Age</label>
            <input id="age-input"></input>
          </div>
          <div className="age-part-child2">Ages:2-120</div>
          <div>{ageerror}</div>
        </div>
        <div className="gender-part">
          <label >Gender</label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="height-part">
          <label>Height</label>
          <input id="height-input"></input>
        </div>
        <div className="weight-part">
          <label>Weight</label>
          <input id="weight-input"></input>
        </div>
        <button onClick={submit}>Calculate</button>
      </div>

      <div className="result-container">
        <div className="res-div">Result</div>
        <div>BMI={BMI}kg/m2</div>
        <div className="category">Category={bmimessage}</div>
      </div>
    </div>
  )
}



export default App;