import React from 'react'


class AddCompanyDetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
            CompanyName :'',
            email :'',
            errors : '',           
    };this.handleChange = this.handleChange.bind(this) 
}
handleChange( e){       
    const value = e.target.value;        
    this.setState({[e.target.name]:value});
    
}

handleValidation(){
   if(this.state.CompanyName===""||this.state.email===""){
   alert("CompanyName and Email cannot be empty")
   } else if(!this.state.CompanyName.length>=5){
    alert("CompanyName must have five letters")
        
   } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)){
    alert("must a valid email")
   }else{
   return true
}}

render(){
    return (
        <div>
            {/* comapanyName */}
            <div class="form-group">
                
            <input type="text" class="form-control" placeholder="Company Name"
            onChange={this.handleChange}
            value={this.state.CompanyName}
            name="CompanyName"
            />
           </div>
           {/* email */}
           <div class="form-group">                
            <input type="email" class="form-control" placeholder="Email Id"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            />
           </div>
           {/* jobtitle */}
           <div class="form-group">
                
            <input type="text" class="form-control" placeholder="Job Title"/>
           </div>
           {/* description */}
            <div class="form-group">                
                <textarea class="form-control" rows="5"  placeholder="Job Description"></textarea>
            </div>
           {/* i accept  */}
            <div class="form-group form-check">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" checked/> I Agree
                </label>
            </div>
            </div>
    )}
}

export default AddCompanyDetails
