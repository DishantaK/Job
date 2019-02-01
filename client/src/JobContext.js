import React from 'react';
import * as $ from 'axios';

const JobContext = React.createContext({
  state : {
    jobList: [],
    step: 1,
    
      title: '',
      description: '',
      salary:'',
      type:'',
      industry: '',
      skills:[],
      company:'',
      location:'',
      avatar:null,
      companydescription:'',
      selectedJob: '',
      joburl: '',
  },

  

})

export const Provider = JobContext.Provider;
export const Consumer = JobContext.Consumer;