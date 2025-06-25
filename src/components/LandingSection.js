import React from "react";
import { Avatar, Heading, VStack, Text, Box, Link } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <div className='bioContainer' style={{display: 'flex', flexDirection: 'row', backgroundColor: 'transparent', color: 'white'}}>
      <div className='bioPic'>
        <img src={require('../images/me2.png')} style={{borderRadius:'50%', height:'auto', maxWidth:'100%', width:'150px'}}/>
      </div>
      <div className="bioVeriage">
        <Box display="flex" alignItems="baseline">
          <Text fontSize="3xl" whiteSpace="pre-wrap">Brad Johnson   </Text>
          <Text fontSize="xl" fontWeight="light" whiteSpace="pre-wrap"> |   Sr. Software Engineer   |   Quantitative Developer</Text>
        </Box>
        <Text fontSize="md" fontWeight="light" whiteSpace="pre-line">
        {`I am a full stack developer with over 25 years of experience writing low-latency \
        back end applications as well as feature rich front end solutions. In 20 plus years at proprietary \
        trading firms I have contributed to numerous phases of the trading operation. I have been the primary, \
        and oftentimes sole, developer responsible for back end server components in C++, Java, and C#, signal \
        detection in Python, futures and options trading strategy front ends in C#, sophisticated option \
        volatility management UIs in both Python and C#, and relational SQL schemas and complex stored procedures \
        supporting trading parametrization.
        The front end UI work is what I really enjoy the most and \
        this has lead me to pursue certification in JavaScript and React, and although I do lack professional \
        experience in those areas, I believe this page can showcase not only my abilities, but also my passion \
        and dedication to continuing to learn and evolve in this space.
        
        `}
        </Text>
        <Text fontSize="sm" fontWeight="light" whiteSpace="pre-line">{`Relevant Certificates:      `}
          |  <Link href="https://coursera.org/share/83ad8ee8289d1949d67ecdf4a6b9d3f2">{'  Coursera Meta Programming with Javascript '}</Link>
          |  <Link href="https://coursera.org/share/645c558500718fca1ea1e0af8fb14e4f">{`  Coursera Meta React Basics `}</Link>  
          |  <Link href="https://coursera.org/share/009543b52725329eb01d53b28a2343bd">{`  Coursera Meta Advanced React  `}</Link>
          |
        </Text>
      </div>
    </div>
      {/* <Card 
          key="About me"
          title="Brad Johnson"
          description={`I am a full stack developer with over 25 years of experience. I have experience writing low-latency back end applications as well as feature rich front end solutions. In 20 plus years at proprietary trading firms I have contributed to numerous phases of the trading operation. I have been the primary, and oftentimes sole, developer responsible for back end server components in C++, Java, and C#, signal detection in Python, futures and options trading strategy front ends in C#, sophisticated option volatility management UIs in both Python and C#, and relational SQL schemas and complex stored procedures supporting trading parametrization.`}
          width='90%'
          content= <img src={require('../images/me.jpg')} style={{borderRadius:'50%', height:'auto', maxWidth:'100%', width:'100px'}}/>
      /> */}
    {/* <img src={require('../images/me.jpg')} style={{borderRadius:'50%', height:'auto', maxWidth:'100%', width:'100px'}}/>
    <div>{greeting}</div>
    <Heading as='h2'>{bio1}</Heading>
    <Heading as='h2'>{bio2}</Heading> */}

  </FullScreenSection>
);

export default LandingSection;
