import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
} from "@mui/material";
export const CollabRequest = () => {
  return (
    <>
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
                color="primary.main"
                sx={{
                  pl: 1,
                  "&:hover": {
                    color: "rgb(250,180,25)",
                  },

                  color: "#FACC15",
                }}
                variant="subtitle2"
              >
                Address
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Title
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Description
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
