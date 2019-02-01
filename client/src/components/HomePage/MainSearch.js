import React from "react";
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const MainSearch = props => {
  return (
    <div id ="intro">
    
        <h1 className="headers mainH"> Industry <b> Newb?</b>  No Problem. </h1>
    
        <div id="searchArea">
        <p>We help people new to their industries. HighSchool Grads, Recent
          College Grads, BootCamp Grads, you name it!</p>
          <br />
        {/* <Input type="search" fullWidth="true"/> <Icon id="searchM">search</Icon>  */}
        </div>
  
       

    </div>
  );
};

export default MainSearch;
