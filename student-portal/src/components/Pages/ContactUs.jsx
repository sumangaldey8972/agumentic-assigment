import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Textarea,
  Button,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../commonFiles/Navbar";
import Footer from "../MainPageSection/Footer";
import { addQueries } from "../store/contactus/contact.actions";
import { ADD_QUIERIES_SUCCESSFULL } from "../store/contactus/contact.types";

const ContactUs = () => {
  const [message, setMessage] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    message: "",
  });
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(addQueries(message)).then((res) => {
      console.log("contact",res)
      if (res.type == ADD_QUIERIES_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
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

  return (
    <>
      <Navbar />
      <Box w="50%" textAlign="center" m="auto" mt="6rem">
        <Text
          fontSize="70px"
          color="#2b2b2b"
          letterSpacing="-.0635em"
          fontWeight="700"
          mb="2rem"
          lineHeight="1.12"
        >
          Want to learn more <br /> about Involvio?
        </Text>
        <Text
          fontSize="18px"
          color="#2b2b2b"
          letterSpacing="-.005em"
          fontWeight="normal"
          mb="2rem"
          lineHeight="1.8"
        >
          Leave us your details with a short message about your requirement and{" "}
          <br />
          we’ll be sure to reach out to you.
        </Text>
      </Box>
      <Box
        w="40%"
        m="auto"
        p="2rem"
        borderRadius="12px"
        boxShadow="0 8px 16px 0 rgb(0 0 0 / 8%), 0 16px 64px 0 rgb(0 0 0 / 3%)"
        mb="15rem"
      >
        <FormControl alignItems="center">
          <Flex gap="1rem" mb="1rem">
            <Input
              border="1px solid #ddd"
              borderRadius="5px"
              bgColor="#f8f8f8"
              fontSize="16px"
              height="56px"
              type="text"
              name="firstName"
              value={message.firstName}
              onChange={handleChange}
              placeholder="First Name*"
            />
            <Input
              border="1px solid #ddd"
              borderRadius="5px"
              bgColor="#f8f8f8"
              fontSize="16px"
              height="56px"
              type="text"
              name="lastName"
              value={message.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
            />
          </Flex>
          <Input
            border="1px solid #ddd"
            borderRadius="5px"
            bgColor="#f8f8f8"
            fontSize="16px"
            height="56px"
            type="email"
            name="workEmail"
            value={message.workEmail}
            onChange={handleChange}
            placeholder="Work Email*"
            mb="1rem"
          />
          <Textarea
            minHeight="160px"
            type="text"
            name="message"
            value={message.message}
            onChange={handleChange}
            placeholder="Message (Max 200 characters)"
          />
          <Center>
            <Button
              mt="3rem"
              border="2px solid #29baa1"
              bgColor="#29baa1"
              color="white"
              fontSize="16px"
              pt="2rem"
              pb="2rem"
              pr="5rem"
              pl="5rem"
              borderRadius="24px"
              _hover={{ bgColor: "#29baa1", color: "white" }}
              textTransform="uppercase"
              onClick={handleSubmit}
            >
              contact us
            </Button>
          </Center>
        </FormControl>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;
