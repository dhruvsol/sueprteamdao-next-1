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
export const CollabGroup = ({ collab, commitHour, address, id, collabId }) => {
  const Done = () => {
    fetch(`http://localhost:5000/v1/collabs/${collab}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "sucess",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    fetch(`http://localhost:5000/v1/collaborators/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "rejected",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  const Close = () => {
    fetch(`http://localhost:5000/v1/collabs/${collab}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "failed",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    fetch(`http://localhost:5000/v1/collaborators/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "rejected",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  //  Function for XP Allocation
  const fnMain = async () => {
    const res = await fetch(
      `http://localhost:5000/v1/collabs/62304661a51798256081cc33`
    );
    const data = JSON.stringify(res);
    console.log(data, res);
    console.log(createdBy, members);
    const { superXP, id } = fetch(
      `http://localhost:5000/v1/users/${createdBy}`
    );
    const newXp = superXP + 10;
    console.log(superXP);
    fetch(`http://localhost:5000/v1/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        superXP: newXp,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  // console.log(JSON.stringify());
  // console.log(createdBy);
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
                {address}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Collab Id: {collab}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Commited Hours: {commitHour}
            </Typography>
          </CardContent>
          <Divider />
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              size="small"
              color="success"
              variant="outlined"
              onClick={() => Done()}
            >
              Done
            </Button>
            <Button
              size="small"
              color="error"
              variant="outlined"
              onClick={() => Close()}
            >
              Close Group
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
export async function getServerSideProps(context) {
  const res = fetch(
    `http://localhost:5000/v1/collabs/62304661a51798256081cc33`
  );
  const collabId = await res.json();
  return { props: { collabId } };
}
