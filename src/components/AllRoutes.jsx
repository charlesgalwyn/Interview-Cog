import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import PrivateRoute from "./PrivateRoute"

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  )
}

export default AllRoutes
