import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, productAdd } from "../store/HomePage/home.action";
import { PRODUCT_ADD_SUCCESSFULL } from "../store/HomePage/home.types";
import View from "./ViewProducts";

const Product = () => {
  const [products, setProducts] = useState({
    icon: "",
    title: "",
    headline: "",
    description: "",
    productimage: "",
    brief: "",
  });
  const { product } = useSelector((store) => store.home);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts({
      ...products,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(productAdd(products)).then((res) => {
      if (res.type == PRODUCT_ADD_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "go to main page to see final result",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: `Invalid operation`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <>
      <FormControl
        templateColumns="repeat(1, 1fr)"
        border="2px solid green"
        w="80%"
        m="auto"
        textAlign="center"
        p="2rem"
        borderRadius="12px"
        mt="1rem"
      >
        <Heading color="#29baa1">Add A new Product</Heading>
        <Input
          type="text"
          name="icon"
          value={products.icon}
          onChange={handleChange}
          mt="1rem"
          placeholder="Enter icon url"
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
        <Input
          type="text"
          name="title"
          value={products.title}
          onChange={handleChange}
          mt="1rem"
          placeholder="Enter producr title"
        />
        <Input
          type="text"
          name="headline"
          value={products.headline}
          onChange={handleChange}
          mt="1rem"
          placeholder="Enter product headline"
        />
        <Input
          type="email"
          name="description"
          value={products.description}
          onChange={handleChange}
          mt="1rem"
          placeholder="Enter product description"
        />
        <Input
          type="email"
          name="productimage"
          value={products.productimage}
          onChange={handleChange}
          mt="1rem"
          placeholder="Enter product image url"
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
        <Input
          type="email"
          name="brief"
          value={products.brief}
          onChange={handleChange}
          mt="1rem"
          placeholder="Enter some product brief "
        />
        <Button colorScheme="orange" mt="1rem" onClick={handleSubmit}>
          Add
        </Button>

        <View />
      </FormControl>
    </>
  );
};

export default Product;
