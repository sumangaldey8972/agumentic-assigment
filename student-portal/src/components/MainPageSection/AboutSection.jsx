import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

let aboutArr = [
  { num: "1000+", text: "INSTITUTIONS" },
  { num: "5M+", text: "STUDENTS" },
  { num: "75M+", text: "EVENTS" },
];

const AboutSection = () => {
  return (
    <>
      <Box w="100%" textAlign="center" m="auto" bgColor="#eff5f8">
        <Text
          fontSize="50px"
          color="#6c6c6c"
          letterSpacing="-.0235em"
          fontWeight="700"
          mb="2rem"
        >
          Involvio transforms student <br /> experience around the world
        </Text>
        <Flex justifyContent="space-around" pr="8rem" pl="8rem">
          {aboutArr?.map((item) => (
            <Box lineHeight="1">
              <Text
                mt="3rem"
                color="#29baa1"
                fontWeight="700"
                fontFamily="sans-serif"
                fontSize="80px"
              >
                {item.num}
              </Text>
              <Text
                color="#2b2b2b"
                fontWeight="700"
                fontFamily="sans-serif"
                fontSize="24px"
                letterSpacing=".1em"
                mb="6rem"
              >
                {item.text}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default AboutSection;
