/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import ReactDOM from 'react-dom';

import NavContextProvider from "./src/context/NavContextProvider"
import Layout from './src/components/layout';
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <NavContextProvider>{element}</NavContextProvider>
}

export const wrapPageElement = ({ element }) => {
  return  <Layout>{element}</Layout>
}

// this is a hack to fix missing styles on refresh in production
// reference: https://github.com/gatsbyjs/gatsby/issues/17676#issuecomment-535796737
export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}