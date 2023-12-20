import Link from "next/link";
import Image from "next/image";

import { AppBar, Container, Toolbar } from "@mui/material";

import Logo from "@/asset/logo.svg";

const NavigationBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2d2d30" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href="/">
            <Image
              priority
              className="logo"
              src={Logo}
              alt="Rick And Morty logo"
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
