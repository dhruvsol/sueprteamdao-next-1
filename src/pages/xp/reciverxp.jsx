import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { Stack } from "immutable";
import { useRouter } from "next/router";
import { useState } from "react";
import { AllCollabCard } from "../../components/Collab/AllCollabCard";
import { ReciverCard } from "../../components/Collab/ReciverCard";
import { MainNavbar } from "../../components/main-navbar";
const Reciverxp = () => {
  const router = useRouter();
  const [page, sePage] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* {newData.map(({ collab_id, contribution, hours, linksm, user }) => {
          return (
            <> */}
        <Box sx={{ paddingY: "1rem" }}>
          <Typography onClick={() => router.push(`/xp/reciver/${user}`)}>
            userId{" "}
          </Typography>
        </Box>
        {/* </> */}
        {/* );
        })} */}
      </Box>
      <MainNavbar />
      <Box sx={{ paddingTop: "5rem" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Claim Requests
        </Typography>

        <ReciverCard
          collabId="62304661a51798256081cc33"
          userId="62303d89a51798256081cc02"
          hours="10"
          contri="made supercollabs "
          impLinks="hello world"
        />
        <ReciverCard
          collabId="623046eba51798256081cc39"
          userId="62303d89a51798256081cc02"
          hours="20"
          contri="help in dao talent club"
          impLinks="hello world"
        />
        <ReciverCard
          collabId="62304786a51798256081cc3d"
          userId="62303d89a51798256081cc02"
          hours="2"
          contri="Helped in supermeet"
          impLinks=""
        />
      </Box>
    </>
  );
};
export default Reciverxp;
