import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card'
import  {SimpleGrid,Container} from "@chakra-ui/react";

import { faker } from '@faker-js/faker';

//  Mock data

const name = faker.name.findName()

function CardList() {
  const [lifts, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:8000/all_lifts")
      .catch((e) => console.error(e))

    //   console.log(result.data)

      setData(result.data);
    };

    fetchData();
  },[]);

  return (
    <>
        <Container h={"full"} maxH={"full"}  maxW="full" mt={0} centerContent overflow="hidden">
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
    {lifts.map(item => (
        <Card name={name} lift={item}/>
    ))} 
   </SimpleGrid>  
  </Container>
   </>
  )
}

export default CardList;
