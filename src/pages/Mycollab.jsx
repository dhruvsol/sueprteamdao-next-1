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
        >
          <Tab label="Offered to me" {...a11yProps(0)} />
          <Tab label="Collab Requests" {...a11yProps(1)} />
          <Tab label="My collab groups" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/*********** Offered to me ***************** */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "80%",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {/* <BriefcaseIcon color="primary" fontSize="small" /> */}
                <Typography
                  color="primary.main"
                  sx={{ pl: 1 }}
                  variant="subtitle2"
                >
                  Jobs
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Find your dream job
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
              <Button size="small" color="success" variant="outlined">
                Accept
              </Button>
              <Button size="small" color="error" variant="outlined">
                Reject
              </Button>
            </CardActions>
          </Card>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/********* *  Collab Requests ***************** */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "80%",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {/* <BriefcaseIcon color="primary" fontSize="small" /> */}
                <Typography
                  color="primary.main"
                  sx={{ pl: 1 }}
                  variant="subtitle2"
                >
                  Address
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Title
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Description
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
              <Button size="small" color="success" variant="outlined">
                Accept
              </Button>
              <Button size="small" color="error" variant="outlined">
                Reject
              </Button>
            </CardActions>
          </Card>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* {arr.map(()=>{
          return(
            <div>
              
            </div>

          )
        })} */}
        {/**********  Groups ***************** */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "80%",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {/* <BriefcaseIcon color="primary" fontSize="small" /> */}
                <Typography
                  color="primary.main"
                  sx={{ pl: 1 }}
                  variant="subtitle2"
                >
                  Address
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Title
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Description
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
              <Button size="small" color="success" variant="outlined">
                Done
              </Button>
              <Button size="small" color="error" variant="outlined">
                Close Group
              </Button>
            </CardActions>
          </Card>
        </Box>
      </TabPanel>
    </>
  );
};

export default Mycollab;
