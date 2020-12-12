import React ,{useState}from 'react'

function SelectBox() {
    const data ={
                'IN': ['KA', 'KL', 'TN' , 'MH' ], 
                'US': ['AL', 'DE' , 'GA' ] ,
                'CA': ['ON', 'QC' ,'BC'],
    }    
    
    const[country,setCountry]=useState(['1']);
   

    function onChange(e){
       
        setCountry(data[e.target.value])
     
        console.log(country)
    }

    return (
        <div class="form-group" style={{marginBottom: '20px', marginTop: '20px'}}>
            <label >Country</label> 
            <select id="countrySelect" class="custom-select" onChange={onChange}>
                <option value="" disabled selected>Choose State</option>
                <option  >IN</option>
                <option >US</option>
                <option >CA</option>
            </select>
            <label >State</label>  
            <select  class="custom-select">
                <option value="" disabled selected>Choose City</option>
                {country.map((val,i)=>
                 <option key={i} >{val}</option>
                )}              
          </select> 
        </div>
    )
}

export default SelectBox
