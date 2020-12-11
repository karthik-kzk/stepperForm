import React from 'react'

function Stepper({step}) {
    return (
        <div>
           <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a className={`nav-link ${step===0 ? "active" : ""}`} href="/#">Personal Details</a>
  </li>
  <li class="nav-item">
    <a className={`nav-link ${step===1 ? "active" : ""}`} href="/#">Company Details</a>
  </li>
  <li class="nav-item">
  <a className={`nav-link ${step===2 ? "active" : ""}`} href="/#">Submit Otp</a>
  </li>
  
</ul>
        </div>
    )
}

export default Stepper
