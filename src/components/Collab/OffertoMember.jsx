import { useState } from "react";
import {
  Box,
  Input,
  Stack,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
export const OffertoMember = ({ id, close }) => {
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
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [skills, setSkills] = useState(null);
  const [hours, setHours] = useState(0);
  const [collabs, setCollabId] = useState(null);
  const router = useRouter();

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

  return (
    <>
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
            close;
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};
