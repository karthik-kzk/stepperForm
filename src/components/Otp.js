import React from 'react'
import './Otp.css'

function Otp() {
    return (
        
            <div class="form-group "  > 
                <label>Enter your OTP</label>   
            {/* style={{margin: 'auto',paddingTop:'10%',}} placeholder="Enter Your Otp Number"            */}
                <input type="tel" class="form-control-otp" id="pin" maxlength="6" size="6"/>
            </div>
        
    )
}

export default Otp
