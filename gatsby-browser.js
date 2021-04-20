/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import ReactDOM from 'react-dom';

import GlobalContextProvider from "./src/context/GlobalContextProvider"
import TopLayout from './src/components/TopLayout';
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return  <GlobalContextProvider>{element}</GlobalContextProvider>
}

// export const wrapPageElement = ({ element }) => {
//   return  <TopLayout>{element}</TopLayout>
// }


export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
}