import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import JobPage from '../JobPage/JobPage';

const styles = {
    root: {
      flexGrow: 1,
    },
    appContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    buttonGroup: {
      justifySelf: 'flex-end'
    }

  };
  
  function HeaderNav(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none', }}>
          <Toolbar className="headItem" className={classes.appContainer}>
            <Typography variant="h6" color="#000" id="logo" >
               <a href="/"id="logo"> JO<b>BR</b></a>
            </Typography>
            <section className={classes.buttonGroup}>
            {/* post job checks login status if login, show post job page, if not show login */}
            <Button href="/newjob"  style={{ background: '#FC3C3C', marginRight: '5px', color: '#fff'}}> <Link to="/newjob" style={{color: '#fff'}}>+ POST JOB </Link> </Button>
            <Button href="https://github.com/DishantaK/jobr"  style={{ color: '#fff'}} > GITHUB </Button>
            </section>
          </Toolbar>
          
        </AppBar>
      </div>
    );
  }
  
  HeaderNav.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(HeaderNav);