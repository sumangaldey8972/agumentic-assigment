import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  Flex,
  Text,
  Img,
  Heading,
  Box,
  Image,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Card,
  Stack,
  CardBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct } from "../store/HomePage/home.action";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getProduct()).then((res) => {
      setData(res.payload.products);
    });
  }, []);
  return (
    <>
      <Flex
        alignItems="center"
        h="90px"
        bg="#EFF5F8"
        _hover={{ bg: "rgb(230,245,253)" }}
        justifyContent="center"
      >
        <Img
          src="https://assets-global.website-files.com/60af67d05e26d056cfe9e455/60dbec2ea1181d220875e4a3_Webex%20Involvio%20-%203D%20color%20helix%20-%20black%20type-p-500.png"
          width="400px"
        />
        <Flex alignItems="center" gap={4}>
          <Text fontWeight={"700"}>Learn More </Text>
          <BsFillArrowRightCircleFill fontSize={"21px"} />
        </Flex>
      </Flex>

      <Box width="100%">
        <Flex
          backgroundColor="rgba(255, 255, 255, 0.8)"
          backdropFilter="saturate(180%) blur(30px)"
          justifyContent="space-between"
          alignItems="center"
          minH="80px"
          padding="10px 50px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        >
          <Link to="/">
            <Box>
              <Image
                src="https://assets-global.website-files.com/60af67d05e26d056cfe9e455/60b8573b89b3f814caba2473_Dark%20logo.svg"
                width="150px"
              />
            </Box>
          </Link>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap="7rem"
            fontSize="16px"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            <Box>
              <Menu isOpen={isOpen}>
                <MenuButton
                  variant="ghost"
                  mx="1"
                  py={[1, 2, 2]}
                  px="4"
                  border="none"
                  fontSize={"18px"}
                  bgColor="white"
                  color="black"
                  aria-label="Courses"
                  fontWeight="bold"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  <Flex alignItems={"center"}>
                    <span>Product</span>
                    {isOpen ? (
                      <BiChevronUp fontSize={"27px"} />
                    ) : (
                      <BiChevronDown fontSize={"27px"} />
                    )}
                  </Flex>
                </MenuButton>
                <MenuList
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  bg="#EFF5F8"
                  p="4"
                  w="400px"
                  marginLeft="-100px"
                  borderRadius="20"
                >
                  {data.map((item) => (
                    <MenuItem p="0" border={"none"} key={item._id}>
                      <Card
                        direction={{ base: "row" }}
                        overflow="hidden"
                        bg="#EFF5F8"
                        padding={"0px 20px"}
                        cursor="pointer"
                        shadow="none"
                        w="400px"
                        _hover={{
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          cursor="pointer"
                          width="30px"
                        />

                        <Stack>
                          <CardBody>
                            <Heading
                              letterSpacing="2px"
                              fontSize="15px"
                              cursor="pointer"
                            >
                              {item.title}
                            </Heading>

                            <Text fontSize="14px" cursor="pointer">
                              {item.brief}
                            </Text>
                          </CardBody>
                        </Stack>
                      </Card>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "rgb(43,42,42)" }}
              >
                <Text
                  cursor="pointer"
                  fontWeight="semibold"
                  fontSize="18px"
                >
                  Blog
                </Text>
              </Link>
            </Box>
            <Box>
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "rgb(43,42,42)" }}
              >
                <Text
                  cursor="pointer"
                  fontWeight="semibold"
                  fontSize="18px"
                >
                  Admin Login
                </Text>
              </Link>
            </Box>
            <Box>
              <Link to="/contact">
                <Button
                  padding="10px 32px"
                  backgroundColor="transparent"
                  color="#29baa1"
                  fontSize="15px"
                  lineHeight="1.4"
                  letterSpacing="2px"
                  textTransform="uppercase"
                  border="2px solid #29baa1"
                  fontWeight="bold"
                  borderRadius="30px"
                  _hover={{ bgColor: "#29baa1", color: "white" }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
