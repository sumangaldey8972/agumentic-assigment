import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../commonFiles/Product";
import UserMessage from "../commonFiles/UserMessage";
import {
  getImage,
  getProduct,
  getText,
  headlineAdd,
  headlineUpdate,
  imageUpdate,
  imageUpload,
} from "../store/HomePage/home.action";
import {
  HOMEPAGE_BANNER_IMAGE_SUCCESSFULL,
  HOMEPAGE_BANNER_IMAGE_UPDATE_SUCCESSFULL,
  STUDENT_HEADLINE_ADD_SUCCESSFULL,
  STUDENT_HEADLINE_UPDATE_SUCCESSFULL,
} from "../store/HomePage/home.types";

const HomeSection = () => {
  const [imageurl, setImageurl] = useState("");
  const [text, setText] = useState("");
  const { loading, data, headlineData } = useSelector((store) => store.home);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getImage());
  }, []);

  useEffect(() => {
    dispatch(getText());
  }, []);

  const handleSubmit = () => {
    dispatch(imageUpload(imageurl)).then((res) => {
      if (res.type == HOMEPAGE_BANNER_IMAGE_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "go to home page for final result",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setImageurl("");
        dispatch(getImage());
      } else {
        toast({
          title: `${res.payload}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  const handleUpdate = () => {
    dispatch(imageUpdate(data.newImage[0]._id, imageurl)).then((res) => {
      if (res.type == HOMEPAGE_BANNER_IMAGE_UPDATE_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "go to home page for final result",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setImageurl("");
        dispatch(getImage());
      } else {
        toast({
          title: `${res.payload}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.6s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    );
  }

  const handleSubmitText = () => {
    
    dispatch(headlineAdd(text)).then((res) => {
      
      if (res.type == STUDENT_HEADLINE_ADD_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "go to home page for final result",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: `${res.payload}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  const handleAddText = () => {
    dispatch(headlineUpdate(headlineData.text[0]._id, text)).then((res) => {
      if (res.type == STUDENT_HEADLINE_UPDATE_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "go to home page for final result",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setText("");
        dispatch(getImage());
      } else {
        toast({
          title: `${res.payload}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <>
      <Flex>
        <Text
          p="1rem"
          fontFamily="sans-serif"
          textAlign="center"
          fontWeight="medium"
          color="orange"
          borderRadius="12px"
          fontSize="23px"
          borderBottom="5px solid orange"
          w="fit-content"
          m="auto"
          mb="2rem"
        >
          Home Section
        </Text>

        <UserMessage />
      </Flex>

      <Grid
        templatecolumns="repeat(1, 1fr)"
        border="2px solid green"
        w="80%"
        m="auto"
        textAlign="center"
        p="2rem"
        borderRadius="12px"
      >
        <Box>
          <Text fontSize="23px" fontWeight="600" color="#29baa1">
            Home Page Main Banner Image
          </Text>
          <Input
            type="text"
            mt="1rem"
            placeholder="enter image url"
            name="imageurl"
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}
          />
          <Text
            bg="red.100"
            mt="1rem"
            borderRadius="12px"
            color="red"
            fontSize="14px"
          >
            Only Image url upload is allowed. will update by file soon
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <Button mt="1rem" colorScheme="orange" onClick={handleSubmit}>
              Upload
            </Button>
            <Button mt="1rem" colorScheme="orange" onClick={handleUpdate}>
              update
            </Button>
          </Grid>
        </Box>
      </Grid>

      <Grid
        templatecolumns="repeat(1, 1fr)"
        border="2px solid green"
        w="80%"
        m="auto"
        textAlign="center"
        p="2rem"
        borderRadius="12px"
        mt="1rem"
      >
        <Box>
          <Text fontSize="23px" fontWeight="600" color="#29baa1">
            Student Support Headline
          </Text>
          <Input
            type="text"
            mt="1rem"
            placeholder="Student Support Headline"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Text
            bg="red.100"
            mt="1rem"
            borderRadius="12px"
            color="red"
            fontSize="14px"
          >
            Only Image url upload is allowed. will update by file soon
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <Button mt="1rem" colorScheme="orange" onClick={handleSubmitText}>
              Upload
            </Button>
            <Button mt="1rem" colorScheme="orange" onClick={handleAddText}>
              update
            </Button>
          </Grid>
        </Box>
      </Grid>
      <Product />
    </>
  );
};

export default HomeSection;
