import React, { Component } from 'react';
import './about.css';
import './style.css';

export default class About extends Component {
  render() {
    let whatwedo = "Started in 2015, CS Roadshow is a computer science outreach organization at the University of Texas at Austin. We go to local K-12 schools and give a thirty-minute to one-hour presentation to expose students to what Computer Science is, why Computer Science is important, and how they can prepare for a career within Computer Science. We have presentations for students of all ages, and we want to get students excited about Computer Science."
    let whatiscs = "We introduce and define the concept of Computer Science to students with our presentation and with a group activity, with time for Q&A."
    let whycs = "Computer Science teaches logical thinking and methodical problem solving. Having tech skills can open up future opportunities, and it's also lots of fun."
    let howtoprepare = "We also introduce local programs and camps that students can attend, and talk about what classes they can take before their college career."
    return (
      <div>
        <div className={"about"}>
          <h1>WHAT WE DO</h1>
          <p id="what-we-do-summary">{whatwedo}</p>
          <div className={"flex about-text"}>
            <div>
              <img src="images/hello_world.png"/>
              <h2>What is CS?</h2>
              <p>{whatiscs}</p>
            </div>
            <div>
              <img src="images/graph.png"/>
              <h2>Why CS?</h2>
              <p>{whycs}</p>
            </div>
            <div>
              <img src="images/robot.png"/>
              <h2>How to prepare?</h2>
              <p>{howtoprepare}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
