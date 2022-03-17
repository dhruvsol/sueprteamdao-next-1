import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { LoginOutlined } from "@mui/icons-material";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

export const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const { data, error, isLoading } = useMoralisQuery("GameScore");
  // const da = JSON.stringify(data, null, 2);
  // console.log(da);
  const router = useRouter();
  const {
    isAuthenticated,
    authenticate,
    isAuthenticating,
    user,
    logout,
    isLoggingOut,
  } = useMoralis();
  const [isPhantom, setIsPhantom] = useState(false);

  const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        setIsPhantom(true);
      }
    }
  };

  const storeUserId = async () => {
    // authenticate({ type: 'sol' })
    if (isAuthenticated) {
      const res = await fetch(
        `https://intense-mesa-39554.herokuapp.com/v1/users?walletAddress=${user.attributes.solAddress}`
      );
      const data = await res.json();
      const result = data.results[0].id;
      localStorage.setItem("currentUser", result);
    } else {
      router.push("/");
    }
  };

  const removeUserId = async () => {
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    getProvider();

    if (user != null) {
      storeUserId();
    }
  }, []);
  return (
    <MainLayoutRoot>
      {/* <IconButton color="inherit" onClick={onOpenSidebar()}></IconButton> */}
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: { md: "3rem", lg: " 4rem", sm: " 2rem" },
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        Welcome to Collab Dashboard
      </Typography>
      {/* <Typography>{usrAddress}</Typography> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "3rem",
        }}
      >
        {isAuthenticated && (
          <Button
            onClick={() => {
              router.push("/AllCollab");
            }}
            size="medium"
            variant="contained"
            sx={{ ml: 2 }}
            color="secondary"
          >
            Get started
          </Button>
        )}
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isAuthenticated ? (
          <Button
            component="a"
            onClick={logout}
            onLoad={() => {
              storeUserId();
            }}
            size="medium"
            sx={{ ml: 2 }}
            target="_blank"
            variant="outlined"
            color="secondary"
            disabled={isLoggingOut}
          >
            Logout
          </Button>
        ) : (
          <Button
            component="a"
            {...(isPhantom
              ? {
                  onClick: () => authenticate({ type: "sol" }),
                }
              : { href: "https://phantom.app/" })}
            onLoad={() => {
              removeUserId();
            }}
            size="medium"
            sx={{ ml: 2 }}
            target="_blank"
            variant="contained"
            color="secondary"
            disabled={isAuthenticating}
          >
            {isPhantom ? "Login" : "Get Phantom"}
          </Button>
        )}
      </Box>
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
