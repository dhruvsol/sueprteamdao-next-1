import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Typography,
  Box,
  Button,
  Dialog,
  TextField,
  Divider,
  Paper,
} from "@mui/material";
import { MainNavbar } from "../../../components/main-navbar";
import { GetName } from "../../../components/Collab/GetName";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const DetailCollab = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [hours, setHours] = useState(0);
  const [contri, setcontri] = useState("");
  const [collab, setCollab] = useState("");
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(data.id);
  const PostData = () => {
    fetch("https://intense-mesa-39554.herokuapp.com/v1/collaborators/", {
      method: "POST",
      body: JSON.stringify({
        collab: data.id,
        commitHours: hours,
        note: contri,
        status: "requested",
        user: localStorage.getItem("currentUser"),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <>
      <MainNavbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: "80%",
            height: "40rem",
            // background: "linear-gradient(to right, #cac531, #f3f9a7)",
          }}
        >
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
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "3rem" }}>{data.title}</Typography>
              <Typography>{data.description}</Typography>
              <Divider />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "2rem",
                  paddingTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => router.push(`/Collab/${data.createdBy}`)}
              >
                <AccountCircleIcon fontSize="large" />
                <Box sx={{ paddingX: "1rem" }}>
                  <GetName userId={data.createdBy} />
                </Box>
                {/* {data.createdBy} */}
              </Typography>

              <Box sx={{ paddingTop: "1rem" }}>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "1rem",
                  }}
                >
                  Members
                </Typography>
                {data.members.map((member) => {
                  return (
                    <>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography
                          onClick={() => router.push(`/Collab/${member}`)}
                          sx={{
                            paddingY: "0.5rem",
                            paddingX: "1rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <AccountCircleIcon />
                          <Box sx={{ paddingX: "0.5rem", fontSize: "1.5rem" }}>
                            <GetName userId={member} />
                          </Box>
                        </Typography>
                      </Box>
                    </>
                  );
                })}
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
              <TextField
                onChange={(e) => setcontri(e.target.value)}
                placeholder="How will you contribute?"
              />
              <TextField
                onChange={(e) => setHours(parseInt(e.target.value))}
                placeholder="How much hrs can u put?"
              />
            </Box>
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  handleClose();
                  PostData();
                }}
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
        </Paper>
      </Box>
    </>
  );
};

export async function getServerSideProps(context) {
  const { DetailCollab } = context.query;

  // Fetch data from external API
  const res = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/collabs/${DetailCollab}`
  );
  const data = await res.json();
  return { props: { data } };
}
export default DetailCollab;
