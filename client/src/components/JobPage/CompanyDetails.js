import React from "react";
import Button from "@material-ui/core/Button";
import { Consumer } from "../../JobContext";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AvatarUpload from './AvatarUpload';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class CompanyDetails extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div style={{ width: "70vw", margin: "auto" }}>
            <h1 className="headerText">Tell us about your company<b>.</b></h1>

            <form onSubmit={context.submitJob}>
              <TextField
                name="company"
                value={context.company}
                onChange={context.onChange}
                margin="normal"
                variant="filled"
                label="Company Name"
              />
              <br />
              <TextField
                name="companydescription"
                value={context.companydescription}
                onChange={context.onChange}
                margin="normal"
                variant="filled"
                label="Tell us about your company"
                fullWidth
              />
              <br />
              <TextField
                name="joburl"
                value={context.joburl}
                onChange={context.onChange}
                margin="normal"
                variant="filled"
                label="Please add your company's url for the Job posting - Without HTTP/s prefixes"
                fullWidth
              />
              <br />
              <h6>
                Company Avatar : 
              </h6>
               {/* <AvatarUpload /> */}
               <TextField
                name="avatar"
                value={context.avatar}
                onChange={context.onChange}
                margin="normal"
                variant="filled"
                label="Please add a url to your company's Avatar - Without HTTP/s prefixes"
                fullWidth
              />
              <br />
            
               {/* <AvatarUpload /> */}
               <h6>
                Company Location : 
              </h6>

               <TextField
                name="location"
                value={context.location}
                onChange={context.onChange}
                margin="normal"
                variant="filled"
                label="Please add the location for the job or company - City, ST"
                fullWidth
              />
              <br />
              
              <br /> <br />
            </form>
         
            <Button onClick={context.previousStep}  style={{ background: '#FC3C3C', marginRight: '5px', color:'#FFF'}}> Previous </Button>
            <Button onClick={context.nextStep}  style={{ background: '#393E46', marginRight: '5px', color:'#FFF'}}> Next </Button>
             <br />
          </div>
        )}
      </Consumer>
    );
  }
}

export default CompanyDetails;
