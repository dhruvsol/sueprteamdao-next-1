import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
export const CollabGroup = ({ collab, commitHour, address, id }) => {
  const [b1, setB] = useState(null);
  const [user, setUser] = useState(null);
  const fetchData = async () => {
    fetch(`http://localhost:5000/v1/collabs/${collab}`)
      .then((res) => res.json())
      .then((data1) => setB(data1.createdBy));
  };
  const fetchUsers = async () => {
    const data = await fetch(`http://localhost:5000/v1/users/${b1}`).then(
      (res) => res.json()
    );
    console.log(data);
  };
  useEffect(() => {
    fetchData();
    // fetchUsers();
    fetch(`http://localhost:5000/v1/users/${b1}`)
      .then((res) => res.json())
      .then((dat) => console.log(dat));
  }, []);
  console.log(b1);
  console.log(user);
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
              onClick={() => fnMain()}
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
