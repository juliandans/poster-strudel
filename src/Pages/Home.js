import React from "react";
import { Heading, Container, Text, Center, Stack } from "@chakra-ui/react"

export default function Home() {
  return ( 
  <Container>
    <Center>
      <Stack spacing={1}>
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          POSTER STRÜDEL
        </Text>
        <Heading as="i" fontSize="3xl" textAlign="center">The Best of Reddit.</Heading>
        <Heading as="i" fontSize="2xl" textAlign="center">Also the worst. Especially the worst.</Heading>
      </Stack>
    </Center>
  </Container>
  )
}