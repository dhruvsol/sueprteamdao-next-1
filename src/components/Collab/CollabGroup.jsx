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
export const CollabGroup = () => {
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
              Done
            </Button>
            <Button size="small" color="error" variant="outlined">
              Close Group
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
