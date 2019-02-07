import React from "react";
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
import Button from '@material-ui/core/Button';
class JobDetails extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div style={{ width: '70vw', margin:'auto'}}>
            <h1 className="headerText">
              {" "}
              Post A Job<b>.</b>{" "}
            </h1>

            {/* Remember to add styles - mainly checked state for radio button - they're being checked but do not show */}

            <form onSubmit={context.submitJob}>
              <h5> Job Details</h5>

              <TextField
                name="title"
                label="Required"
                value={context.title}
                onChange={context.onChange}
                margin="normal"
                variant="filled"
                label="Job Title"
                fullWidth
              />

              <br />

              <TextField
                name="description"
                value={context.description}
                onChange={context.onChange}
                margin="normal"
                variant="filled"
                label="Job Description"
                fullWidth
                
              />
              <br />
              <h5> Salary</h5>

              <FormControl component="fieldset">
                <FormLabel component="legend">Select a range below</FormLabel>
                <RadioGroup
                  aria-label="Salary"
                  name="salary"
                  onChange={context.onChange}
                >
                  <FormControlLabel
                    value="3050"
                    control={<Radio />}
                    label="$30,000-50,000"
                  />
                  <FormControlLabel
                    value="5070"
                    control={<Radio />}
                    label="$50,000-70,000"
                  />
                  <FormControlLabel
                    value="7090"
                    control={<Radio />}
                    label="$70,000-90,000"
                  />
                  <FormControlLabel
                    value="90p"
                    control={<Radio />}
                    label="90,000+"
                  />
                </RadioGroup>
              </FormControl>

              <h5> Job Type </h5>
              <FormControl component="fieldset">
                <FormLabel component="legend">Select a job type below</FormLabel>
                <RadioGroup
                  aria-label="Type"
                  name="type"
                  onChange={context.onChange}
                >
                  <FormControlLabel
                    value="fullTime"
                    control={<Radio />}
                    label="Full Time"
                  />
                  <FormControlLabel
                    value="partTime"
                    control={<Radio />}
                    label="Part Time"
                  />
                  <FormControlLabel
                    value="intern"
                    control={<Radio />}
                    label="Intern"
                  />
                </RadioGroup>
              </FormControl>

              <h5> Industry </h5>
              <FormControl component="fieldset">
                <FormLabel component="legend">What Industry would this position be in?</FormLabel>
                <RadioGroup
                  aria-label="Industry"
                  name="industry"
                  onChange={context.onChange}
                >
                  <FormControlLabel
                    value="Engineer"
                    control={<Radio />}
                    label="IT/ Engineering"
                  />
                  <FormControlLabel
                    value="Design"
                    control={<Radio />}
                    label="Design"
                  />
                  <FormControlLabel
                    value="Hospitality"
                    control={<Radio />}
                    label="Hospitality"
                  />
                  <FormControlLabel
                    value="Writing"
                    control={<Radio />}
                    label="Writing"
                  />
                  <FormControlLabel
                    value="Media"
                    control={<Radio />}
                    label="Media"
                  />
                  <FormControlLabel
                    value="Finance"
                    control={<Radio />}
                    label="Finance"
                  />
                </RadioGroup>
              </FormControl>
    
              <TextField
                name="skills"
                value={context.skills}
                onChange={context.onChange}
                margin="normal"
                variant="filled"
                label="Required and preferred Skills"
                fullWidth
              />

              <br />
            </form>

            <br />
            {/* <button  className="secondaryButton">
              Next 
            </button> */}

            <Button onClick={context.nextStep}  style={{ background: '#FC3C3C', marginRight: '5px', color:'#FFF'}}> Next </Button>
          </div>
        )

       
        }
      </Consumer>
    );
  }
}

export default JobDetails;
