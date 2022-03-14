import React from "react";
import { useRouter } from "next/router";
import { Box, Typography, CardContent, Card } from "@mui/material";
const CardCollab = ({ Title, Address, Description, id }) => {
  const router = useRouter();
  return (
    <>
      <Card
        sx={{
          width: "80%",
        }}
        onClick={() => router.push(`/Collab/${id}`)}
      >
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography color="secondary" sx={{ pl: 1 }} variant="subtitle2">
              {Address}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ mt: 2 }}>
            {Title}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {Description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardCollab;
