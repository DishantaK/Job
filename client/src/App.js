import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as $ from 'axios';
import { Provider } from './JobContext';
import HomePage from './components/HomePage/HomePage'
import JobPage from './components/JobPage/JobPage';
import HeaderNav from './components/HomePage/HeaderNav';
import JobDetails from './components/JobPage/JobDetails';
import CompanyDetails from './components/JobPage/CompanyDetails';
import Confirm from './components/JobPage/Confirm';
import Job from './components/JobPage/Job';

// const theme = createMuiTheme({
  
//     palette: {
//       primary: '##FFEB3B',
//       secondary: '#607D8B'
//     }
// });




class App extends Component {

  state = {
      jobList: [],
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
      joburl:'',
      redirect: false,
    

    step: 1
   
  }

  
  switchStep = () => {
    
    switch(this.state.step) {
      
      case 1:
        return <JobDetails 
        nextStep={this.nextStep}
        
        />;
        break
      case 2:
        return <CompanyDetails  
        nextStep={this.nextStep}
        previousStep={this.previousStep}
        
        />
        break
        ;
      case 3:
        return <Confirm  
        previousStep={this.previousStep}
        
        />
        break
        ;
      case 4:
        return 'success!';
  
  
    }
    
  } 

  // Add an on change to capture field name and target value to update state 
  


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  
  }
  grabAvatar = (e) => {
    
    // this.setState({ avatar: e.target.files[0] });
    console.log( e.target.files[0])
  
  }
  
  componentDidMount(){
    $.get('/api/jobs')
    .then((result) => {
      this.setState({jobList: result.data})
      console.log(result.data)
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }


  renderRedirect = () => {
  
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }

  }

  



  
  submitJob = (event) => {
    // Post works, link to company after user profile created
    
    event.preventDefault();
    $.post('/api/jobs', 
    { title: this.state.title,
      description:this.state.description ,
      salary:this.state.salary,
      type:this.state.type,
      industry: this.state.industry,
      skills:this.state.skills,
      companydescription:this.state.companydescription,
      company:this.state.company,
      joburl:this.state.joburl,
      avatar:this.state.avatar,
      location:this.state.location
    }, )
    .then((result) => {
      console.log(result.data);
      
      // result.send({redirect: '/'});
    })
  }

  nextStep = () => {
    // event.preventDefault();
    this.setState({
      step : this.state.step + 1
    })
  }
  
  
  previousStep= () => {
    // event.preventDefault();
    this.setState({
      step : this.state.step - 1
    })
  }
  updateJob= (id) => {
   
    this.setState({
      selectedJob :  this.state.jobList.find(job => job._id === id)
    })

   
  }
       


  render() {
    
    return (
     
    <MuiThemeProvider>
      <Provider value={{state: this.state, switchStep:this.switchStep, 
      previousStep:this.previousStep, nextStep:this.nextStep, submitJob:this.submitJob,
      grabAvatar:this.grabAvatar, onChange:this.onChange, jobList:this.jobList, updateJob:this.updateJob, selectedJob:this.selectedJob, setRedirect:this.setRedirect, renderRedirect:this.renderRedirect  }}
      
      inputs={{title:this.title, description:this.description, salary:this.salary, type:this.type, industry:this.industry, location:this.location, skills:this.skills, company:this.company, avatar:this.avatar, companydescription:this.state.companydescription,  selectedJob:this.state.selectedJob, joburl:this.state.joburl, redirect:this.state.redirect}}
      >
    <BrowserRouter>
     <div id="mainContainer">
      {/* <HeaderNav /> */}
      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/newjob' component={JobPage}  />
      <Route exact path='/Job' component={Job} />
      </div>
    </BrowserRouter>
      </Provider>
    </MuiThemeProvider>  
    );
}
}


export default App;
