"use client";

import useAuthentication from "@/hooks/useAuthentication";
import Link from "next/link";
import Image from "next/image";

import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Alert,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "@/asset/logo.svg";

const NavigationBar = () => {
  const { user, errorMessage, isLogin, facebookLogin, facebookLogout } =
    useAuthentication();

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
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
          >
            {isLogin && (
              <>
                <Typography
                  variant="caption"
                  sx={{
                    marginRight: 1,
                    "@media screen and (max-width:480px)": {
                      fontSize: "0.6rem",
                    },
                  }}
                >
                  {user?.displayName}
                </Typography>
                <Avatar
                  src={user?.photoURL ?? undefined}
                  sx={{
                    marginRight: 0.5,
                  }}
                />
              </>
            )}
            {isLogin ? (
              <Button onClick={facebookLogout}>
                <LogoutIcon />
              </Button>
            ) : (
              <Button onClick={facebookLogin}>
                <LoginIcon />
              </Button>
            )}
          </Box>

          {errorMessage && (
            <Alert
              severity="error"
              sx={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translate(-50%, 0)",
                overflowWrap: "break-word",
                "@media screen and (max-width:620px)": {
                  width: "500px",
                },
                "@media screen and (max-width:520px)": {
                  width: "300px",
                },
              }}
            >
              {errorMessage}
            </Alert>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
