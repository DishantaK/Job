import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import {Consumer} from '../../JobContext';
import JobDetails from './JobDetails';
import CompanyDetails from './CompanyDetails';
import Confirm from './Confirm';
import * as $ from 'axios';



class JobPage extends React.Component {
 

  
render () {

  return (
    <Consumer >

      {context => (
      <div className="jobEntry">
         
        {context.switchStep()}
      
      </div>
    )

    }
          
    </Consumer>

  );
 
}

}
export default JobPage;