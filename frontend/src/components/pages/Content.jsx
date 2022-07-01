import {
  Container,
  Flex,
} from "@chakra-ui/react"

import CardList from '../pages/Content'

export default function Content() {
  return (
    <Container  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
       <CardList />
      </Flex>
    </Container>
  );
}