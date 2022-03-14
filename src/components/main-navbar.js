import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Dialog,
} from "@mui/material";
import { useRouter } from "next/router";
import { Menu as MenuIcon } from "../icons/menu";

import log from "./superteam.jpg";
import { OfferForm } from "../components/Collab/OfferForm";
import { divide } from "lodash";

export const MainNavbar = (props) => {
  const { onOpenSidebar } = props;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkill] = useState("");
  const [url, setUrl] = useState("");
  // const getProvider = () => {
  //   if ("solana" in window) {
  //     const provider = window.solana;
  //     if (provider.isPhantom) {
  //       setIsPhantom(true);
  //     }
  //   }
  // };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   getProvider();
  // }, []);
  const router = useRouter();
  const id = router.query.MyCollab;
  console.log(id);
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <NextLink href="/" passHref>
            <a>
              <Image
                className="rounded"
                src={log}
                alt="logo"
                width="60"
                height="65"
              />
            </a>
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            {/* {router.query === "/Collab/Collab" && (
              <div> */}
            <NextLink href="/Mycollab" passHref>
              <Link
                color="textSecondary"
                underline="none"
                variant="subtitle2"
                sx={{ padding: "0 1rem" }}
              >
                My Collabs
              </Link>
            </NextLink>
            {/* </div>
            )}
            : {<div>hello</div>} */}
            <Link
              color="textSecondary"
              sx={{ ml: 2, padding: "0 2rem", cursor: "pointer" }}
              underline="none"
              variant="subtitle2"
              onClick={() => {
                handleClickOpen();
              }}
            >
              Create an offer
            </Link>
            <Button
              sx={{
                ml: 2,
                "&:hover": {
                  color: "black",
                  backgroundColor: "rgb(250,180,25)",
                },
                backgroundColor: "#FACC15",
                color: "black",
              }}
              target="_blank"
              variant="contained"
            >
              BDYC
            </Button>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ padding: "3rem" }}
          >
            <OfferForm />
          </Dialog>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
