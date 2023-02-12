import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signinAdmin } from "../store/admin/admin.action";
import { ADMIN_LOGIN_SUCCESSFULL } from "../store/admin/admin.types";
import { useNavigate } from "react-router-dom";
import Navbar from "../commonFiles/Navbar";

const Admin = () => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinAdmin(creds)).then((res) => {
      if (res.type == ADMIN_LOGIN_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "welcome to Student Admin Portal",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/admindashboard");
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
    <Navbar/>
      <Box maxHeight="100%" p="0"  bgColor="#f5f7f6">
        <Box w="fit-content" m="auto" mb="2rem">
          <Img pt="3rem" src="https://us.involvio.com/assets/login_portal/logo-involvio-svg-f0976ea7d20703548db4313d6208202eeb96a218c1701df7d0f1adaff05b1fa6.svg" />
          <Text textAlign="center" fontSize="24px" color="#1A1A1A">
            Log in to Involvio Admin Tools
          </Text>
        </Box>
        <Flex
          w="fit-content"
          m="auto"
          lineHeight="4rem"
          p="2rem"
          borderRadius="8px"
          bgColor="#FFFFFF"
          boxShadow="0 2px 4px 0 rgb(90 180 134 / 12%)"
          mb="4rem"
        >
          <FormControl>
            <FormLabel>Enter Admin Login Credentials</FormLabel>
            <Input
              type="text"
              name="username"
              value={creds.username}
              placeholder="enter admin username"
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              value={creds.password}
              placeholder="enter admin password"
              onChange={handleChange}
            />
            <Button onClick={handleSubmit} colorScheme="cyan">
              Login
            </Button>
          </FormControl>
        </Flex>
      </Box>
    </>
  );
};

export default Admin;
