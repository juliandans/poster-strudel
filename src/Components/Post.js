import React from "react";
import { Box, Badge, Image } from "@chakra-ui/react"
import { ArrowUpIcon } from "@chakra-ui/icons"
import nsfw_image_bonk from "../assets/images/nsfw_image_bonk.png"

export default function Post(props) {
  const { NSFW } = props

    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={NSFW ? nsfw_image_bonk : props.image} />

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
          {NSFW ? 'NSFW Post' : props.title}
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