import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct, productDelete } from "../store/HomePage/home.action";
import { PRODUCT_DELETE_SUCCESSFULL } from "../store/HomePage/home.types";
import Update from "./UpdateProduct";

const View = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { product } = useSelector((store) => store.home);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleGet = () => {
    onOpen();
    dispatch(getProduct());
  };

  const handleDelete = (id) => {
    dispatch(productDelete(id)).then((res) => {
      if (res.type == PRODUCT_DELETE_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        dispatch(getProduct());
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
      <Button ml="1rem" colorScheme="orange" mt="1rem" onClick={handleGet}>
        View Product
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>All Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {product?.products?.map((item) => (
              <Card maxW="sm">
                <CardBody>
                  <Image src={item.productimage} borderRadius="lg" />
                  <Image src={item.icon} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Title : {item.title}</Heading>
                    <Heading size="sm">Headline : {item.headline}</Heading>
                    <Text>Description : {item.description}</Text>
                    <Text>brief : {item.brief}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Update item={item} />
                    <Button
                      onClick={() => handleDelete(item._id)}
                      variant="ghost"
                      colorScheme="blue"
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default View;
