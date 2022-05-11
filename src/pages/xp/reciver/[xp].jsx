import { useRouter } from "next/router";
import { Box, Button, Typography } from "@mui/material";
const Xp = () => {
  const router = useRouter();
  console.log(router.query.xp);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          gap: "1rem",
        }}
      >
        <Box>
          <Typography>collab ID</Typography>
          <Typography>contribution</Typography>
          <Typography>Hours Invested</Typography>
          <Typography>Important links</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
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
          >
            Accept
          </Button>
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
          >
            Reject
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Xp;
