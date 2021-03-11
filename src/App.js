import React from 'react';
import { ChakraProvider, theme} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Subreddit from "./Pages/Subreddit"

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/r/:subreddit">
            <Subreddit/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  )
};