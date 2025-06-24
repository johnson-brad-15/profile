import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: johnson.brad15@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/johnson-brad-15",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/brad-johnson-686a8677/",
  },
];

const Header = () => {
  const scrollYRef = useRef(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    console.log("Found: ", element);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = (e) => {
    if (window.scrollY < scrollYRef.current) 
      document.getElementById('headerOuterBox').style.transform = 'translateY(0)';
    else if (window.scrollY > scrollYRef.current)
      document.getElementById('headerOuterBox').style.transform = 'translateY(-200px)';
    scrollYRef.current = window.scrollY;
  }

  useEffect(() => {
    console.log("Adding scroll event listener");
    window.addEventListener('scroll', handleScroll)
    return (() => {
      console.log("Removing scroll event listener");
      window.removeEventListener('scroll', handleScroll)
    });
  }, []);
  

  return (
    <Box
      id="headerOuterBox"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack  spacing={8}>
              {socials.map((soc, idx) => (<a key={`soc${idx}`} href={soc.url}><FontAwesomeIcon size='2x' icon={soc.icon} /></a>))};
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='/#projects' onClick={ handleClick('projects') }>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
