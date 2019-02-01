import React from 'react';
import CategoryFilter from './filter/CategoryFilter';
import JobArea from './JobArea';
// import LocationFilter from './filter/LocationFilter';
// import SalaryFilter from './filter/SalaryFilter';
// import TypeFilter from './filter/TypeFilter';
import {Consumer} from '../../JobContext';

const MainContent = (props) => (
  <Consumer>
      {context => (
  <div id="mainContent">
   
      <div id="filter"> 
          {/* <CategoryFilter /> */}
          <h4 id="viewJobs">View Jobs </h4>
          
      </div>
      <div id="jobArea">
       
         <JobArea />
      </div>
  </div>
      )}
      </Consumer>
)

export default MainContent;