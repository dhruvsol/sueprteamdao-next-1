import React from "react";
import { Box, Avatar } from "@mui/material";
import { MainNavbar } from "../components/main-navbar";

const Profile = () => {
  return (
    <>
      <MainNavbar />
      <Box
        sx={{
          paddingTop: "8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: "10rem",
            height: "10rem",
          }}
          alt="profile"
          src="./1.jpg"
        />
      </Box>
      <Box></Box>
    </>
  );
};

export default Profile;
