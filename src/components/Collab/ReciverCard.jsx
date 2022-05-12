import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export const ReciverCard = ({ collabId, userId, impLinks, contri, hours }) => {
  const [accept, setAccept] = useState(false);
  const [reject, setReject] = useState(false);
  const [marked, setMarked] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingY: "1.2rem",
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
            <Typography
              sx={{
                pl: 1,
                "&:hover": {
                  color: "rgb(250,180,25)",
                },

                color: "#FACC15",
              }}
              variant="subtitle2"
            >
              {collabId}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ mt: 2 }}>
            userId: {userId}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Contributed Hours :{hours}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Important Links: {impLinks}
          </Typography>

          <Typography color="textSecondary" variant="body2">
            Contribution done :{contri}
          </Typography>
        </CardContent>
        <Divider />
        {accept == true && (
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <DoneIcon />
          </CardActions>
        )}
        {reject == true && (
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <CloseIcon />
          </CardActions>
        )}
        {marked === false && (
          <>
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
              <Button
                onClick={() => {
                  setAccept(true);
                  setMarked(true);
                }}
                size="small"
                color="success"
                variant="outlined"
              >
                Accept
              </Button>
              <Button
                onClick={() => {
                  setReject(true);
                  setMarked(true);
                }}
                size="small"
                color="error"
                variant="outlined"
              >
                Reject
              </Button>
            </CardActions>
          </>
        )}
      </Card>
    </Box>
  );
};
