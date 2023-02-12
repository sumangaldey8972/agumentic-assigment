import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getText } from "../store/HomePage/home.action";

const ProductSections = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [productArr, setProductArr] = useState([]);
  useEffect(() => {
    dispatch(getText()).then((res) => {
      setText(res.payload.text[0].text);
    });
  }, []);

  useEffect(() => {
    dispatch(getProduct()).then((res) => {
      setProductArr(res.payload.products);
    });
  }, []);

  return (
    <>
      <Box w="50%" textAlign="center" m="auto" mt="6rem">
        <Text
          fontSize="50px"
          color="#6c6c6c"
          letterSpacing="-.0235em"
          fontWeight="700"
          mb="2rem"
        >
          {text}
        </Text>
      </Box>

      {productArr?.map((item) => (
        <Flex p="4rem" m="auto" justifyContent="space-between" key={item._id}>
          <Box ml="5rem" w="50%" p="6rem" lineHeight="2rem">
            <Flex
              justifyContent="space-between"
              gap="3px"
              w="fit-content"
              mb="1rem"
            >
              <Img src={item.icon} />
              <Text
                fontSize="16px"
                letterSpacing=".05em"
                lineHeight="1.4"
                color="#f7931e"
                fontWeight="bold"
              >
                {item.title}
              </Text>
            </Flex>
            <Text
              fontFamily="sans-serif"
              fontWeight="700"
              fontSize="32px"
              color="#2b2b2b"
              lineHeight="1.265"
              mb="2rem"
            >
              {item.headline}
            </Text>
            <Text mb="3rem" fontWeight="400" fontSize="18px" color="#2b2b2b">
              {item.description}
            </Text>
            <Button
              border="2px solid #f7931e"
              bgColor="#f7931e"
              color="white"
              fontSize="16px"
              pt="2rem"
              pb="2rem"
              pr="3rem"
              pl="3rem"
              borderRadius="24px"
              _hover={{ bgColor: "#f7931e", color: "white" }}
            >
              Learn More
            </Button>
          </Box>
          <Box w="60%">
            <Img src={item.productimage} />
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default ProductSections;
