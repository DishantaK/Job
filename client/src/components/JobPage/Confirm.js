import React from 'react';
import {Consumer} from '../../JobContext';
import Button from "@material-ui/core/Button";
const Confirm = () => (
    // add consumer/context/onsubmit
    <Consumer>
    
    {context => 
   
    (
    
    <div style={{ width: '70vw', margin:'auto'}}>
        <form onSubmit={context.submitJob}>
        <h1  className="headerText">Thanks! Once you select submit, your  job will be posted. </h1>
        <p> You can also cancel and Go <a  href="/"><i>Home?</i></a></p>
        <Button onClick={context.previousStep}  style={{ background: '#FC3C3C', marginRight: '5px', color:'#FFF'}}> Previous </Button>
       
        <Button type="submit"  onClick={context.setRedirect} style={{ background: '#393E46', marginRight: '5px', color:'#FFF'}}> Submit </Button>
        {/* {context.renderRedirect} */}
        </form>
    </div>
    )}
    </Consumer>

)
  
  export default Confirm;