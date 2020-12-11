import './App.css';
import AddPersonalDetails from './components/AddPersonalDetails'
import AddCompanyDetails from './components/AddCompanyDetails'
import Otp from './components/Otp'
import React,{useState} from 'react'
import Stepper from './components/Stepper'





// const steps = ['AddPersonalDetails', 'AddCompanyDetails', 'Otp'];


function getStepContent(step,formRef) {
  switch (step) {
    case 0:
      return <AddPersonalDetails ref={formRef} />;
    case 1:
      return <AddCompanyDetails ref={formRef}/>;
    case 2:
      return <Otp ref={formRef}/>;
    default:
      throw new Error('Unknown step');
  }
}

function App() {

  const[activeStep,setActivestep]=useState(0)

   let formRef = React.createRef();

  console.log(activeStep)


  function handleBack(){
    setActivestep(activeStep-1)
    console.log(activeStep)
  }

  function handleNext(){
   
   if( formRef.current.handleValidation()){
    setActivestep(activeStep+1)
   }
   
    
  }



  return (
    <div>
      {/* navBar */}
      <Stepper step={activeStep} />  
   
    <div className="App">
      <form >
       {/* page */}
      <div style={{ minHeight:'350px'}}>      
      {getStepContent(activeStep,formRef)}
      
      </div>
      {/* button */}
      <div class="btn-group">
        { activeStep !==0 &&
        <button type="button" class="btn "onClick={handleBack} >Back</button>
        }
        {(activeStep ===2)? <button type="button" class="btn btn-success"onClick={()=>alert('detail Submitted')}>Submit</button>
        : <button type="button" class="btn btn-primary"onClick={handleNext}>Next</button>          
      }    
      </div>
      </form>
    </div>
    </div>
  );
}

export default App;
