import { Heading, Text, Container, Box } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyles = {
    p: "10px",
    m: "10px",
    bg: "purple.400",
    color: "white",
    textAlign: "center",
    filter: "blur(2px)",
    ':hover': {
      color: "black",
      bg: "blue.200",
    }
  }

  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">Hello world!</Heading>
      <Text marginLeft="30px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi!
      </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi!
      </Text>
      
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a Box</Text>
      </Box>

      <Box sx={boxStyles}>
        Hello, Ninjas!
      </Box>
    </Container>
  )
}
