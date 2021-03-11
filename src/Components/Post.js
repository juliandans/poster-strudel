import React from "react";
import { Box, Badge, Image } from "@chakra-ui/react"
import { ArrowUpIcon } from "@chakra-ui/icons"

export default function Post(props) {

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={props.image} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            r/{props.subreddit}
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
        >
          {props.title}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            <ArrowUpIcon/> {props.upvotes} upvotes
          </Box>
        </Box>
      </Box>
    </Box>
  )
}