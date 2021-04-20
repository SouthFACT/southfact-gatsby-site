/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import NavContextProvider from "./src/context/NavContextProvider"
import Layout from './src/components/layout';

export const wrapRootElement = ({ element }) => {
  return  <NavContextProvider>{element}</NavContextProvider>
}

export const wrapPageElement = ({ element }) => {
  return  <Layout>{element}</Layout>
}

