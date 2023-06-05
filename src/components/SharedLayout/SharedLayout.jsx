import { Outlet } from "react-router-dom";

import { AppBar } from "components/AppBar/AppBar"
import { Container } from "./SharedLayoutStyled";

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar/>
      <Outlet />
    </Container>
  )
}
