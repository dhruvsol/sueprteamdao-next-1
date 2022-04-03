import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

import PropTypes from "prop-types";
import { MainNavbar } from "../../../components/main-navbar";
import { OffertoMe } from "../../../components/Collab/OffertoMe";
import { CollabRequest } from "../../../components/Collab/CollabRequest";
import { CollabGroup } from "../../../components/Collab/CollabGroup";
import { JoinCollab } from "../../../components/Collab/JoinCollab";
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

const Mycollab = ({ data, offertome, accept }) => {
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

        {offertome.results.map(({ collab, commitHours, user, id }) => {
          return (
            <>
              <Box key={id} sx={{ paddingY: "1rem" }}>
                <OffertoMe
                  id={id}
                  collab={collab}
                  commitHour={commitHours}
                  address={user}
                />
              </Box>
            </>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/********* *  Collab Requests ***************** */}
        {data.results.map(({ collab, commitHours, user, id }) => {
          return (
            <>
              <Box key={id} sx={{ paddingY: "1rem" }}>
                <CollabRequest
                  id={id}
                  collab={collab}
                  commitHour={commitHours}
                  address={user}
                />
                {/* <JoinCollab /> */}
              </Box>
            </>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/**********  Groups ***************** */}
        {accept.results.map(({ collab, commitHours, user, id }) => {
          return (
            <>
              <Box sx={{ paddingY: "1rem" }} key={id}>
                <CollabGroup
                  id={id}
                  collab={collab}
                  commitHour={commitHours}
                  address={user}
                />
              </Box>
            </>
          );
        })}
      </TabPanel>
    </>
  );
};
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { MyCollab } = context.query;
  const res = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/collaborators?status=requested&user=${MyCollab}`
  );
  const res11 = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/collaborators?status=offered&user=${MyCollab}`
  );

  const res2 = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/collaborators?status=accepted&user=${MyCollab}`
  );
  const data = await res.json();
  const offertome = await res11.json();
  const accept = await res2.json();
  console.log(data);
  return { props: { data, offertome, accept } };
}
export default Mycollab;
