import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Stack,
  Image,
  Container,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function AddLift() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      id: Math.floor(Math.random() * 100),
      title: title,
      description: description,
    };
      console.log(`Test: ${data}`); // Trying to post null data
      setData(data)
  };

  const postData = () => {
    axios()
      .post("http://127.0.0.1:8000/create_lift", data)
      .catch((err) => {
        console.log(err, data);
        setLoading(false);
        setIsError(true);
      });
  }

  return (
    <Container mt={"25%"} pr={0} bg={"#fff"} maxH="2xl" maxW="4xl">
      <Stack minH={"50%"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Add a Lift </Heading>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                isRequired
                type="text"
                placeholder="Title"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Add your description</FormLabel>
              <Textarea
                isRequired
                type="text"
                placeholder="Add Description"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              {/* <NavLink to={"/"}> */}
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                type="submit"
                onClick={postData}
              >
                Submit
              </Button>
              {/* </NavLink> */}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    </Container>
  );
}
