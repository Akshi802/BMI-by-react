import React, { useMemo, useState } from 'react'
import './App.css';

const App = () => {

  const [height,setHeight] = useState(70);
  const [weight,setWeight] = useState(180);

function onWeightchange(event){
setWeight(event.target.value)
}

function onHeightchange(event){
  setHeight(event.target.value)

}

const output = useMemo(()=>{
  const calculateheight = height/100;
  return (weight/(calculateheight*calculateheight)).toFixed(1)

},[weight,height]);


  return (
    <main>
      <h1>Project 1:BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>weight:{weight}kg </p>
        <input className='input-slider' type='range' step="1" min="40" max="200"
        onChange={onWeightchange}
        />
        <p className='slider-output'>Height:{height} cm</p>
        <input className='input-slider' type='range' min="140" max="220" onChange={onHeightchange}
         />
      </div>
      <div className='output-section'>
        <p>your BMI is</p> 
        <p className="output">{output}</p>
        </div>
    </main>
  )
}

export default App