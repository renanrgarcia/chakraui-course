import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <div>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan="1"
          bg="purple.400"
          minH="100vh"
        >
          <span>sidebar</span>
        </GridItem>
        <GridItem
          as="main"
          colSpan="5"
          p="40px"
        >
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
      
    </div>
  )
}
