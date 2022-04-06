import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  Dialog,
  Autocomplete,
  TextField,
  Input,
  Tab,
  Tabs,
  Paper,
  Stack,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";
import CardCollab from "../../components/Collab/Card";
import { MainNavbar } from "../../components/main-navbar";
import { OffertoMember } from "../../components/Collab/OffertoMember";
import { JoinCollab } from "../../components/Collab/JoinCollab";
import { useRouter } from "next/router";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Collab = ({ data, openOffer, JoinOffers }) => {
  const [open, setOpen] = useState(false);
  const [exist, setExist] = useState(false);
  const [offer, setOffer] = useState(false);
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [skills, setSkills] = useState([]);
  const [hours, setHours] = useState(0);
  const [collabs, setCollabId] = useState(null);
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {}, []);
  const handleClose = () => {
    setOpen(false);
    setOffer(false);
  };
  //////// for exist ////////////
  const handleExistOpen = () => {
    setExist(true);
    setOpen(false);
  };
  const handleExistClose = () => {
    setExist(false);
    setOpen(true);
  };
  //////// for offer ////////////

  const handleOfferOpen = () => {
    setOffer(true);
    setOpen(false);
  };
  const { Collab } = router.query;
  const PostData = () => {
    fetch("https://intense-mesa-39554.herokuapp.com/v1/collaborators/", {
      method: "POST",
      body: JSON.stringify({
        collab: collabs,
        commitHours: hours,
        status: "offered",
        user: Collab,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
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
    <>
      <MainNavbar />
      <Box
        sx={{
          paddingTop: "5rem",
          display: "flex",
          paddingLeft: "4rem",

          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "8rem",
          }}
        >
          <AccountCircleIcon fontSize="large" />
          <Box sx={{ paddingLeft: "2rem" }}>
            <Typography
              sx={{
                fontSize: "2rem",
              }}
            >
              {data.name}
            </Typography>
            <Typography>{data.role}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingLeft: "4rem",
          }}
        >
          <Button
            onClick={() => {
              handleOfferOpen();
            }}
            variant="contanined"
            sx={{
              "&:hover": {
                color: "black",
                backgroundColor: "rgb(250,180,25)",
              },
              backgroundColor: "#FACC15",
              color: "black",
            }}
          >
            Invite
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          paddingLeft: "4rem",
          paddingBottom: "3rem",
        }}
      >
        <Paper
          sx={{
            backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "2rem",
            width: "20rem",
          }}
        >
          <Typography sx={{ fontSize: "1rem" }}>{data.skills[0]}</Typography>
          <Typography sx={{ paddingX: "1.5rem", fontSize: "1rem" }}>
            {data.superXP} Super-XPs
          </Typography>
        </Paper>
      </Box>

      <Dialog
        open={offer}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <OffertoMember id={router.query.Collab} close={handleClose()} /> */}
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
              multiple
              id="tags-standard"
              options={Skills}
              getOptionLabel={(option) => option.skill}
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
        <Box sx={{ display: "flex" }}>
          <Input
            focused
            sx={{ padding: "1rem" }}
            type="text"
            placeholder="CollabId"
            onChange={(e) => setCollabId(e.target.value)}
          />
          <Input
            focused
            sx={{ padding: "1rem" }}
            type="tel"
            placeholder="Hours"
            onChange={(e) => setHours(e.target.value)}
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%", paddingLeft: "3rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Open offers" {...a11yProps(0)} />
              <Tab label="Joined Collabs" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* map 1 */}
            {openOffer.results.map(
              ({ status, title, id, createdBy, skills, description }) => {
                return (
                  <>
                    {status === "open" && (
                      <Box sx={{ paddingY: "2rem" }}>
                        <CardCollab
                          id={id}
                          Title={title}
                          Description={description}
                          Address={createdBy}
                        />
                      </Box>
                    )}
                  </>
                );
              }
            )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* map 2 */}

            {JoinOffers.results.map(({ commitHours, id, collab, user }) => {
              return (
                <>
                  <Box sx={{ paddingY: "2rem" }}>
                    <JoinCollab
                      collab={collab}
                      id={id}
                      address={user}
                      commitHour={commitHours}
                    />
                  </Box>
                </>
              );
            })}
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};
export async function getServerSideProps(context) {
  const { Collab } = context.query;
  const que = context.query.Collab;
  // Fetch data from external API
  const res = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/users/${Collab}`
  );
  const data = await res.json();
  const resoffer = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/collabs/?createdBy=${Collab}`
  );
  const resJoin = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/collaborators/?status=accepted&user=${Collab}`
  );
  const openOffer = await resoffer.json();
  const JoinOffers = await resJoin.json();
  return { props: { data, openOffer, JoinOffers, que } };
}
// export async function
export default Collab;
