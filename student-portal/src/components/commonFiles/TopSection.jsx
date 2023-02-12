import { Box, Flex, Grid, Heading, Image, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getImage } from "../store/HomePage/home.action";

const TopSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getImage()).then((res) => {
      setData(res.payload.newImage);
    });
  }, []);

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Box width="40%" padding="14">
          <Heading color="rgb(109,109,108)" fontSize="70px">
            Take
            <span style={{ color: "rgb(40,187,161)" }}>student experience</span>
            to the next level.
          </Heading>
        </Box>
        <Box
          backgroundImage="url('https://assets-global.website-files.com/60af67d05e26d056cfe9e455/60be9c3022ff9ffe313d3869_home%20hero%20img.png')"
          width={["600px", "700px", "500x", "850px"]}
          bgSize="550px"
          height={["600px", "700px", "500x", "750px"]}
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Image
            src="https://assets-global.website-files.com/60af67d05e26d056cfe9e455/60caed70ba30f06394cb2348_Frame%203957-p-1080.png"
            width="100%"
            h="100%"
          />
        </Box>
      </Flex>
      <Box bg="rgb(239,244,249)">
        <Flex
          justifyContent="space-around"
          pt="120px"
          pb="20"
          direction={["column", "column", "column", "row"]}
          alignItems="center"
        >
          <Box width="45%" p="10">
            <Heading textAlign="center" color="rgb(40,187,161)" fontSize="55px">
              Engage & inspire every student
              <span style={{ color: "black" }}>with Involvio</span>
            </Heading>
          </Box>
          <Box borderLeft="1px solid gray"></Box>
          <Flex width="45%" p="10" justifyContent="end">
            <Text fontSize="22px" width="80%">
              Deliver resources, create community, and power hyper-personalized
              experiences on a modern campus app. Keep your institution ahead of
              the curve as your campus changes.
            </Text>
          </Flex>
        </Flex>
        <Box width="90%" margin="auto">
          {data.map((el) => (
            <Img key={el._id} src={el.imageurl} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TopSection;
