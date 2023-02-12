import React, { useEffect, useState } from "react";
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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getQueries, updateQueires } from "../store/contactus/contact.actions";
import { UPDATE_QUIERIES_SUCCESSFULL } from "../store/contactus/contact.types";
const UserMessage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading } = useSelector((store) => store.contact);
  const dispatch = useDispatch();
  const [temp, setTemp] = useState(false);
  const [data, setData] = useState([]);
  const toast = useToast();

  useEffect(() => {
    dispatch(getQueries()).then((res) => {
      setData(res.payload.data);
    });
  }, []);

  const handleStatus = (id) => {
    dispatch(updateQueires(id)).then((res) => {
      if (res.type == UPDATE_QUIERIES_SUCCESSFULL) {
        toast({
          title: `${res.payload.message}`,
          description: "refresh the page once",
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
    dispatch(getQueries()).then((res) => {
      setData(res.payload.data);
    });
  };

  return (
    <>
      <Button
        p="1rem"
        fontFamily="sans-serif"
        textAlign="center"
        fontWeight="medium"
        color="teal"
        borderRadius="12px"
        fontSize="23px"
        borderBottom="5px solid teal"
        w="fit-content"
        m="auto"
        mb="2rem"
        cursor="pointer"
        onClick={onOpen}
      >
        View Queires
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            m="auto"
            color="teal"
            bgColor="teal.100"
            mt=".2rem"
            borderRadius="12px"
          >
            Guest Queries
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>
                  Messages are coming form Live database
                </TableCaption>
                {loading ? <Spinner /> : ""}
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Message</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.map((item) => (
                    <Tr>
                      <Td>
                        {item.firstName} {item.lastName}{" "}
                      </Td>
                      <Td>{item.workEmail}</Td>
                      <Td>{item.message}</Td>
                      <Td>
                        {item.status ? (
                          <Button colorScheme="green">Contacted</Button>
                        ) : (
                          <Button
                            onClick={() => handleStatus(item._id)}
                            colorScheme="red"
                          >
                            Not Contacted
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserMessage;
