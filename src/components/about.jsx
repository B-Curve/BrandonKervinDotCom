import React, { Component, Fragment } from 'react';
import data from '../data/gallery.json';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);

const bodyStyles = (md.phone() != null || md.tablet() != null) ? {
  marginLeft: '5%', 
  marginRight: '5%'
} : {
  marginLeft: '20%', 
  marginRight: '20%'
};

const imgStyles = (md.phone() != null || md.tablet() != null) ? {
  width: '60vw', 
  height: 'auto'
} : {
  width: '20vw', 
  height: 'auto'
};

const width = (md.phone() != null || md.tablet() != null) ? '80%' : '45%';

export default class About extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <br />
        <Typography style={bodyStyles}>
          Hey, I'm Brandon Kervin and welcome to my home on the internet! This is just my place
          to display what I've been working on over the past few years and have the chance to talk about 
          myself online lol.<br /><br />
          I've always been a huge fan of computers and messing with them my entire life. I remember in sixth grade, 
          I discovered that the Xbox could be hacked, so I went right ahead and did it. After that was done, I started
          modding all of the games that I had for it so I could do all of the things that the developers didn't want me 
          to! My obsession with programming really started in 10th grade though. I took an intro to web development course
          that was focused around the fundamentals of HTML and CSS, but I didn't want to just do that. So in comes JavaScript,
          my first programming language. The idea of setting rules for the web page to follow at any given time was the coolest
          thing in the world to me at the time and I remember just messing around with it for hours on end so that I could
          understand it all.<br /><br />
          Move ahead a couple years and I find myself in college. As a Chemical Engineering major. Weird... why would I want to
          do that when I'm supposedly so addicted to coding? Honestly, I don't really have an answer on that, I was just chasing
          after whatever would bring me the biggest paycheck at the time. After my first year of College, I realized it just
          wasn't for me and rather than switching majors, I decided to drop out and really take the time to think about what
          it was I wanted to do.<br /><br />
          Shortly after leaving college, I decided to start coding again. This time, I didn't want to do JavaScript, I wanted
          to learn something different. So I decided to pick up PHP. Man, was that a fun one to learn. It's so unlike any other
          language out there, everything is so unified and I assume that's why it's still one of the biggest languages to this
          date. After a few months of that, I felt like I was ready to start applying for jobs. Looking at the job boards for 
          PHP was tough; everyone wants senior PHP devs because no new developers are picking it up, it's all about JavaScript
          and Java now days. After not finding any success with jobs in PHP, I decided to enroll at the Software Guild in
          Minneapolis, Minnesota to learn Java, considering the market is so good for it. Honestly, best 3 months of my
          programming history. Everyone had such a huge willingness to learn and the instructors were some of the best 
          devs that I've ever talked to.<br /><br />
          Following my time at the Software Guild I started applying for jobs and I got one at Magenic in St. Louis Park and
          loving it! 
        </Typography>
        <br />
        <ImageGallery />
      </div>
    );
  }
}

const ImageGallery = () => (
  <Fragment>
    {data.gallery.map((item, index) => 
      <Card key={index} style={{width: width, display: 'inline-block', margin: '2em'}}>
        <CardMedia title={item.caption} src={'null'}>
          <img src={item.img} style={imgStyles} />
        </CardMedia>
        <CardContent>
          {item.caption}
        </CardContent>
      </Card>
    )}
  </Fragment>
);