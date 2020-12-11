import React from 'react'
import SelectBox from './SelectBox'

class AddPersonalDetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
            name :'',
            phone :'',
            errors : '',           
    };this.handleChange = this.handleChange.bind(this) 
}



    handleChange( e){       
        const value = e.target.value;        
        this.setState({[e.target.name]:value});
        
    }

   handleValidation(){
       if(this.state.name===""||this.state.phone===""){
       alert("name and mobile cannot be empty")
       } else if(!this.state.name.length>=5){
        alert("name must have five letters")
            
       } else if(isNaN(this.state.phone)||!this.state.name.phone>=10){
        alert("must a number of 10 digits")
       }else{
       return true
    }}

    render(){
    return (
        <div   >
            <form >
            {/* fullname */}
            <div class="form-group">                
                <input type="text" class="form-control" placeholder="Full name" required
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                
                />
                <span class="help-block" style={{color: "red"}}>{this.state.errors}</span>
            </div>
            
            {/* Gender */}
            <select name="Gender" class="custom-select">
                <option selected>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>
            {/* Country */}
            {/* state */}
            <div >
            <SelectBox/>
            </div>
            {/* Phone No */}
            <div class="form-group">
                
                <input type="tel" class="form-control" placeholder="Phone No" required
                onChange={this.handleChange}
                value={this.state.phone}
                name="phone"
                />
                 <span class="help-block" style={{color: "red"}}>{this.state.errors}</span>
            </div>
            </form>
        </div>
    )}
}

export default AddPersonalDetails
