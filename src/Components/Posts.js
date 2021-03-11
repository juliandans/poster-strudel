import React, { useEffect, useState }  from "react";
import { SimpleGrid } from "@chakra-ui/react"
import Post from "./Post"
import redditImageFetcher from "reddit-image-fetcher";

const fetchImagesForSubreddit = async subreddit => {
  return await redditImageFetcher.fetch({
    type: 'custom',
    total: 50,
    subreddit: [subreddit]
  })
}


export default function Posts(props) {
  console.log(props)
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImagesForSubreddit(props.subreddit)
    .then(setImages)
    .catch(console.error)
  }, [props.subreddit])

  return ( 
    <SimpleGrid columns={2} spacing={10}>
      {images.map(image => <Post key={image.id} {...image} />)}
    </SimpleGrid>
  )
}