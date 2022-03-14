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
export const OffertoMe = () => {
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
              {/* <BriefcaseIcon color="primary" fontSize="small" /> */}
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
                Jobs
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Find your dream job
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
          <Divider />
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <Button size="small" color="success" variant="outlined">
              Accept
            </Button>
            <Button size="small" color="error" variant="outlined">
              Reject
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
