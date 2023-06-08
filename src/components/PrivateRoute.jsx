import { useToast } from "@chakra-ui/react"
import React from "react"
import { Navigate, useLocation } from "react-router-dom"

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("auth")
  const toast = useToast()
  // console.log(isAuth)
  const location = useLocation()

  if (!isAuth) {
    toast({
      position: "top-center",
      title: "Please Login First.",
      status: "error",
      duration: 1000,
      isClosable: true,
    })
    return <Navigate to="/" state={location.pathname} replace></Navigate>
  }
  return children
}

export default PrivateRoute
