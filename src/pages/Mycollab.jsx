import { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Divider,
  CardContent,
  Card,
  CardActions,
  Button,
} from "@mui/material";

import PropTypes, { arrayOf } from "prop-types";
import { MainNavbar } from "../components/main-navbar";
import { OffertoMe } from "../components/Collab/OffertoMe";
import { CollabRequest } from "../components/Collab/CollabRequest";
import { CollabGroup } from "../components/Collab/CollabGroup";
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

const Mycollab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <MainNavbar />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          paddingTop: "5rem",
          paddingLeft: "3rem",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Offered to me" {...a11yProps(0)} />
          <Tab label="Collab Requests" {...a11yProps(1)} />
          <Tab label="My collab groups" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/*********** Offered to me ***************** */}
        <OffertoMe />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/********* *  Collab Requests ***************** */}
        <CollabRequest />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* {arr.map(()=>{
          return(
            <div>
              
            </div>

          )
        })} */}
        {/**********  Groups ***************** */}
        <CollabGroup />
      </TabPanel>
    </>
  );
};

export default Mycollab;
