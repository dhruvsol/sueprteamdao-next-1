import { useEffect, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  Dialog,
  Input,
  TextField,
} from "@mui/material";

import PropTypes from "prop-types";
import { MainNavbar } from "../../../components/main-navbar";
import { OffertoMe } from "../../../components/Collab/OffertoMe";
import { CollabRequest } from "../../../components/Collab/CollabRequest";
import { CollabGroup } from "../../../components/Collab/CollabGroup";
import NotFound from "../../404";
import CardCollab from "../../../components/Collab/Card";
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

const Mycollab = ({ data, offertome, accept, Myoffer }) => {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(false);
  const [open, setOpen] = useState(false);
  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const router = useRouter();
  useEffect(() => {
    if (router.query.MyCollab === localStorage.getItem("currentUser")) {
      setPage(true);
    }
    console.log(router.query.MyCollab);
    console.log(localStorage.getItem("currentUser"));
  }, []);
  return (
    <>
      {page === false && <NotFound />}
      {page && (
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                paddingRight: "3rem",
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
                onClick={() => handleopen()}
              >
                Claim XP
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                {/* <OffertoMember id={router.query.Collab} close={handleClose()} /> */}
                <Box>
                  <Input
                    sx={{ padding: "1rem" }}
                    type="text"
                    placeholder="Invested Hours"
                  />

                  <Input
                    focused
                    sx={{ padding: "1rem" }}
                    type="text"
                    placeholder="CollabId"
                  />
                </Box>

                <Box>
                  <TextField
                    sx={{ width: "100%" }}
                    multiline
                    rows={3}
                    placeholder="Important links"
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    multiline
                    rows={3}
                    placeholder="Your contribution"
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
                    onClick={() => handleClose()}
                  >
                    Submit
                  </Button>
                </Box>
              </Dialog>
            </Box>
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
              <Tab label="My Offers" {...a11yProps(3)} />
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
          <TabPanel value={value} index={3}>
            {/********** My Offers ***************** */}
            {Myoffer.results.map(
              ({ status, title, id, createdBy, description }) => {
                return (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingY: "2rem",
                      }}
                    >
                      <CardCollab
                        id={id}
                        Title={title}
                        Description={description}
                        Address={createdBy}
                      />
                    </Box>
                  </>
                );
              }
            )}
          </TabPanel>
        </>
      )}
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
  const resoffer = await fetch(
    `https://intense-mesa-39554.herokuapp.com/v1/collabs/?createdBy=${MyCollab}`
  );
  const data = await res.json();
  const offertome = await res11.json();
  const accept = await res2.json();
  const Myoffer = await resoffer.json();

  return { props: { data, offertome, accept, Myoffer } };
}
export default Mycollab;
