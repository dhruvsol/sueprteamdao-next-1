import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
export const AllCollabCard = ({
  createdBy,
  id,
  skills,
  status,
  title,
  description,
}) => {
  const router = useRouter();
  return (
    <>
      <Box
        key={id}
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
                {createdBy}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              {title}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {description}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {status}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {skills}
            </Typography>
          </CardContent>
          <Divider />
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={() => router.push(`/Collab/Details/${id}`)}
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
