import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <h2 className="text-3xl font-bold mb-4">Welcome to My Application</h2>
      <Link to={"/form"}>
        Click here to fill form
      </Link>
      <p className="text-lg">This is the home page.</p>
    </div>
  )
}

export default Home
