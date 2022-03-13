import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  Box,
  Button,
  Dialog,
  Input,
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import axios from "axios";
export const SingleCollab = ({ Name, description }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [preswin, setPrevwin] = useState("");
  const [value, setValue] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const PostData = ({ name, skills, preswin, value }) => {
    console.log("helo");
    axios.post("", {
      name,
      skills,
      preswin,
      value,
    });
  };
  const top100Films = [
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
  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardContent></CardContent>
          <Box sx={{ padding: "2rem" }}>
            <Button
              onClick={() => {
                handleClickOpen();
              }}
              variant="outlined"
            >
              Collabrate
            </Button>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Box sx={{ display: "flex" }}>
              <Input
                sx={{ padding: "1rem" }}
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Stack
                spacing={3}
                sx={{ width: "100%", overflow: "hidden", padding: "1rem" }}
              >
                <Autocomplete
                  multiple
                  id="tags-standard"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Skills"
                      placeholder="Skills"
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  )}
                />
              </Stack>
            </Box>
            <Box>
              <Input
                sx={{ padding: "1rem" }}
                placeholder="Previous wins "
                type="text"
                onChange={(e) => setPrevwin(e.target.value)}
              />
              <TextField
                type="text"
                placeholder="Values You can provide"
                onChange={(e) => setValue(e.target.value)}
              />
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
                variant="outlined"
                onClick={() => {
                  PostData(name, skills, preswin, value);
                }}
              >
                Summit
              </Button>
            </Box>
          </Dialog>
        </CardActionArea>
      </Card>
    </>
  );
};
