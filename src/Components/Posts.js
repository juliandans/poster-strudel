import React  from "react";
import { SimpleGrid } from "@chakra-ui/react"
import Post from "./Post"
import redditImageFetcher from "reddit-image-fetcher";


export default async function Posts(props) {
  return ( 
    <SimpleGrid columns={2} spacing={10}>
      {
        await redditImageFetcher.fetch({
          type: 'custom',
          total: 50, 
          subreddit: props.subreddit
        }).map((items) => <Post data={items}/>)
      }
    </SimpleGrid>
  )
}