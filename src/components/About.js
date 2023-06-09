import React from "react";
import Links from "./Links";

function About( { link, bio }) {

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio} </p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links
       git={link.github}
       linkedin = {link.linkedin}
       /> 
    </div>
  );
}

export default About;
