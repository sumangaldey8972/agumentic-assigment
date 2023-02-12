import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_LOGOUT_SUCCESSFULL } from "../store/admin/admin.types";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboardNavbar = () => {
  const userName = localStorage.getItem("username");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogOut = () => {
    dispatch({
      type: ADMIN_LOGOUT_SUCCESSFULL,
    });
    navigate("/")
  };

  return (
    <>
      <Flex
        justifyContent="space-around"
        p="1rem"
        fontFamily="sans-serif"
        textAlign="center"
        fontWeight="medium"
        color="#29baa1"
        borderRadius="12px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Link to="/" >
          <Box>
            <Text fontSize="23px" cursor="pointer" fontWeight="bold">
              Home Page
            </Text>
          </Box>
        </Link>
        <Heading>Welcome to Admin Dashboard</Heading>
        <Box>
          <Text>Login As: {userName} </Text>
          <Button color="white" colorScheme="teal" onClick={handleLogOut}>
            Log Out
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default AdminDashboardNavbar;
