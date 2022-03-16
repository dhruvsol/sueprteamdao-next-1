import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
export const OffertoMe = ({ collab, commitHour, address, id }) => {
  const accepted = () => {
    fetch(`https://intense-mesa-39554.herokuapp.com/v1/collaborators/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "accepted",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  const rejected = () => {
    fetch(`https://intense-mesa-39554.herokuapp.com/v1/collaborators/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "rejected",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <>
      {}
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
                {address}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Collab Id: {collab}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Commited Hours : {commitHour}
            </Typography>
          </CardContent>
          <Divider />
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              size="small"
              color="success"
              variant="outlined"
              onClick={() => accepted()}
            >
              Accept
            </Button>
            <Button
              size="small"
              color="error"
              variant="outlined"
              onClick={() => rejected()}
            >
              Reject
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
