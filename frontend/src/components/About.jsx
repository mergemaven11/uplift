import {
  Container,
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function WithLargeQuote() {
  return (
   <>
   <Stack spacing={6}>
   <Text textAlign={"center"} fontSize='4xl'>About me</Text>

   </Stack>

    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      mt={6}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        Hi There! I'm a passionate Full Stack Software Developer 🚀 who loves
        building things that live on the internet and is eager to study the
        building blocks of the world, and rearrange them to build something even
        better.
      </Text>
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Box textAlign={"center"}>
          <Avatar
            src={
              "https://media-exp1.licdn.com/dms/image/C4D03AQH10HAgi_sfeA/profile-displayphoto-shrink_100_100/0/1618678030945?e=1661990400&v=beta&t=7VocG0iTBTUgOYMan-TZRgSaAQyWmOH3sMpVw77isCI"
            }
            alt={"Tobias Scott"}
            mb={2}
          />

          <Text fontWeight={600}>Tobias Scott</Text>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.400", "gray.400")}
          >
            Software Engineer
          </Text>
        </Box>
      </Container>
    </Stack>
  </>
  );
}
