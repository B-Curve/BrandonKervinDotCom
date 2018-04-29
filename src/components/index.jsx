import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Paper } from 'material-ui';
import { Tabs, Tab } from 'material-ui';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import InfoIcon from '@material-ui/icons/Info';
import Typography from 'material-ui/Typography';

import Projects from './projects';
import About from './about';
import Contact from './contact';

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    }
  }

  handleChange(event, value) {
    this.setState({ value });
  };

  render() {
    return (
      <Fragment>
        <AppBar position="static" style={{fontFamily: 'Work Sans'}}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Brandon Kervin
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="container main">
          <Paper elevation={5}>
            <Tabs value={this.state.value}
              onChange={this.handleChange.bind(this)}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
              centered>
              <Tab label="PROJECTS" icon={<ListIcon />} />
              <Tab label="ABOUT ME" icon={<PersonIcon />} />
              <Tab label="CONTACT" icon={<PhoneIcon />} />
            </Tabs>
          </Paper>
          <Paper elevation={2} style={{marginTop: '20px'}}>
            {this.state.value === 0 ? <Projects  /> : null}
            {this.state.value === 1 ? <About /> : null}
            {this.state.value === 2 ? <Contact /> : null}
          </Paper>
        </div>
      </Fragment>
    );
  }
}