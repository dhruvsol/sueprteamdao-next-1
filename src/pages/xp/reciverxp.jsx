import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
const Reciverxp = () => {
  const router = useRouter();
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
            <>
              <Box sx={{ paddingY: "1rem" }}>
                <Typography onClick={() => router.push(`/xp/reciver/${user}`)}>
                  userId{" "}
                </Typography>
              </Box>
            </>
          );
        })} */}
      </Box>
    </>
  );
};
export default Reciverxp;
