import React from "react"
import { Image, Box } from "@chakra-ui/react"

const Loading = () => {
  return (
    <Box
      margin="auto"
      display="flex"
      alignItem="center"
      justifyContent="center"
      mt="40px"
    >
      <Image
        src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
        alt="Loading"
      />
    </Box>
  )
}

export default Loading
