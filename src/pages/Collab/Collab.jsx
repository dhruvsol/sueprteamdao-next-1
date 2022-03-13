import React, { useState } from "react";
// import { SingleCollab } from "../../components/Collab/SingleCollab";
import {
  Typography,
  Box,
  Button,
  Dialog,
  Autocomplete,
  TextField,
  Tab,
  Tabs,
  Avatar,
} from "@mui/material";
import PropTypes from "prop-types";

import CardCollab from "../../components/Collab/Card";
import axios from "axios";
import { MainNavbar } from "../../components/main-navbar";
import { OfferForm } from "../../components/Collab/OfferForm";
import { Phot } from "./tanmay.jpg";
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

const Collab = () => {
  const [open, setOpen] = useState(false);
  const [exist, setExist] = useState(false);
  const [offer, setOffer] = useState(false);
  const [value, setValue] = useState(0);
  const PostData = ({ title, description, skills, url, ratio }) => {
    console.log("hello");
    axios.post("", {
      title,
      description,
      skills,
      url,
      ratio,
    });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //////// main  ////////////
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
  const handleOfferClose = () => {
    setOffer(false);
    setOpen(true);
  };
  const handleOfferOpen = () => {
    setOffer(true);
    setOpen(false);
  };
  const Skills = [
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
  ];
  const ExistOffer = [
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
      <MainNavbar />
      <Box
        sx={{
          paddingTop: "5rem",
          display: "flex",
          paddingLeft: "4rem",
          paddingBottom: "2rem",
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
          {/* <Image src={Phot} alt="profile" width="90" height="90" /> */}
          <Avatar
            sx={{
              width: "5rem",
              height: "5rem",
            }}
            alt="Tanmay"
            src={Phot}
          />

          <Typography
            sx={{
              paddingLeft: "2rem",
              fontSize: "2rem",
            }}
          >
            UserName
          </Typography>
        </Box>
        <Box
          sx={{
            paddingLeft: "4rem",
          }}
        >
          <Button
            onClick={() => {
              handleClickOpen();
            }}
            variant="outlined"
          >
            Invite
          </Button>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ padding: "3rem" }}
      >
        <Box
          sx={{
            width: "25rem",
            height: "10rem",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={() => handleExistOpen()}>
            Select your existing offer
          </Button>
          <Button variant="contained" onClick={() => handleOfferOpen()}>
            Create New Offer
          </Button>
        </Box>
      </Dialog>
      {/* for exist  */}
      <Dialog
        open={exist}
        onClose={handleExistClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            width: "25rem",
            height: "9rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Autocomplete
            sx={{ width: "21rem", paddingTop: "3rem" }}
            id="tags-standard"
            options={ExistOffer}
            autoHighlight
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Exisiting Offer"
                placeholder="Exisiting Offer"
                // onChange={(e) => setSkills(e.target.value)}
              />
            )}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingY: "2rem" }}
        >
          <Button variant="contained">Submit</Button>
        </Box>
      </Dialog>
      <Dialog
        open={offer}
        onClose={handleOfferClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <OfferForm skills={Skills} />
      </Dialog>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* <CardCollab /> */}
        <Box sx={{ width: "100%", paddingLeft: "3rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Open offers" {...a11yProps(0)} />
              <Tab label="Joined Collabs" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CardCollab
              Title="Title"
              Description="Description"
              Address="Address"
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CardCollab
              Title="Title"
              Description="Description"
              Address="Address"
            />
          </TabPanel>
        </Box>
      </Box>
      {/* {arr.map(({ name, description }) => {
        return (
          <>
            <div key={}>
              <SingleCollab
                name="bounty 1"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
        fugiat eos saepe in quas nihil nesciunt, minus officia corporis
        consequatur esse amet ad, odit quia eius aliquid laudantium consectetur
        corrupti?"
              />
            </div>
          </>
        );
      })} */}
    </>
  );
};

export default Collab;
