import { useState } from "react";
import { useRouter } from "next/router";
import { Typography, Box, Button, Dialog, TextField } from "@mui/material";
import { MainNavbar } from "../../components/main-navbar";
const DetailCollab = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const CollabId = router.query.DetailCollab;
  return (
    <>
      <MainNavbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "3rem" }}>Hello</Typography>
          <Typography>{CollabId}</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "1.5rem", paddingTop: "2rem" }}>
            Members
          </Typography>
          <Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ paddingRight: "1rem" }}>01</Typography>
              <Typography> Address</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "3rem",
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
            handleClickOpen();
          }}
        >
          Apply
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            width: "30rem",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            height: "12rem",
          }}
        >
          <TextField placeholder="How will you contribute?" />
          <TextField placeholder="How much hrs can u put?" />
        </Box>
        <Box
          sx={{ padding: "1rem", display: "flex", justifyContent: "center" }}
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
          >
            Submit
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default DetailCollab;
