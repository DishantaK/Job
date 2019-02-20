import {Consumer} from '../../JobContext';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import App from '../../App';
import * as $ from 'axios';

function preview (str) {
  return str.toString().substr(0,180)
}
// .subStr(0,188)

class JobArea extends Component {
  
  render () {
  return (
    <Consumer>
      {context => (
        <div>
          
          {context.state.jobList.filter(job =>
          job.industry.includes(context.state.selectedIndustry)
          ).map(job => 
           
            <div className="jobPosting"> 
        
            <img src={"https://"+job.avatar}  /> 
            {/* <img src={job.avatar} || require('../../images/sample.png')  />  pulls in avatar url but does not display img */}
          
            <Link onClick={() =>context.updateJob(job._id)} to="/Job"> <h5 className="jobTitleText" >{job.title}</h5></Link>
          
            <p className="jobLocationText"><i class="material-icons" style={{verticalAlign: 'middle'}}> room </i> {job.location} </p>
            <p className="jobBadge" onClick={() =>context.filterIndustry(job._id)}> {job.industry} </p>
         
            <p className="jobDescriptionText" style={{lineHeight: 1.5}}> <em className="jobCompanyText">{job.company}</em>, {preview(job.description)}...</p>
            <p className="jobpostDate"> {moment(job.created_at).fromNow() } </p>
           
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