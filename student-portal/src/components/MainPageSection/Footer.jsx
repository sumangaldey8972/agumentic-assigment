import React, { useEffect, useState } from "react";
import { Box, color, Container, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getProduct } from "../store/HomePage/home.action";

let companyArr = ["Terms & Privacy", "BLog", "Security", "Contact Us"];
let copyrightArr = [
  "© 2021 Involvio LLC. Involvio and the Clockpin Logo are registered trademarks of Involvio LLC.",
  "Google, the Google logo, Android, the Android logo, Google Play, and the Google Play logo are trademarks of Google Inc.",
  "Apple, the Apple logo, iPhone, and iPod touch are trademarks of Apple Inc., registered in the U.S. and other countries. Apple Watch is a trademark of Apple Inc. App Store is a service mark of Apple Inc.",
  "Cisco, the Cisco logo, Webex, Aironet, and Meraki are trademarks of Cisco Systems Inc.",
];
const Footer = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getProduct()).then((res) => {
      setData(res.payload.products);
    });
  });
  return (
    <>
      <Box bgColor="#29baa1" mt="-8rem">
        <Box border="2px solid #29baa1" mt="4rem" mb="4rem" w="35%" ml="8rem">
          <Text fontSize="70px" mt="5rem" fontWeight="700" color="white">
            Take <span style={{ color: "#06705d" }}> student experience</span>
            to the next level.
          </Text>
        </Box>
        <Flex justifyContent="space-around">
          <Box>
            <Image src="https://assets-global.website-files.com/60af67d05e26d056cfe9e455/60af67d05e26d01944e9eae5_new%20involvio%20logo%20white.svg" />
          </Box>
          <Box>
            <Flex gap="4rem">
              <Box>
                <Text
                  fontSize="20px"
                  lineHeight="1.25"
                  fontWeight="700"
                  letterSpacing="2px"
                  textTransform="uppercase"
                  color="white"
                  mb="1rem"
                >
                  Product
                </Text>
                {data.map((el) => (
                  <Text
                    fontSize="16px"
                    lineHeight="1.4"
                    fontWeight="700"
                    marginBottom="16px"
                    letterSpacing="2px"
                    color="white"
                  >
                    {el.title}
                  </Text>
                ))}
              </Box>
              <Box>
                <Text
                  fontSize="20px"
                  lineHeight="1.25"
                  fontWeight="700"
                  letterSpacing="2px"
                  textTransform="uppercase"
                  marginBottom="16px"
                  color="white"
                >
                  Company
                </Text>
                {companyArr.map((el) => (
                  <Text
                    fontSize="16px"
                    lineHeight="1.4"
                    fontWeight="700"
                    marginBottom="16px"
                    letterSpacing="2px"
                    color="white"
                  >
                    {el}
                  </Text>
                ))}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box pt="3rem" bgColor="#39d2be" height="full">
        <Box pb="4rem" lineHeight="2">
          {copyrightArr.map((el) => (
            <Text color="white" ml="12rem" mr="11rem" fontSize="14px">
              {" "}
              {el}{" "}
            </Text>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Footer;
