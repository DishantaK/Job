import {Consumer} from '../../JobContext';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import App from '../../App';
import * as $ from 'axios';
class JobArea extends Component {

  render () {
  return (
    <Consumer>
      {context => (
        <div>
          
          { context.state.jobList.map(job => 
            
            
            <div className="jobPosting"> 
            <img src={ require('../../images/sample.png') }   />
          
            <Link onClick={() =>context.updateJob(job._id)} to="/Job"> <h5 className="jobTitleText" >{job.title}</h5></Link>
          
            <p className="jobLocationText"><i class="material-icons"> room </i> Location </p>
            <p className="jobBadge"> {job.industry} </p>
            <p className="jobDescriptionText"> <em className="jobCompanyText">{job.company}</em>, {job.description}</p>
            <p className="jobpostDate"> 3 days ago </p>
           
            </div>
          
          
          )}
      


        </div>

        // will display existing jobs on home add a result list in state
      )
  
      }
  
    </Consumer>
  )}
  }
  
  export default JobArea;