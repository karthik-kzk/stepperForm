import React from 'react'
import './Test.css'

function Stepper({step}) {
    return (
        <div className="stepper" >
         
         
        <a class={`${step===0&&"active"}`} href="#!" >
          <span class={`dot ${step===0&&'active'}`}>1</span>
          <span class="label">Personal Details</span>
        </a>
      
      
        <a class={`${step===1&&"active"}`} href="#!">
          <span class={`dot ${step===1&&'active'}`}>2</span>
          <span class="label">Company Details</span>
        </a>
      
      
        <a class={`${step===2&&"active"}`} href="#!">
          <span class={`dot ${step===2&&'active'}`}>3</span>
          <span class="label">Submit Otp</span>
        </a>
      
     
        </div>
    )
}

export default Stepper
