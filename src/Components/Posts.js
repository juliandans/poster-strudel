import React from "react";
import { SimpleGrid } from "@chakra-ui/react"
import Post from "./Post"

export default function Posts(props) {
  return ( 
    <SimpleGrid columns={2} spacing={10}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </SimpleGrid>
  )
}