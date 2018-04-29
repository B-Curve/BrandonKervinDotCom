import React, { Component, Fragment } from 'react';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Button from 'material-ui/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';
import data from '../data/projects.json';

export default class Projects extends Component {
  render() {
    return (
      <Fragment>
        <Typography style={{
          fontSize: '1.33em', 
          textAlign: 'center',
          padding: '1em 0'}}>My Projects</Typography>
        <ProjectList />
      </Fragment>
    );
  }
}

const ProjectList = () => (
  <Fragment>
    {data.projects.map((item, index) => 
      <ExpansionPanel key={index}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{item.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {item.description}
            <br /><br /><br />
            <a href={item.link} target="_blank">
              <Button variant="raised" color="primary">Visit</Button>
            </a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )}
  </Fragment>
);