import React from "react"
import { Link } from "gatsby"

import Wrapper from "../components/wrapper"

const NotFound = () => {
  return (
    <Wrapper>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Wrapper>
  )
}

export default NotFound