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
  Input,
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { Menu as MenuIcon } from "../icons/menu";

import log from "./superteam.jpg";
import { OfferForm } from "../components/Collab/OfferForm";

export const MainNavbar = (props) => {
  const { onOpenSidebar } = props;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState([]);

  // const userId = localStorage.getItem("currentUser");
  const PostData = () => {
    fetch("https://intense-mesa-39554.herokuapp.com/v1/collabs/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        desciption: description,
        skills: skill,
        createdBy: localStorage.getItem("currentUser"),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const id = router.query.MyCollab;
  useEffect(() => {
    const userId = localStorage.getItem("currentUser");
    setTitle(userId);
  }, []);

  const Skills = [
    {
      id: "0",
      skill: "Devloper",
    },
    {
      id: "1",
      skill: "Writer",
    },
    {
      id: "2",
      skill: "Designer",
    },
  ];
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
            <NextLink href="/AllCollab" passHref>
              <Link
                color="textSecondary"
                underline="none"
                variant="subtitle2"
                sx={{ padding: "0 1rem" }}
              >
                All Collab
              </Link>
            </NextLink>

            <Link
              onClick={() => router.push(`/Collab/Mycollab/${title}`)}
              color="textSecondary"
              underline="none"
              variant="subtitle2"
              sx={{ padding: "0 1rem", cursor: "pointer" }}
            >
              My Collabs
            </Link>

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
              onClick={() => router.push("https://bdyc-six.vercel.app/")}
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
            <Box>
              <Input
                sx={{ padding: "1rem" }}
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                focused
                sx={{ padding: "1rem" }}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Stack
                spacing={3}
                sx={{ width: "100%", overflow: "hidden", padding: "1rem" }}
              >
                <Autocomplete
                  single
                  id="tags-standard"
                  options={Skills}
                  getOptionLabel={(option) => option.skill}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Skills"
                      placeholder="Skills"
                    />
                  )}
                />
              </Stack>
            </Box>

            <Box
              sx={{
                height: "6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    color: "black",
                    backgroundColor: "rgb(250,180,25)",
                  },
                  backgroundColor: "#FACC15",
                  color: "black",
                }}
                onClick={() => {
                  PostData();
                  handleClose();
                }}
              >
                Submit
              </Button>
            </Box>
          </Dialog>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
