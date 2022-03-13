import React from "react";
import {
  Box,
  Input,
  Stack,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
export const OfferForm = () => {
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
                onChange={(e) => setSkill(e.target.value)}
              />
            )}
          />
        </Stack>
      </Box>
      <Input
        sx={{ padding: "1rem" }}
        type="url"
        placeholder="Enter Bounty ID"
        onChange={(e) => setUrl(e.target.value)}
      />
      <Box
        sx={{
          height: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            PostData(title, description, skills, url, ratio);
          }}
        >
          Summit
        </Button>
      </Box>
    </>
  );
};
