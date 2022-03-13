import { useState } from "react";
import Image from "next/image";
import { Typography, Button, Input, Box, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
const Detailpage = () => {
  const [open, setOpen] = useState(false);
  const [discord, setDiscord] = useState("");
  const [hours, setHours] = useState("");
  const [Link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [collabid, setCollab] = useState("");
  const [note, setNote] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const PostData = ({ discord, hours, Link, file, collabid, note }) => {
    axios.post("", {
      discord,
      hours,
      Link,
      file,
      collabid,
      note,
    });
  };
  const handleChange = () => {
    const forData = new FormData();
    forData.append("file", e.traget.value[0]);
    setFile(forData);
  };
  return (
    <>
      <Image
        width="100%"
        src="/lukasz-szmigiel-NeSykhHkyQw-unsplash.jpg"
        alt="bounty"
        height="10rem"
      />
      <Typography
        sx={{ fontSize: "4rem", display: "flex", justifyContent: "center" }}
      >
        Name
      </Typography>
      <Typography
        sx={{ display: "flex", justifyContent: "center ", padding: "3rem" }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
        fugiat eos saepe in quas nihil nesciunt, minus officia corporis
        consequatur esse amet ad, odit quia eius aliquid laudantium consectetur
        corrupti?
      </Typography>
      <Typography
        sx={{ display: "flex", justifyContent: "center ", padding: "2rem" }}
      >
        ammount$
      </Typography>
      <Typography
        sx={{ display: "flex", justifyContent: "center ", padding: "2rem" }}
      >
        Dealine
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center " }}>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={{ width: "10rem", display: "flex", justifyContent: "center" }}
        >
          Apply
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
            placeholder="Discord Id"
            onChange={(e) => setDiscord(e.traget.value)}
          />
          <Input
            sx={{ padding: "1rem" }}
            type="text"
            placeholder="How much hrs have you put to get things done ?"
            onChange={(e) => setHours(e.traget.value)}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Input
            sx={{ padding: "1rem" }}
            type="file"
            placeholder="File"
            onChange={handleChange}
          />
          <Input
            sx={{ padding: "1rem" }}
            type="url"
            placeholder="url"
            onChange={(e) => setLink(e.traget.value)}
          />
        </Box>
        <Box>
          <Input
            sx={{ padding: "1rem" }}
            type="tel"
            placeholder="Enter Collab ID"
            onChange={(e) => setCollab(e.traget.value)}
          />
        </Box>
        <TextField
          type="text"
          placeholder="Any notes for reviewer"
          onChange={(e) => setNote(e.traget.value)}
        />
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
              PostData(discord, hours, Link, file, collabid, note);
            }}
          >
            Summit
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default Detailpage;
