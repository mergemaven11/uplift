import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

import { faker } from "@faker-js/faker";

export default function Card(props) {
  props = props.lift;

  return (
      <Center py={6}>
        <Box
          maxW={"500px"}
          maxH={"500px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={16}
            pos={"relative"}
          >
            <Image
                boxSize='100%'

              src={
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
              }
              layout={"fill"}
              alt={"Image by: Milad Fakurian"}
            />
          </Box>
          <Stack>
            <Text
              noOfLines={1}
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Uplift
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {props.title}
            </Heading>
            {/* Add a scrolling box */}
            <Text  noOfLines={1} color={"gray.500"}>{props.description}</Text>
            {/*  */}
          </Stack>
          <Stack mt={6} mb={6} direction={"row"} spacing={4} align={"center"}>
            <Avatar src={props.avi} alt={"Author"} />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{faker.name.findName()}</Text>
              <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
  );
}
