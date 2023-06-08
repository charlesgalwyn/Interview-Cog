import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  IconProps,
  AspectRatio,
  Icon,
  useToast,
} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const toast = useToast()
  const navigate = useNavigate()

  const obj = {
    name,
    mobile,
    password,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`https://cognisite2.onrender.com/users`, obj).then((res) => {
      // console.log(res)
      toast({
        position: "top-center",
        title: "Signup Success.",
        status: "success",
        duration: 1000,
        isClosable: true,
      })
      navigate("/")
    })
  }

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <AspectRatio maxW="650px" maxH="450px" ratio={1}>
          <video autoPlay controls width="100%">
            <source
              src="https://video.wixstatic.com/video/e5bc4a_c699fe11831e4518a742fa586fba950b/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
        </AspectRatio>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Cognisite Technologies
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Register Your Account here !
            </Text>
          </Stack>
          <Box as={"form"} onSubmit={(e) => handleSubmit(e)} mt={10}>
            <Stack spacing={4}>
              <Input
                type="text"
                placeholder="Name"
                required
                bg={"gray.100"}
                border={0}
                onChange={(e) => setName(e.target.value)}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Mobile"
                type="number"
                required
                pattern=".{10}"
                onChange={(e) => setMobile(e.target.value)}
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </Stack>
            <Link
              style={{ textDecoration: "underline" }}
              to={"/"}
              color={"blue.500"}
              pt={10}
            >
              Already have a Account
            </Link>
            <Button
              type="submit"
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              color={"white"}
              colorScheme="pink"
              variant="solid"
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  )
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={{ base: "100%", md: "40vw", lg: "30vw" }}
      zIndex={{ base: -1, md: -1, lg: 0 }}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  )
}
