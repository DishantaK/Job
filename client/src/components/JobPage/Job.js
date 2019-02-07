import React from "react";
import { Link } from 'react-router-dom';
import { Consumer } from "../../JobContext";
import * as $ from "axios";
import Button from "@material-ui/core/Button";
import HeaderNav from "../HomePage/HeaderNav";
import App from '../../App';
class Job extends React.Component {

  render() {
    return (
      <Consumer>
        {context => (
          <div className="jobContainerMain">
            <h1 className="otherLogo">
              <a href="/">
                JOBR<b>.</b>
              </a>
            </h1>

            <section className="jobHeaderIntro">
              {/* <div>{context.state.selectedJob.avatar}</div> */}
              <h1 className="jobTitleTop">
                {" "}
                {context.state.selectedJob.title}
              </h1>
              <h4 className="jobSubTitleTop">  {context.state.selectedJob.company}</h4>
            </section>

            <br />

            <div className="jobPageContent">
              <section className="jobDescriptionSection">
                <p>{context.state.selectedJob.description} </p>
                <h5> Preferred Skills</h5>
                <div>
                {context.state.selectedJob.skills
                }
                </div>
                 
                 <a target="_blank" href={"https://"+context.state.selectedJob.joburl}>
                 <Button
                style={{
                background: "#FC3C3C",
                marginTop: "40px",
                color: "#FFF",
                className:"jobUrlRoute",
              }}
            >
             Apply on {context.state.selectedJob.company}'s Website
          </Button>
          </a>
              </section>

              <aside>
                <h5> Company </h5>
                <p>{context.state.selectedJob.company}</p>
                <h5>Job Type </h5>
                <p>{context.state.selectedJob.type}</p>
                <h5>Job Industry </h5>
                <p>{context.state.selectedJob.industry}</p>
              </aside>
            </div>
           
          </div>
        )}
      </Consumer>
    );
  }
}

export default Job;
