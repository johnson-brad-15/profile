import { Heading, HStack, Image, Text, VStack, Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, content, seemore }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  console.log("Desc: " ,description);
  return (
    <div className='card container'>
      {/* <Image className='card src' src={src}/> */}
      <div className='card content_container'>{content}</div>
      <VStack className='card verbiage'>
        <Text className='card title' fontSize='lg' fontWeight='bold'>{title}</Text>
        <Text className='card description' fontSize='sm' fontWeight='normal'>{description}</Text>
        <Flex className='seemore_flexrow' direction='row' justify='flex-start' align='flex-end'>
          <Link className='seemore' fontSize='xs' fontWeight='normal' href={seemore}>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Link>
        </Flex>
      </VStack>
    </div>
  );
};

export default Card;
