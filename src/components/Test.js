import React from 'react'
import './Test.css'

function Test() {
    return (
        <div>
          
<div class="row">
  <div class="col-md-12">

    
    <ul class="stepper stepper-horizontal">

   
      <li class="completed">
        <a href="#!">
          <span class="dot">1</span>
          <span class="label">First step</span>
        </a>
      </li>

     
      <li class="active">
        <a href="#!">
          <span class="dot">2</span>
          <span class="label">Second step</span>
        </a>
      </li>

     
      <li class="warning">
        <a href="#!">
          <span class="dot"><i class="fas fa-exclamation"></i></span>
          <span class="label">Third step</span>
        </a>
      </li>

    </ul>
    

  </div>
</div>

        </div>
    )
}

export default Test
