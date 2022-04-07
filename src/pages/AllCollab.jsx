import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Autocomplete,
  TextField,
  Button,
  Stack,
  Input,
} from "@mui/material";
import { MainNavbar } from "../components/main-navbar";
import { useRouter } from "next/router";
import { AllCollabCard } from "../components/Collab/AllCollabCard";

const AllCollab = ({ allcollab }) => {
  const router = useRouter();
  const [filte, setFilter] = useState("All");
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    if (filte == "All") {
      setNewData(allcollab.reverse());
    } else {
      setNewData(
        allcollab.reverse().filter((collab) => collab.skills.includes(filte))
      );
    }
  }, [filte]);
  // console.log(allcollab);

  const Skills = [
    {
      id: "3",
      skill: "All",
    },
    {
      id: "0",
      skill: "developer",
    },
    {
      id: "1",
      skill: "writer",
    },
    {
      id: "2",
      skill: "designer",
    },
  ];
  return (
    <>
      <MainNavbar />
      <Box sx={{ paddingTop: "5rem" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          All Collab
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "11rem",
          }}
        >
          <Stack sx={{ width: 300 }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={Skills.map((option) => option.skill)}
              onChange={(e) => setFilter(e.target.innerHTML)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
            {/* <Input
              placeholder="Title"
              onChange={(e) => setFilter(e.target.value)}
            /> */}
          </Stack>
        </Box>

        {newData.map(
          ({ createdBy, id, skills, status, title, description }) => {
            return (
              <>
                <AllCollabCard
                  id={id}
                  skills={skills}
                  createdBy={createdBy}
                  status={status}
                  title={title}
                  description={description}
                />
              </>
            );
          }
        )}
      </Box>
    </>
  );
};
export async function getServerSideProps(context) {
  const res = await fetch(
    // "https://intense-mesa-39554.herokuapp.com/v1/collabs"
    "https://intense-mesa-39554.herokuapp.com/v1/collabs?limit=100?&status=open"
  );
  const data = await res.json();
  const allcollab = data.results;
  // console.log(allcollab);
  return { props: { allcollab } };
}

export default AllCollab;
