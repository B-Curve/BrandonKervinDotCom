import React, { Component, Fragment } from 'react';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';

const icon = {
  paddingRight: '20px'
};

const custom = {
  width: '1.5em',
  height: '1.5em',
  paddingRight: '20px'
}

export default class Contact extends Component {

  call = () => window.location.href = 'tel:763-218-8974';
  email = () => window.location.href = 'mailto:brandonkervin@gmail.com';
  facebook = () => window.location.href = 'https://www.facebook.com/brandon.kervin';
  instagram = () => window.location.href = 'https://www.instagram.com/brandonkervin/';
  github = () => window.location.href = 'https://github.com/B-Curve';
  twitter = () => window.location.href = 'https://twitter.com/brandonkervin';
  linkedin =  () => window.location.href = 'https://www.linkedin.com/in/b-kervin/';

  render() {
    return (
      <Fragment>
        <List component="nav">
          <ListItem button onClick={() => this.call()}>
            <ListItemText primary="Phone" secondary="(763)218-8974" />
            <ListItemSecondaryAction>
              <PhoneAndroidIcon style={icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.email()}>
            <ListItemText primary="Email" secondary="brandonkervin@gmail.com" />
            <ListItemSecondaryAction>
              <MailIcon style={icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.github()}>
            <ListItemText primary="Github" secondary="B-Curve" />
            <ListItemSecondaryAction>
              <img src="/static/images/github.png" style={custom} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.linkedin()}>
            <ListItemText primary="Linkedin" secondary="b-kervin" />
            <ListItemSecondaryAction>
              <img src="/static/images/linkedin.png" style={custom} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.facebook()}>
            <ListItemText primary="Facebook" secondary="brandon.kervin" />
            <ListItemSecondaryAction>
              <img src="/static/images/facebook.png" style={custom} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.instagram()}>
            <ListItemText primary="Instagram" secondary="brandonkervin" />
            <ListItemSecondaryAction>
              <img src="/static/images/instagram.png" style={custom} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => this.twitter()}>
            <ListItemText primary="Twitter" secondary="brandonkervin" />
            <ListItemSecondaryAction>
              <img src="/static/images/twitter.png" style={custom} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Fragment>
    );
  }
}