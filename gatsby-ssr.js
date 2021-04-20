/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import GlobalContextProvider from "./src/context/GlobalContextProvider"
import TopLayout from './src/components/TopLayout';

export const wrapRootElement = ({ element }) => {
  return  <GlobalContextProvider>{element}</GlobalContextProvider>
}

// export const wrapPageElement = ({ element }) => {
//   return  <TopLayout>{element}</TopLayout>
// }

