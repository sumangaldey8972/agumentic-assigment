import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productUpdate } from "../store/HomePage/home.action";
import { PRODUCT_UPDATE_SUCCESSFULL } from "../store/HomePage/home.types";

const Update = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [products, setProducts] = useState({
    icon: item.icon,
    title: item.title,
    headline: item.headline,
    description: item.description,
    productimage: item.productimage,
    brief: item.brief,
  });
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts({
      ...products,
      [name]: value,
    });
  };

  const handleUpdateProduct = (id) => {
    dispatch(productUpdate(id, products)).then((res) => {
      if (res.type == PRODUCT_UPDATE_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "go to main page to see final result",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: `Invalid Operations`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <>
      <Button variant="solid" colorScheme="blue" onClick={onOpen}>
        Update
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                type="text"
                name="icon"
                value={products.icon}
                onChange={handleChange}
                mt="1rem"
                placeholder="Enter icon url"
              />
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
              <Input
                type="email"
                name="brief"
                value={products.brief}
                onChange={handleChange}
                mt="1rem"
                placeholder="Enter some product brief "
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdateProduct(item._id)}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Update;
