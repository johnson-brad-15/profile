import { Heading, HStack, Image, Text, VStack, Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, content, seemore, fonti_size_desc='xs' }) => {
  return (
    <div className='card container'>
      {/* <Image className='card src' src={src}/> */}
      <div className='card content_container'>{content}</div>
      <VStack className='card verbiage'>
        <Text className='card title' fontSize='lg' fontWeight='bold'>{title}</Text>
        <Text className='card description' whiteSpace="pre-line" fontSize={fonti_size_desc} fontWeight='normal'>{`${description}`}</Text>
        <Flex className='seemore_flexrow' direction='row' justify='flex-start' align='flex-end'>
          <Link className='seemore' fontSize='xs' fontWeight='normal' href={seemore}>
            Code <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Link>
        </Flex>
      </VStack>
    </div>
  );
};

export default Card;
