import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Image } from "@chakra-ui/react";
import Card from "./Card";
import '../images/me.jpg';

const projects = [
  {
    title: "JavaScript/CSS Style Demo",
    description:
`I wanted to experiment with what was possible using only JavaScript style manipulations; no animations \
or images.  In addition to the realistic appearence, the eye will track the cursor when the mouse is over \
the image. The pupil is reactive in that it will be smaller when directed toward the light source and \
larger when looking away from the light.  Additionally, the shape of the iris will be slightly distorted to \
convey perspective when nearing the edges of the sphere.  

As an exploration into what is possible using only JavaScript style, I hope this shows an "eye" for design \
and detail.`,
    content: 
    <div className="card content container eyeball">
      <iframe 
        className='card content eyeball' 
        src='https://johnson-brad-15.github.io/js_css_demo/src/index.html' 
        title='Example Website'>
      </iframe> 
    </div>,
    seemore: "https://github.com/johnson-brad-15/js_css_demo"
  },
  {
    title: "React Trading UI",
    description:
      `To the left is a functioning stock ladder that i wrote in JS/React as a means of mastering some of their \
      complexities.  (While I appreciate the amazing capabilities of AI in our field, its use in this instance \
      would have been contrary to my goals, and I assure you that Cursor was only used for some rare debugging.) \
      I originally designed the back end in Python using websockets.  That worked great, but in order to deploy \
      as a demo, I needed to rewrite the back end in JavaScript and simulate the websocket messaging.  Communication between front and back end makes use \
      of a simplified FIX 4.2 protocol.
       
      The demo features a summation of the equity's trading session on the top, with a change on session sparkline \
      beneath.  The ladder itself features a single automated market maker and allows the user to interact with \
      the market as well:
      • Left click the colored "book" columns to place an order at that level.
      • Click drag/drop the resultant order in the outer "your orders" columns to modify the level.
      • Right click your order to cancel it.
      
      While certainly not a finished product, I hope that this successfully showcases my ability to code complex \
      JS/React front end solutions.`,
    // content: <Image className='card content img' src={require('../images/photo2.jpg')}/>
    content: 
    <div className="card content container trading_ui">
      <iframe 
        className='card content trading_ui' 
        src='https://johnson-brad-15.github.io/trading_ui/' 
        title='Example Website'>
      </iframe> 
    </div>,
    seemore: "https://github.com/johnson-brad-15/trading_ui"
  },
  // {
  //   title: "Photo Gallery",
  //   description:
  //     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
  //   getImageSrc: () => require("../images/photo3.jpg"),
  // },
  // {
  //   title: "Event planner",
  //   description:
  //     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  //   getImageSrc: () => require("../images/photo4.jpg"),
  // },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            content={project.content}
            seemore={project.seemore}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
