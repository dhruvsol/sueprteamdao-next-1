import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Input,
  Autocomplete,
  Dialog,
  Stack,
  TextField,
} from "@mui/material";
import { useMoralis } from "react-moralis";
import { Menu as MenuIcon } from "../icons/menu";
import { Logo } from "./logo";
import { OfferForm } from "../components/Collab/OfferForm";

export const MainNavbar = (props) => {
  const { onOpenSidebar } = props;

  const {
    isAuthenticated,
    authenticate,
    isAuthenticating,
    user,
    logout,
    isLoggingOut,
  } = useMoralis();

  const [isPhantom, setIsPhantom] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkill] = useState("");
  const [url, setUrl] = useState("");
  const [ratio, setRatio] = useState("");
  const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        setIsPhantom(true);
      }
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const test = [
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
  ];

  useEffect(() => {
    getProvider();
  }, []);

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
              <Logo
                sx={{
                  display: {
                    md: "inline",
                    xs: "none",
                  },
                  height: 40,
                  width: 40,
                }}
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

            <Button sx={{ ml: 2 }} target="_blank" variant="contained">
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
            <OfferForm skills={test} />
          </Dialog>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
